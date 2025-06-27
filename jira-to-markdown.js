const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

class JiraToMarkdown {
  constructor() {
    this.baseURL = process.env.JIRA_BASE_URL;
    this.email = process.env.JIRA_EMAIL;
    this.apiToken = process.env.JIRA_API_TOKEN;
    this.ticketKey = process.argv[2];
    this.outputPath = process.argv[3] || 'docs/tickets';
    
    if (!this.baseURL || !this.email || !this.apiToken) {
      throw new Error('Missing required environment variables');
    }
    
    this.auth = Buffer.from(`${this.email}:${this.apiToken}`).toString('base64');
  }

  async makeJiraRequest(endpoint) {
    try {
      const response = await axios.get(`${this.baseURL}/rest/api/3/${endpoint}`, {
        headers: {
          'Authorization': `Basic ${this.auth}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error making request to ${endpoint}:`, error.message);
      throw error;
    }
  }

  async downloadAttachment(attachment, ticketDir) {
    try {
      const response = await axios.get(attachment.content, {
        headers: {
          'Authorization': `Basic ${this.auth}`
        },
        responseType: 'stream'
      });

      const filePath = path.join(ticketDir, 'attachments', attachment.filename);
      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', () => resolve(filePath));
        writer.on('error', reject);
      });
    } catch (error) {
      console.error(`Error downloading attachment ${attachment.filename}:`, error.message);
      return null;
    }
  }

  formatField(value) {
    if (!value) return 'N/A';
    if (typeof value === 'object') {
      if (value.displayName) return value.displayName;
      if (value.name) return value.name;
      if (value.value) return value.value;
      if (Array.isArray(value)) {
        return value.map(item => this.formatField(item)).join(', ');
      }
      return JSON.stringify(value, null, 2);
    }
    return value.toString();
  }

  // New method to parse Atlassian Document Format (ADF)
  parseADFContent(content) {
    if (!content) return '';
    
    if (typeof content === 'string') {
      return this.convertJiraToMarkdown(content);
    }
    
    if (Array.isArray(content)) {
      return content.map(node => this.parseADFNode(node)).join('\n\n');
    }
    
    if (content.content) {
      return this.parseADFContent(content.content);
    }
    
    return '';
  }

  parseADFNode(node) {
    if (!node || !node.type) return '';
    
    let text = '';
    
    switch (node.type) {
      case 'paragraph':
        text = node.content ? node.content.map(child => this.parseADFNode(child)).join('') : '';
        return text + '\n';
        
      case 'heading':
        const level = node.attrs?.level || 1;
        const headingText = node.content ? node.content.map(child => this.parseADFNode(child)).join('') : '';
        return '#'.repeat(Math.min(level + 2, 6)) + ' ' + headingText + '\n';
        
      case 'bulletList':
        return node.content ? node.content.map(child => this.parseADFNode(child)).join('') : '';
        
      case 'orderedList':
        return node.content ? node.content.map((child, index) => {
          const listItem = this.parseADFNode(child);
          return listItem.replace(/^- /, `${index + 1}. `);
        }).join('') : '';
        
      case 'listItem':
        const itemText = node.content ? node.content.map(child => this.parseADFNode(child)).join('') : '';
        return '- ' + itemText.trim() + '\n';
        
      case 'codeBlock':
        const language = node.attrs?.language || '';
        const codeText = node.content ? node.content.map(child => this.parseADFNode(child)).join('') : '';
        return '```' + language + '\n' + codeText + '\n```\n';
        
      case 'blockquote':
        const quoteText = node.content ? node.content.map(child => this.parseADFNode(child)).join('') : '';
        return '> ' + quoteText.replace(/\n/g, '\n> ') + '\n';
        
      case 'text':
        let textContent = node.text || '';
        if (node.marks) {
          node.marks.forEach(mark => {
            switch (mark.type) {
              case 'strong':
                textContent = `**${textContent}**`;
                break;
              case 'em':
                textContent = `*${textContent}*`;
                break;
              case 'code':
                textContent = `\`${textContent}\``;
                break;
              case 'link':
                const href = mark.attrs?.href || '#';
                textContent = `[${textContent}](${href})`;
                break;
            }
          });
        }
        return textContent;
        
      case 'hardBreak':
        return '\n';
        
      case 'rule':
        return '---\n';
        
      default:
        // For unknown node types, try to extract text content
        if (node.content) {
          return node.content.map(child => this.parseADFNode(child)).join('');
        }
        if (node.text) {
          return node.text;
        }
        return '';
    }
  }

  convertJiraToMarkdown(content) {
    if (!content) return '';
    
    // Handle legacy Jira markup (Wiki markup)
    return content
      .replace(/h([1-6])\.\s*(.+)/g, (match, level, text) => '#'.repeat(parseInt(level)) + ' ' + text)
      .replace(/\*([^*]+)\*/g, '**$1**')  // Bold
      .replace(/_([^_]+)_/g, '*$1*')      // Italic
      .replace(/\+([^+]+)\+/g, '`$1`')    // Code
      .replace(/\^([^^]+)\^/g, '<sup>$1</sup>') // Superscript
      .replace(/~([^~]+)~/g, '<sub>$1</sub>')   // Subscript
      .replace(/\{code(?::([^}]*))?\}(.*?)\{code\}/gs, '```$1\n$2\n```') // Code blocks
      .replace(/\{quote\}(.*?)\{quote\}/gs, '> $1') // Quotes
      .replace(/\[([^\]]+)\|([^\]]+)\]/g, '[$1]($2)') // Links
      .replace(/!([^!]+)!/g, '![]($1)')  // Images
      .replace(/^\* /gm, '- ')           // Bullet lists
      .replace(/^# /gm, '1. ');          // Numbered lists
  }

  async generateMarkdown(ticket, comments, attachments) {
    const fields = ticket.fields;
    let markdown = `# ${this.ticketKey}: ${fields.summary}\n\n`;
    
    // Metadata table
    markdown += `## Ticket Information\n\n`;
    markdown += `| Field | Value |\n`;
    markdown += `|-------|-------|\n`;
    markdown += `| **Key** | ${ticket.key} |\n`;
    markdown += `| **Type** | ${this.formatField(fields.issuetype)} |\n`;
    markdown += `| **Status** | ${this.formatField(fields.status)} |\n`;
    markdown += `| **Priority** | ${this.formatField(fields.priority)} |\n`;
    markdown += `| **Reporter** | ${this.formatField(fields.reporter)} |\n`;
    markdown += `| **Assignee** | ${this.formatField(fields.assignee)} |\n`;
    markdown += `| **Created** | ${new Date(fields.created).toLocaleString()} |\n`;
    markdown += `| **Updated** | ${new Date(fields.updated).toLocaleString()} |\n`;
    
    if (fields.labels && fields.labels.length > 0) {
      markdown += `| **Labels** | ${fields.labels.join(', ')} |\n`;
    }
    
    if (fields.components && fields.components.length > 0) {
      markdown += `| **Components** | ${fields.components.map(c => c.name).join(', ')} |\n`;
    }
    
    markdown += `\n`;

    // Description with improved ADF parsing
    if (fields.description) {
      markdown += `## Description\n\n`;
      
      // Try to parse as ADF first, fallback to legacy markup
      let descriptionText = '';
      if (fields.description.content) {
        // Modern ADF format
        descriptionText = this.parseADFContent(fields.description.content);
      } else if (typeof fields.description === 'string') {
        // Legacy wiki markup
        descriptionText = this.convertJiraToMarkdown(fields.description);
      } else if (fields.description.text) {
        // Plain text
        descriptionText = fields.description.text;
      }
      
      markdown += `${descriptionText}\n\n`;
    }

    // Custom fields (filter out empty/meaningless ones)
    const customFields = Object.entries(fields).filter(([key, value]) => 
      key.startsWith('customfield_') && value !== null && value !== '' && 
      !key.includes('rank') && !key.includes('10019') // Skip rank fields and meaningless ones
    );
    
    if (customFields.length > 0) {
      markdown += `## Custom Fields\n\n`;
      customFields.forEach(([key, value]) => {
        const formattedValue = this.formatField(value);
        if (formattedValue !== 'N/A' && formattedValue.trim() !== '') {
          markdown += `- **${key}**: ${formattedValue}\n`;
        }
      });
      markdown += `\n`;
    }

    // Attachments
    if (attachments && attachments.length > 0) {
      markdown += `## Attachments\n\n`;
      attachments.forEach(attachment => {
        const relativePath = `./attachments/${attachment.filename}`;
        markdown += `- [${attachment.filename}](${relativePath}) (${attachment.size} bytes)\n`;
      });
      markdown += `\n`;
    }

    // Comments with improved parsing
    if (comments && comments.length > 0) {
      markdown += `## Comments\n\n`;
      comments.forEach((comment, index) => {
        const author = comment.author?.displayName || 'Unknown';
        const created = new Date(comment.created).toLocaleString();
        
        let body = '';
        if (comment.body?.content) {
          body = this.parseADFContent(comment.body.content);
        } else if (typeof comment.body === 'string') {
          body = this.convertJiraToMarkdown(comment.body);
        } else if (comment.body?.text) {
          body = comment.body.text;
        }
        
        markdown += `### Comment ${index + 1}\n`;
        markdown += `**Author**: ${author}  \n`;
        markdown += `**Date**: ${created}\n\n`;
        markdown += `${body}\n\n`;
        markdown += `---\n\n`;
      });
    }

    // Metadata footer
    markdown += `## Metadata\n\n`;
    markdown += `- **Generated**: ${new Date().toISOString()}\n`;
    markdown += `- **Source**: [${this.ticketKey}](${this.baseURL}/browse/${this.ticketKey})\n`;
    markdown += `- **Workflow**: GitHub Actions\n`;

    return markdown;
  }

  async run() {
    try {
      console.log(`Converting Jira ticket ${this.ticketKey} to Markdown...`);
      
      // Create output directory
      const ticketDir = path.join(this.outputPath, this.ticketKey);
      const attachmentsDir = path.join(ticketDir, 'attachments');
      
      if (!fs.existsSync(ticketDir)) {
        fs.mkdirSync(ticketDir, { recursive: true });
      }
      if (!fs.existsSync(attachmentsDir)) {
        fs.mkdirSync(attachmentsDir, { recursive: true });
      }

      // Fetch ticket data
      console.log('Fetching ticket data...');
      const ticket = await this.makeJiraRequest(`issue/${this.ticketKey}`);
      
      // Fetch comments
      console.log('Fetching comments...');
      const commentsData = await this.makeJiraRequest(`issue/${this.ticketKey}/comment`);
      const comments = commentsData.comments || [];
      
      // Download attachments
      console.log('Downloading attachments...');
      const attachments = ticket.fields.attachment || [];
      const downloadPromises = attachments.map(attachment => 
        this.downloadAttachment(attachment, ticketDir)
      );
      await Promise.all(downloadPromises);
      
      // Generate markdown
      console.log('Generating markdown...');
      const markdown = await this.generateMarkdown(ticket, comments, attachments);
      
      // Write markdown file
      const markdownPath = path.join(ticketDir, `${this.ticketKey}.md`);
      fs.writeFileSync(markdownPath, markdown);
      
      console.log(`✅ Successfully converted ${this.ticketKey} to ${markdownPath}`);
      console.log(`📁 Attachments saved to: ${attachmentsDir}`);
      
      // Output for GitHub Actions using Environment Files
      const outputFile = process.env.GITHUB_OUTPUT;
      if (outputFile) {
        fs.appendFileSync(outputFile, `markdown_path=${markdownPath}\n`);
        fs.appendFileSync(outputFile, `attachments_dir=${attachmentsDir}\n`);
      }
      
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  }
}

// Run the converter
const converter = new JiraToMarkdown();
converter.run();
