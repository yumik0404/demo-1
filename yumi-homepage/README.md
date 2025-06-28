# Yumi Kim - Personal Homepage

A modern, responsive personal homepage built with React, TypeScript, and Vite. This project showcases a clean, professional design with semantic HTML structure and mobile-friendly responsive layout.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Responsive Design**: Mobile-first CSS with flexible layouts
- **Component Architecture**: Modular, reusable React components
- **TypeScript Support**: Full type safety and IntelliSense
- **Fast Development**: Hot module replacement with Vite
- **Production Ready**: Optimized build process
- **Semantic HTML**: Accessibility-focused markup
- **Clean Code**: ESLint configuration and code standards

## 📋 Project Structure

```
yumi-homepage/
├── public/                     # Static assets
├── src/
│   ├── components/            # React components
│   │   ├── HeroSection.tsx    # Full-screen hero section
│   │   ├── AboutSection.tsx   # About me with bio
│   │   ├── SkillsSection.tsx  # Skills showcase
│   │   ├── ProjectsSection.tsx # Featured projects
│   │   └── ContactSection.tsx # Contact information
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   ├── index.css             # Global styles and responsive design
│   └── vite-env.d.ts         # Vite environment types
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # Node.js TypeScript config
├── vite.config.ts            # Vite build configuration
└── README.md                 # This file
```

## 🛠️ Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (usually comes with Node.js)
- **Git** (for version control)

Check your versions:
```bash
node --version
npm --version
git --version
```

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd yumi-homepage
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- React 18
- TypeScript
- Vite
- ESLint
- Type definitions

### 3. Start Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another available port).

## 🔧 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter for code quality
npm run lint
```

## 🏗️ Development Workflow

### Starting Development

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **Open browser**: Navigate to `http://localhost:5173`
4. **Start coding**: Edit files in `src/` directory

### Building for Production

1. **Run build**: `npm run build`
2. **Output location**: Built files will be in `dist/` directory
3. **Test build**: `npm run preview` to test production build locally

### Code Quality

- **TypeScript**: All files use TypeScript for type safety
- **ESLint**: Code linting for consistent style
- **Components**: Functional components with proper typing
- **Interfaces**: TypeScript interfaces for props and data

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (grid layouts adapt)
- **Desktop**: > 1024px (full multi-column layouts)

### Key Responsive Features

- Flexible CSS Grid and Flexbox layouts
- Scalable typography
- Touch-friendly interactive elements
- Optimized images and spacing
- Accessible navigation patterns

## 🎯 Component Overview

### HeroSection
- Full-screen hero with name and tagline
- Gradient background
- Centered content layout

### AboutSection
- Personal bio and description
- Profile image placeholder
- Two-column layout (responsive)

### SkillsSection
- Grid of technical skills
- Icons and skill names
- Hover effects and animations

### ProjectsSection
- Featured project showcases
- Project descriptions and technologies
- Responsive card layout

### ContactSection
- Contact information and mailto link
- Professional messaging
- Call-to-action styling

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

This creates optimized files in the `dist/` directory ready for deployment.

### Deployment Options

**Vercel** (Recommended)
1. Connect your GitHub repository
2. Automatic deployments on push
3. Zero configuration needed

**Netlify**
1. Drag and drop `dist/` folder
2. Or connect Git repository
3. Build command: `npm run build`
4. Publish directory: `dist`

**GitHub Pages**
1. Build locally: `npm run build`
2. Deploy `dist/` contents to gh-pages branch

**Traditional Hosting**
1. Build: `npm run build`
2. Upload `dist/` contents to web server

## 🔧 Configuration

### TypeScript Configuration

The project uses two TypeScript configurations:
- `tsconfig.json`: Main application configuration
- `tsconfig.node.json`: Node.js tooling configuration

Key settings:
- Target: ES2020
- Module: ESNext
- JSX: react-jsx
- Strict mode enabled

### Vite Configuration

Located in `vite.config.ts`:
- React plugin enabled
- Development server settings
- Build optimization

## 🐛 Troubleshooting

### Common Issues

**Dependencies not installing**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Development server won't start**
```bash
# Check if port is in use
lsof -ti:5173
# Kill process if needed
kill -9 $(lsof -ti:5173)
```

**TypeScript errors**
- Ensure all dependencies are installed
- Check TypeScript version compatibility
- Restart TypeScript server in your editor

**Build failures**
- Run `npm run lint` to check for code issues
- Ensure all imports are correctly typed
- Check for missing dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `npm run build` (ensure build succeeds)
5. Commit changes: `git commit -m 'Add feature'`
6. Push to branch: `git push origin feature-name`
7. Create a Pull Request

### Code Standards

- Use TypeScript for all new files
- Follow existing component patterns
- Write semantic HTML
- Ensure mobile responsiveness
- Test on multiple devices

## 📞 Support

If you encounter any issues:

1. Check this README first
2. Look at the troubleshooting section
3. Check the project's issues on GitHub
4. Create a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Your environment (Node version, OS, etc.)

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ by Yumi Kim**

*Last updated: June 2025*
