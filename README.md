# Yumi Kim's Personal Homepage

A modern, responsive personal website built with React and TypeScript, showcasing Yumi Kim's skills, projects, and professional background.

## Project Overview

This is the foundational structure for Yumi Kim's personal homepage, implementing the requirements from ticket DD-5. The site features a clean, semantic HTML structure with modular React components and basic mobile responsiveness.

## Features

- **Full-screen Hero Section**: Eye-catching landing area with name and tagline
- **About Me Section**: Personal introduction with profile image placeholder
- **Skills Section**: Display of key technologies and competencies
- **Projects Section**: Showcase of featured projects with descriptions
- **Contact Section**: Multiple ways to get in touch
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Semantic HTML**: Clean, accessible markup structure

## Tech Stack

- **React** 18.x with functional components
- **TypeScript** for type safety
- **CSS3** with CSS Grid and Flexbox for layout
- **Create React App** for project scaffolding

## Project Structure

```
demo-1/
├── docs/                 # Project documentation and tickets
│   └── tickets/
│       ├── DD-1/
│       ├── DD-2/
│       ├── DD-5/        # Current ticket implementation
│       └── DD-6/
└── homepage/            # React application
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── About.tsx         # About me section
    │   │   ├── Contact.tsx       # Contact information and links
    │   │   ├── Footer.tsx        # Site footer
    │   │   ├── Hero.tsx          # Full-screen hero section
    │   │   ├── Navigation.tsx    # Site navigation with mobile menu
    │   │   ├── Projects.tsx      # Featured projects showcase
    │   │   └── Skills.tsx        # Skills and technologies
    │   ├── assets/               # Images and static assets
    │   ├── App.tsx              # Main application component
    │   ├── App.css              # Main stylesheet
    │   └── index.tsx            # Application entry point
    ├── package.json
    └── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yumik0404/demo-1.git
   cd demo-1
   ```

2. Navigate to the homepage directory:
   ```bash
   cd homepage
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser

### Available Scripts

From the `homepage` directory:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Removes Create React App abstraction (irreversible)

## Component Details

### Hero Component
- Full viewport height section (100vh)
- Displays "Yumi Kim" prominently
- Includes professional tagline
- Centered content layout

### About Component
- Two-column layout (text and image)
- Professional introduction paragraph
- Profile image placeholder
- Responsive grid layout that stacks on mobile

### Skills Component
- Grid layout for skill items
- Icon and text representation
- Covers key technologies: React, TypeScript, Node.js, Python, Git
- Auto-fitting grid that adapts to screen size

### Projects Component
- Card-based layout for project showcases
- Three featured project placeholders with realistic content
- Technology tags for each project
- Hover effects and placeholder links
- Responsive grid layout

### Contact Component
- Multiple contact methods (email, LinkedIn, GitHub)
- Email mailto link implementation
- Social media placeholder links
- Centered layout design

### Navigation Component
- Fixed position header
- Mobile hamburger menu
- Smooth scroll navigation links
- Responsive behavior with collapsible menu

### Footer Component
- Copyright information
- Technology attribution
- Simple, clean design

## Mobile Responsiveness

The site includes comprehensive mobile optimizations:
- Responsive navigation with hamburger menu
- Flexible grid layouts that adapt to screen size
- Optimized typography scaling (3rem to 2rem on mobile)
- Touch-friendly interface elements
- Improved spacing for mobile devices
- Single-column layouts on small screens

## Styling Approach

Current styling focuses on:
- Semantic HTML structure
- Basic layout and positioning using CSS Grid and Flexbox
- Mobile responsiveness with media queries
- Clean, readable typography
- Minimal visual design (as per DD-5 requirements)
- CSS custom properties for consistent spacing
- Box-shadow effects for depth

**Note**: Detailed visual design, colors, fonts, and CSS frameworks will be implemented in a future ticket as specified in DD-5 scope.

## Accessibility Features

- Semantic HTML elements (`<section>`, `<article>`, `<nav>`, `<main>`, `<footer>`)
- Proper heading hierarchy (h1, h2, h3)
- Alt attributes for images
- ARIA labels for interactive elements
- Focus management for keyboard navigation
- Color contrast considerations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Workflow

This project follows a ticket-based development approach:
- Each feature is tracked via numbered tickets (DD-1, DD-2, etc.)
- Documentation is maintained in the `docs/tickets/` directory
- Implementation follows the specifications outlined in each ticket

## Current Implementation Status

✅ **DD-5 Complete**: Base structure of personal homepage
- Full-screen hero section with name and tagline
- About Me section with paragraph and image placeholder
- Skills section with 5 key technologies
- Projects section with 3 featured project placeholders
- Contact section with mailto link and social links
- Modular React components with TypeScript
- Mobile-friendly responsive design
- Semantic HTML structure
- Basic CSS styling for layout
- Comprehensive README documentation

## Future Enhancements

Based on project roadmap:
- Enhanced visual design and styling (colors, fonts, shadows)
- CSS frameworks integration
- Custom animations and transitions
- Content management integration
- SEO optimization
- Performance improvements
- Accessibility enhancements
- Image optimization and real content
- Contact form functionality

## Contributing

This project follows the development workflow outlined in the project documentation. Please refer to the ticket system in `docs/tickets/` for feature requests and bug reports.

## License

This project is for personal/portfolio use.

---

## Quick Start Commands

```bash
# Clone and setup
git clone https://github.com/yumik0404/demo-1.git
cd demo-1/homepage
npm install
npm start

# Build for production
npm run build

# Run tests
npm test
```

The application will be available at [http://localhost:3000](http://localhost:3000).
