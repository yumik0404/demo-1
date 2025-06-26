# Yumi Kim Personal Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:5173/`

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── HeroSection.tsx      # Landing hero with name and CTA
│   ├── AboutSection.tsx     # About me with headshot
│   ├── SkillsSection.tsx    # Skills with tech icons
│   ├── ProjectsSection.tsx  # Featured projects
│   └── ContactSection.tsx   # Contact information
├── assets/              # Source assets (processed by Vite)
│   ├── headshot-demo.JPG    # Profile photo
│   ├── Kim, Tressa Resume 2025.docx.pdf  # Resume file
│   ├── react.svg            # React icon
│   ├── python.svg           # Python icon
│   └── aws.svg              # AWS icon
├── App.tsx              # Main app component
├── main.tsx             # App entry point with Datadog
├── index.css            # Global styles and Tailwind imports
└── declarations.d.ts    # TypeScript declarations for assets

public/
└── assets/              # Static assets (served directly)
    ├── headshot-demo.JPG    # Profile photo (copy)
    ├── react.svg            # Tech icons (copies)
    ├── python.svg
    └── aws.svg
```

## 🎨 Design System

### Color Palette
- **#BC8DA0** (Mauve) - Hover states, accent colors
- **#A04668** (Rose) - Primary headings, important text
- **#AB4967** (Pink) - Secondary text, labels
- **#D9D0DE** (Lavender) - Section backgrounds, cards
- **#ADC698** (Sage) - Buttons, links, CTA elements

### Usage Examples
```tsx
// Primary heading
<h1 className="text-[#A04668]">Heading</h1>

// Background sections
<section className="bg-[#D9D0DE]">Content</section>

// Buttons
<button className="bg-[#ADC698] hover:bg-[#BC8DA0]">CTA</button>
```

## 🛠 Technical Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Datadog RUM** - Real user monitoring

## 📊 Analytics & Monitoring

The site includes Datadog Real User Monitoring (RUM) to track:
- Page views and user sessions
- Performance metrics
- Error tracking
- User interactions

### Datadog Configuration
Located in `src/main.tsx`:
```tsx
datadogRum.init({
  applicationId: 'YOUR_APP_ID',    // Replace with actual ID
  clientToken: 'YOUR_CLIENT_TOKEN', // Replace with actual token
  site: 'datadoghq.com',
  service: 'yumi-homepage',
  env: 'production',
  sampleRate: 100,
  trackInteractions: true,
});
```

## 🖼 Asset Management

### Images
- **Profile photo**: Place headshot in both `src/assets/` and `public/assets/`
- **Tech icons**: SVG files in `public/assets/` for direct serving
- **Resume**: PDF file in `src/assets/` (bundled with app)

### Asset Guidelines
- Profile photo: 3120x2080 JPEG (will be displayed as 128x128 circular)
- Tech icons: 48x48 SVG with consistent styling
- Resume: PDF format, reasonable file size (<5MB)

## 🔧 Configuration Files

### Vite (`vite.config.ts`)
- Handles asset processing for JPG, PNG, SVG, PDF files
- Configured for React with TypeScript support

### Tailwind (`tailwind.config.js`)
- Custom color palette defined but using hex values directly in components
- Responsive breakpoints and utilities

### TypeScript (`declarations.d.ts`)
- Module declarations for image and PDF imports
- Ensures type safety for asset imports

## 📱 Responsive Design

The site is mobile-first and responsive:
- **Mobile**: Single column layout, stacked components
- **Tablet**: Two-column grid for projects
- **Desktop**: Three-column grid for projects, optimized spacing

## 🔄 Content Updates

### Updating Personal Information
1. **Name/Title**: Edit `HeroSection.tsx`
2. **About Text**: Edit `AboutSection.tsx`
3. **Email**: Edit `ContactSection.tsx`
4. **Resume**: Replace PDF in `src/assets/`

### Adding Projects
Edit `ProjectsSection.tsx`:
```tsx
const projects = [
  { 
    title: 'Project Name', 
    description: 'Brief description', 
    link: 'https://project-url.com' 
  },
  // Add more projects...
];
```

### Adding Skills
Edit `SkillsSection.tsx`:
```tsx
const skills = [
  { name: 'Technology', icon: '/assets/icon.svg' },
  // Add more skills...
];
```

## 🚀 Deployment

### Build Process
```bash
npm run build
```
Generates optimized files in `dist/` directory.

### Deployment Checklist
- [ ] Update Datadog credentials for production
- [ ] Verify all assets are properly included
- [ ] Test responsive design on multiple devices
- [ ] Check resume PDF accessibility
- [ ] Validate contact email functionality

## 🐛 Troubleshooting

### Common Issues

**Images not loading:**
- Ensure images exist in both `src/assets/` and `public/assets/`
- Check file names match exactly (case-sensitive)
- Verify image file types are supported

**Styling not applied:**
- Check Tailwind CSS is processing correctly
- Verify hex color values are properly formatted
- Ensure PostCSS configuration is correct

**Resume not downloading:**
- Confirm PDF file is in `src/assets/`
- Check file name matches import in `HeroSection.tsx`
- Verify PDF file is not corrupted

### Development Commands

```bash
# Install new dependency
npm install package-name

# Type checking
npx tsc --noEmit

# Lint files
npx eslint src/

# Check bundle size
npm run build && npx vite-bundle-analyzer dist/
```

## 📝 Maintenance Notes

- Update dependencies monthly: `npm update`
- Review Datadog metrics weekly for performance insights
- Test cross-browser compatibility quarterly
- Update resume and projects as needed
- Monitor Core Web Vitals through Datadog

## 🤝 Contributing

When making changes:
1. Test on multiple screen sizes
2. Verify all assets load correctly
3. Check TypeScript compilation
4. Validate accessibility (color contrast, alt tags)
5. Test resume download functionality

---

**Last Updated**: June 26, 2025  
**Maintainer**: Yumi Kim  
**Version**: 1.0.0
