# Jira to Markdown Converter Setup Guide

This GitHub Actions workflow converts Jira tickets to Markdown files with all attachments included.

## 🔧 Setup Requirements

### 1. GitHub Secrets Configuration

Add these secrets to your repository settings (`Settings > Secrets and variables > Actions`):

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `JIRA_BASE_URL` | Your Jira instance URL | `https://yourcompany.atlassian.net` |
| `JIRA_EMAIL` | Your Jira account email | `your.email@company.com` |
| `JIRA_API_TOKEN` | Jira API token | `ATATT3xFfGF0...` |

### 2. Generate Jira API Token

1. Go to [Atlassian Account Settings](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click "Create API token"
3. Give it a label (e.g., "GitHub Actions")
4. Copy the generated token
5. Add it as `JIRA_API_TOKEN` secret in GitHub

### 3. Required Permissions

Your Jira account needs:
- **Browse Projects** permission for the target project
- **View Issues** permission
- **View Comments** permission  
- **Download Attachments** permission

## 🚀 Usage

### Manual Trigger (Recommended)

1. Go to your repository's **Actions** tab
2. Select **"Jira to Markdown Converter"** workflow
3. Click **"Run workflow"**
4. Enter:
   - **Jira ticket key** (e.g., `PROJ-123`)
   - **Output path** (optional, defaults to `docs/tickets`)
5. Click **"Run workflow"**

### Automatic Trigger (Optional)

You can modify the workflow to trigger automatically:

```yaml
# Add to the 'on:' section for automatic triggers
on:
  issues:
    types: [opened]
  # Extract Jira ticket from issue title/body
```

## 📁 Output Structure

The workflow creates this structure:

```
docs/tickets/PROJ-123/
├── PROJ-123.md           # Main markdown file
└── attachments/          # Downloaded attachments
    ├── screenshot.png
    ├── document.pdf
    └── log-file.txt
```

## 📋 Generated Markdown Format

The generated markdown includes:

### Header
- Ticket key and summary as title

### Ticket Information Table
- Key, Type, Status, Priority
- Reporter, Assignee
- Created/Updated dates
- Labels, Components

### Content Sections
- **Description** (converted from Jira markup)
- **Custom Fields** (if any)
- **Attachments** (with download links)
- **Comments** (with author and timestamps)
- **Metadata** (generation info and source link)

### Jira Markup Conversion

The workflow converts Jira markup to Markdown:

| Jira | Markdown | Result |
|------|----------|--------|
| `*bold*` | `**bold**` | **bold** |
| `_italic_` | `*italic*` | *italic* |
| `+code+` | `` `code` `` | `code` |
| `{code}...{code}` | ``` ```...``` ``` | Code blocks |
| `[text\|url]` | `[text](url)` | [links](url) |

## 🛠 Customization

### Modify Output Format

Edit the `generateMarkdown()` function in the workflow to:
- Change markdown structure
- Add/remove sections
- Modify formatting
- Include additional fields

### Add Custom Fields Mapping

```javascript
// Map custom field IDs to readable names
const customFieldMapping = {
  'customfield_10001': 'Story Points',
  'customfield_10002': 'Epic Link',
  'customfield_10003': 'Sprint'
};
```

### Filter Comments

```javascript
// Only include comments from specific users
const filteredComments = comments.filter(comment => 
  comment.author?.emailAddress.includes('@yourcompany.com')
);
```

## 🔍 Troubleshooting

### Common Issues

**Authentication Failed**
- Verify `JIRA_BASE_URL` doesn't have trailing slash
- Check `JIRA_EMAIL` matches your Atlassian account
- Regenerate `JIRA_API_TOKEN` if expired

**Permission Denied**
- Ensure your account has project access
- Check if the ticket exists and is accessible
- Verify API token has correct permissions

**Attachments Not Downloading**
- Check attachment permissions in Jira
- Verify file sizes aren't too large
- Ensure sufficient GitHub Actions storage

## ✅ How to Verify Workflow Success

### 1. Monitor Workflow Execution

**In GitHub Actions Tab:**
1. Go to **Actions** → **"Jira to Markdown Converter"**
2. Click on your workflow run
3. Watch the real-time progress with status indicators:
   - 🟡 **Yellow circle**: Running
   - ✅ **Green checkmark**: Success
   - ❌ **Red X**: Failed
   - ⏸️ **Gray circle**: Pending/Queued

### 2. Check Workflow Logs

**Real-time Logging:**
- Click **any step** to see detailed logs
- Look for these success messages:
  ```
  ✅ Successfully converted PROJ-123 to docs/tickets/PROJ-123/PROJ-123.md
  📁 Attachments saved to: docs/tickets/PROJ-123/attachments
  ```

**Error Indicators:**
- Red ❌ steps indicate failures
- Check error messages for troubleshooting

### 3. Verify Generated Files

**Successful runs create:**
- 📄 **New markdown file**: `docs/tickets/TICKET-KEY/TICKET-KEY.md`
- 📁 **Attachments folder**: `docs/tickets/TICKET-KEY/attachments/`
- 🔄 **New commit** with message: `"Add Jira ticket TICKET-KEY as Markdown"`

**Check in Repository:**
1. Go to **Code** tab
2. Navigate to `docs/tickets/`
3. Look for your ticket folder
4. Verify markdown file and attachments exist

### 4. Review Workflow Summary

**GitHub provides a summary with:**
- ✅ **Status**: Successfully converted
- 📊 **Execution time**
- 📁 **Files created**
- 🔗 **Direct links** to generated content

### 5. Email Notifications (if enabled)

GitHub sends email notifications for:
- ✅ **Successful runs**
- ❌ **Failed runs**
- ⏸️ **Cancelled runs**

### 6. Check Repository Changes

**After successful run:**
```bash
# Pull latest changes to see new files
git pull origin main

# List created files
ls -la docs/tickets/TICKET-KEY/
```

### 7. Common Success Indicators

**Workflow completed successfully if you see:**
- All steps have ✅ green checkmarks
- Log shows "Successfully converted [TICKET-KEY]"
- New commit appears in repository
- Markdown file exists and contains ticket data
- Attachments downloaded (if any existed)

### 8. Quick Success Test

**Verify the markdown file contains:**
- Ticket title and summary
- Properly formatted table with ticket info
- Description with converted Jira markup
- Comments section (if comments existed)
- Attachment links (if attachments existed)
- Metadata footer with generation timestamp

### Debug Mode

Add this step to enable debug logging:

```yaml
- name: Enable Debug
  run: echo "ACTIONS_STEP_DEBUG=true" >> $GITHUB_ENV
```

### Failed Workflow Indicators

**🚨 Workflow failed if you see:**
- Red ❌ on any step
- Error messages in logs like:
  ```
  ❌ Error: Authentication failed
  ❌ Error: Issue not found
  ❌ Error: Permission denied
  ```
- No new files created in repository
- No new commit generated

**Common Error Messages & Solutions:**

| Error Message | Cause | Solution |
|---------------|-------|----------|
| `Authentication failed` | Wrong credentials | Check GitHub secrets |
| `Issue not found` | Invalid ticket key | Verify ticket exists |
| `Permission denied` | Insufficient Jira permissions | Request admin access |
| `Cannot find module` | Missing dependencies | Workflow will auto-install |
| `Network timeout` | Jira server unreachable | Check JIRA_BASE_URL |
| `Exit code 128` | Git operation failed | Check repository permissions |
| `set-output deprecated` | Old GitHub Actions syntax | Fixed in latest version |

**Debugging Steps:**
1. **Check GitHub Secrets** are properly set
2. **Verify Jira ticket exists** and is accessible
3. **Test API access** manually with curl
4. **Enable debug mode** for detailed logging
5. **Check Jira permissions** for your account
6. **Verify repository write permissions** for GitHub Actions

**Git-related Issues (Exit Code 128):**
- Ensure GitHub Actions has write permissions to the repository
- Check if branch protection rules block automated commits
- Verify the repository isn't archived or read-only

## 📊 Workflow Outputs

The workflow provides these outputs:
- `markdown_path`: Path to generated markdown file
- `attachments_dir`: Path to attachments directory

Use in subsequent steps:
```yaml
- name: Use outputs
  run: |
    echo "Markdown: ${{ steps.convert.outputs.markdown_path }}"
    echo "Attachments: ${{ steps.convert.outputs.attachments_dir }}"
```

## 🔄 Integration Ideas

### With Pull Requests
```yaml
# Create PR with the converted ticket
- name: Create Pull Request
  uses: peter-evans/create-pull-request@v5
  with:
    title: "Add Jira ticket ${{ github.event.inputs.jira_ticket }}"
    body: "Converted from Jira ticket"
```

### With Notifications
```yaml
# Notify team via Slack
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: success
    text: "Jira ticket ${{ github.event.inputs.jira_ticket }} converted to Markdown"
```

### Batch Processing
```yaml
# Process multiple tickets
strategy:
  matrix:
    ticket: [PROJ-123, PROJ-124, PROJ-125]
```

## 📝 Example Usage

1. **Documentation Migration**: Convert existing Jira tickets to documentation
2. **Release Notes**: Generate release notes from Jira tickets
3. **Incident Reports**: Archive incident tickets as markdown
4. **Knowledge Base**: Build a searchable knowledge base from tickets

---

**Note**: This workflow creates commits automatically. Ensure your branch protection rules allow the GitHub Actions bot to push changes.
