# Setup Guide - Yumi Kim Homepage

This guide will help you set up and run the Yumi Kim personal homepage project locally.

## Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd yumi-homepage

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:5173
```

## Detailed Setup

### 1. Prerequisites

Ensure you have the following installed:
- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (comes with Node.js)
- **Git** for version control

Check versions:
```bash
node --version
npm --version
git --version
```

### 2. Environment Configuration

#### For Development (Optional)
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your Datadog credentials (optional for local development)
# The app will work without Datadog configuration
```

#### For Production (Required for monitoring)
Set these environment variables in your deployment platform:
```bash
VITE_DATADOG_APPLICATION_ID=your_actual_app_id
VITE_DATADOG_CLIENT_TOKEN=your_actual_client_token
VITE_DATADOG_ENV=production
```

### 3. Development Workflow

```bash
# Install dependencies (run this first)
npm install

# Start development server with hot reload
npm run dev

# In another terminal, run linting (optional)
npm run lint

# Build for production testing
npm run build

# Preview production build
npm run preview
```

### 4. Project Structure Overview

```
yumi-homepage/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── types/           # TypeScript definitions
│   ├── App.tsx          # Main app
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Environment template
├── tailwind.config.js   # TailwindCSS config
├── postcss.config.js    # PostCSS config
├── vite.config.ts       # Vite build config
└── package.json         # Dependencies
```

## Features Available

### Current (DD-5 Complete)
- ✅ React + TypeScript foundation
- ✅ Responsive component structure
- ✅ Basic styling and layout
- ✅ Hero, About, Skills, Projects, Contact sections

### Ready to Implement (DD-6)
- 🔄 TailwindCSS styling system
- 🔄 Custom color palette
- 🔄 Datadog monitoring integration
- 🔄 Professional content and assets
- 🔄 Enhanced animations and interactions

## Troubleshooting

### Common Issues

#### Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Development server won't start
```bash
# Check if port 5173 is in use
lsof -ti:5173

# Kill process using port (if needed)
kill -9 $(lsof -ti:5173)

# Try starting again
npm run dev
```

#### TypeScript errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Restart TypeScript server in VS Code
Cmd+Shift+P -> "TypeScript: Restart TS Server"
```

#### TailwindCSS not working
```bash
# Ensure PostCSS is properly configured
# Check that tailwind.config.js exists
# Verify @tailwind directives in index.css
```

## Next Steps

1. **Style Implementation**: Apply TailwindCSS styling to all components
2. **Content Integration**: Add real project data and professional content
3. **Monitoring Setup**: Configure Datadog RUM for user analytics
4. **Performance Optimization**: Implement lazy loading and code splitting
5. **Deployment**: Set up CI/CD pipeline for automatic deployments

## Support

If you encounter issues:
1. Check this guide first
2. Review the main README.md
3. Check GitHub issues
4. Contact the developer

---

Happy coding! 🚀
