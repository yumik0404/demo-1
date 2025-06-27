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

  convertJiraToMarkdown(content) {
    if (!content) return '';
    
    // Convert Jira markup to Markdown
    return content
      .replace(/\*([^*]+)\*/g, '**$1**')  // Bold
      .replace(/_([^_]+)_/g, '*$1*')      // Italic
      .replace(/\+([^+]+)\+/g, '`$1`')    // Code
      .replace(/\^([^^]+)\^/g, '<sup>$1</sup>') // Superscript
      .replace(/~([^~]+)~/g, '<sub>$1</sub>')   // Subscript
      .replace(/\{code(?::([^}]*))?\}(.*?)\{code\}/gs, '```$1\n$2\n```') // Code blocks
      .replace(/\{quote\}(.*?)\{quote\}/gs, '> $1') // Quotes
      .replace(/\[([^\]]+)\|([^\]]+)\]/g, '[$1]($2)') // Links
      .replace(/!([^!]+)!/g, '![]($1)');  // Images
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

    // Description
    if (fields.description) {
      markdown += `## Description\n\n`;
      markdown += `${this.convertJiraToMarkdown(fields.description.content ? 
        fields.description.content.map(c => c.content?.map(cc => cc.text).join('') || '').join('\n') : 
        fields.description)}\n\n`;
    }

    // Custom fields
    const customFields = Object.entries(fields).filter(([key, value]) => 
      key.startsWith('customfield_') && value !== null
    );
    
    if (customFields.length > 0) {
      markdown += `## Custom Fields\n\n`;
      customFields.forEach(([key, value]) => {
        markdown += `- **${key}**: ${this.formatField(value)}\n`;
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

    // Comments
    if (comments && comments.length > 0) {
      markdown += `## Comments\n\n`;
      comments.forEach((comment, index) => {
        const author = comment.author?.displayName || 'Unknown';
        const created = new Date(comment.created).toLocaleString();
        const body = this.convertJiraToMarkdown(comment.body?.content ?
          comment.body.content.map(c => c.content?.map(cc => cc.text).join('') || '').join('\n') :
          comment.body || '');
        
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
