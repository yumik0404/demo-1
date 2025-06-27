# Yumi Kim - Personal Homepage

A modern, responsive personal homepage showcasing professional skills, projects, and contact information. Built with React, TypeScript, and TailwindCSS with integrated monitoring and analytics.

## 🌟 Features

- **Modern Design System** with custom color palette and typography
- **Responsive Layout** optimized for all device sizes
- **Hero Section** with animated introduction and call-to-action
- **About Me** with professional headshot and downloadable resume
- **Skills Showcase** with interactive proficiency indicators
- **Project Portfolio** with detailed descriptions and links
- **Contact Form** with multiple contact methods
- **Real User Monitoring** with Datadog integration
- **Performance Optimized** with Vite build system
- **Accessibility Features** with semantic HTML and ARIA labels

## 🎨 Design & Branding

### Color Palette
- **Primary**: `#BC8DA0` (Dusty Rose)
- **Secondary**: `#A04668` (Deep Rose)
- **Accent**: `#AB4967` (Rose Red)
- **Neutral**: `#D9D0DE` (Light Lavender)
- **Background**: `#ADC698` (Sage Green)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body Text**: Inter (Google Fonts)
- **Custom text gradients** and hover effects

### Visual Elements
- **Subtle shadows** and depth
- **Smooth animations** and transitions
- **Hover states** for interactive elements
- **Clean visual flow** between sections

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, TailwindCSS v4
- **Build Tool**: Vite
- **Styling**: TailwindCSS with PostCSS
- **Monitoring**: Datadog Real User Monitoring (RUM)
- **Code Quality**: ESLint, TypeScript strict mode
- **Fonts**: Google Fonts (Inter, Poppins)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd yumi-homepage

# Install dependencies
npm install

# Create environment file for Datadog (optional)
cp .env.example .env
# Edit .env with your Datadog credentials

# Start development server
npm run dev
```

### Scripts

```bash
# Development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
yumi-homepage/
├── public/
│   ├── headshot-demo.JPG           # Professional headshot
│   └── Kim, Tressa Resume 2025.docx.pdf  # Downloadable resume
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx         # Animated hero with CTA
│   │   ├── AboutSection.tsx        # Bio, photo, resume download
│   │   ├── SkillsSection.tsx       # Skills with proficiency bars
│   │   ├── ProjectsSection.tsx     # Project portfolio
│   │   └── ContactSection.tsx      # Contact form & social links
│   ├── types/
│   │   ├── datadog.d.ts           # Datadog type definitions
│   │   └── vite-env.d.ts          # Vite environment types
│   ├── App.tsx                    # Main application component
│   ├── main.tsx                   # Entry point with Datadog init
│   ├── index.css                  # Global styles & Tailwind
│   └── vite-env.d.ts             # Vite type definitions
├── .env.example                   # Environment variables template
├── tailwind.config.js            # TailwindCSS configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.ts                # Vite build configuration
└── package.json                  # Dependencies and scripts
```
## ⚙️ Configuration

### TailwindCSS Setup
The project uses TailwindCSS v4 with a custom configuration:

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#BC8DA0',
        secondary: '#A04668', 
        accent: '#AB4967',
        neutral: '#D9D0DE',
        background: '#ADC698'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  }
}
```

### Datadog RUM Integration
Real User Monitoring is configured to track:
- **User Sessions** with session replay
- **Performance Metrics** (page load times, resource loading)
- **User Interactions** (clicks, form submissions)
- **JavaScript Errors** and console logs

Environment variables needed:
```bash
VITE_DATADOG_APPLICATION_ID=your_app_id
VITE_DATADOG_CLIENT_TOKEN=your_client_token
VITE_DATADOG_SITE=datadoghq.com
```

## 🎯 Implementation Status

### Completed (DD-5: Base Structure)
- ✅ React with TypeScript setup
- ✅ Five semantic sections (Hero, About, Skills, Projects, Contact)
- ✅ Modular component architecture
- ✅ Mobile-responsive design foundation
- ✅ Clean code structure

### Ready for Implementation (DD-6: Styling & Monitoring)
- 🔄 TailwindCSS integration (dependencies installed)
- 🔄 Custom color palette implementation
- 🔄 Datadog RUM monitoring setup
- 🔄 Professional content integration
- 🔄 Enhanced UI/UX with animations
- 🔄 Resume and headshot integration

## 🚀 Deployment

### Building for Production
```bash
# Build optimized production bundle
npm run build

# Preview the build locally
npm run preview
```

### Deployment Options
- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop `dist/` folder or connect Git
- **GitHub Pages**: Use GitHub Actions workflow
- **AWS S3**: Upload build files to S3 bucket with CloudFront

### Environment Variables for Production
Ensure these are set in your deployment platform:
```bash
VITE_DATADOG_APPLICATION_ID=production_app_id
VITE_DATADOG_CLIENT_TOKEN=production_token
VITE_DATADOG_ENV=production
```

## 📱 Responsive Design

The application is built mobile-first with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

### Key Responsive Features
- Flexible grid layouts that adapt to screen size
- Scalable typography with `clamp()` functions
- Touch-friendly interactive elements (44px minimum)
- Optimized images and loading states
- Accessible navigation patterns

## 🔧 Development Guidelines

### Code Style
- Use TypeScript strict mode
- Follow React functional components pattern
- Implement proper prop typing with interfaces
- Use semantic HTML elements
- Follow TailwindCSS utility-first approach

### Component Structure
```typescript
// Example component pattern
interface ComponentProps {
  title: string;
  description?: string;
}

const Component: React.FC<ComponentProps> = ({ title, description }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-heading">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </section>
  );
};
```

## 🔍 Monitoring & Analytics

### Datadog RUM Features
- **Real User Monitoring**: Track actual user experiences
- **Session Replay**: Visual recordings of user sessions
- **Performance Tracking**: Core Web Vitals and custom metrics
- **Error Tracking**: JavaScript errors and stack traces
- **User Journey Analysis**: Conversion funnels and user flows

### Custom Events
The application tracks custom events for:
- Resume downloads
- Contact form submissions
- Project link clicks
- Social media interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow
1. Run `npm run lint` before committing
2. Ensure TypeScript compilation passes
3. Test responsive design on multiple devices
4. Verify accessibility with screen readers
5. Check performance with Lighthouse

## 📞 Support & Contact

For questions about this project or collaboration opportunities:

- **Email**: yumi@example.com
- **LinkedIn**: [linkedin.com/in/yumikim](https://linkedin.com/in/yumikim)
- **GitHub**: [github.com/yumikim](https://github.com/yumikim)

---

## 📋 Project Tickets

This project fulfills the following development tickets:

### DD-5: Build base structure of personal homepage ✅
- React/TypeScript foundation
- Component architecture
- Basic responsive design
- Semantic HTML structure

### DD-6: Apply styling, branding, and monitoring 🔄
- TailwindCSS integration
- Custom color palette
- Datadog RUM monitoring
- Professional content
- Enhanced UI/UX

---

*Built with ❤️ by Yumi Kim | © 2024*
