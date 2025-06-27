# Deployment Guide - Yumi Kim Homepage

This guide covers deploying the Yumi Kim homepage to various hosting platforms.

## Build Process

Before deploying, create a production build:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test the build locally (optional)
npm run preview
```

This creates a `dist/` folder with optimized files ready for deployment.

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers excellent React/Vite support with automatic deployments.

#### Via GitHub Integration
1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repo
4. Configure environment variables:
   ```
   VITE_DATADOG_APPLICATION_ID=your_app_id
   VITE_DATADOG_CLIENT_TOKEN=your_token
   VITE_DATADOG_ENV=production
   ```
5. Deploy automatically

#### Via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add VITE_DATADOG_APPLICATION_ID
vercel env add VITE_DATADOG_CLIENT_TOKEN

# Redeploy with env vars
vercel --prod
```

### 2. Netlify

Netlify provides easy drag-and-drop deployment.

#### Drag & Drop Method
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist/` folder to the deploy area
4. Set environment variables in Site Settings > Environment Variables

#### Git Integration
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in site settings

#### Netlify Configuration File
Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### 3. GitHub Pages

Deploy directly from your GitHub repository.

#### Setup GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_DATADOG_APPLICATION_ID: ${{ secrets.VITE_DATADOG_APPLICATION_ID }}
        VITE_DATADOG_CLIENT_TOKEN: ${{ secrets.VITE_DATADOG_CLIENT_TOKEN }}
        VITE_DATADOG_ENV: production
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Setup Steps
1. Enable GitHub Pages in repository settings
2. Add secrets in Settings > Secrets and Variables > Actions
3. Push changes to trigger deployment

### 4. AWS S3 + CloudFront

For enterprise-grade hosting with CDN.

#### S3 Setup
```bash
# Install AWS CLI
aws configure

# Create S3 bucket
aws s3 mb s3://yumi-homepage

# Enable static website hosting
aws s3 website s3://yumi-homepage --index-document index.html

# Upload build files
aws s3 sync dist/ s3://yumi-homepage --delete
```

#### CloudFront Distribution
1. Create CloudFront distribution
2. Set S3 bucket as origin
3. Configure custom error pages (404 → index.html)
4. Set up custom domain (optional)

## Environment Variables

### Required for Production
```bash
VITE_DATADOG_APPLICATION_ID=your_datadog_app_id
VITE_DATADOG_CLIENT_TOKEN=your_datadog_client_token
VITE_DATADOG_SITE=datadoghq.com
VITE_DATADOG_ENV=production
VITE_DATADOG_SERVICE=yumi-homepage
VITE_DATADOG_VERSION=1.0.0
```

### Platform-Specific Setup

#### Vercel
- Add in Project Settings > Environment Variables
- Available in build and runtime

#### Netlify
- Add in Site Settings > Environment Variables
- Choose "Build time" for Vite variables

#### GitHub Pages
- Add as Repository Secrets
- Use in GitHub Actions workflow

#### AWS
- Set in Lambda environment or use AWS Systems Manager

## Custom Domain Setup

### DNS Configuration
For custom domain (e.g., `yumikim.dev`):

1. **A Record**: Point to hosting provider IP
2. **CNAME**: Point `www` to hosting provider
3. **SSL**: Most platforms provide automatic HTTPS

### Platform-Specific Domain Setup

#### Vercel
1. Add domain in Project Settings > Domains
2. Update DNS records as instructed
3. SSL certificate auto-generated

#### Netlify
1. Add domain in Site Settings > Domain Management
2. Update nameservers or DNS records
3. Enable HTTPS in domain settings

## Performance Optimization

### Pre-deployment Checklist
- [ ] Optimize images (use WebP format)
- [ ] Enable gzip compression
- [ ] Set up proper caching headers
- [ ] Test Core Web Vitals
- [ ] Verify mobile responsiveness
- [ ] Check accessibility (WAVE, Lighthouse)

### Build Optimization
```bash
# Analyze bundle size
npm run build -- --analyze

# Check for unused dependencies
npx depcheck

# Optimize images in public folder
# Use tools like imagemin or tinypng
```

## Monitoring & Analytics

### Post-Deployment Setup
1. **Datadog RUM**: Verify events are being tracked
2. **Google Analytics**: Add GA4 tracking (optional)
3. **Lighthouse CI**: Set up performance monitoring
4. **Uptime Monitoring**: Use services like UptimeRobot

### Testing Deployment
```bash
# Test production build locally
npm run preview

# Check all pages load correctly
# Verify contact form works
# Test mobile responsiveness
# Validate HTML markup
# Check console for errors
```

## Rollback Strategy

### Quick Rollback Options
- **Vercel**: Use deployment dashboard to promote previous version
- **Netlify**: Deploy previous build from deploys page
- **GitHub Pages**: Revert commit and re-trigger action
- **AWS**: Update S3 files from backup

### Best Practices
1. Always test builds locally first
2. Use staging environments for major changes
3. Keep backups of working deployments
4. Monitor error rates after deployment
5. Have a communication plan for issues

## Troubleshooting

### Common Deployment Issues

#### Build Failures
```bash
# Check Node.js version compatibility
# Verify all dependencies are in package.json
# Check for TypeScript errors
npm run build
```

#### 404 Errors on Refresh
- Configure SPA routing redirects
- Ensure all routes point to index.html

#### Environment Variables Not Working
- Verify variable names start with `VITE_`
- Check they're set in deployment platform
- Rebuild after adding new variables

#### Slow Loading
- Enable gzip compression
- Optimize images and assets
- Check bundle size with analyzer
- Use CDN for static assets

---

Choose the deployment method that best fits your needs. Vercel and Netlify are recommended for their simplicity and excellent React support.
