# Yumi Kim Personal Website

A personal website built with React showcasing Yumi Kim's portfolio, skills, and contact information.

## Project Overview

This project implements the foundational structure for Yumi Kim's personal homepage as specified in ticket DD-5. The focus is on semantic organization, modular components, and mobile-friendly layout without visual styling (which will be handled in a follow-up ticket).

## Features

- **Full-screen Hero Section**: Introduction with name and tagline
- **About Me Section**: Personal description with profile image placeholder
- **Skills Section**: Key technologies and expertise areas
- **Projects Section**: Featured project showcases with descriptions
- **Contact Section**: Contact information with mailto link
- **Mobile Responsive**: Basic responsive layout for all screen sizes
- **Semantic HTML**: Clean, accessible markup structure
- **Modular Components**: Reusable React functional components

## Project Structure

```
src/
├── components/
│   ├── Hero.js          # Hero section component
│   ├── AboutMe.js       # About me section component
│   ├── Skills.js        # Skills showcase component
│   ├── Projects.js      # Projects portfolio component
│   └── Contact.js       # Contact information component
├── App.js               # Main application component
├── index.js             # Application entry point
└── index.css            # Basic structural styles
```

## Technologies Used

- **React 18**: Modern React with functional components
- **HTML5**: Semantic markup
- **CSS3**: Basic responsive layout
- **JavaScript ES6+**: Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Other Available Scripts

- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Component Details

### Hero Component
- Full-screen introductory section
- Displays name and professional tagline
- Centered layout with semantic markup

### AboutMe Component
- Personal introduction paragraph
- Profile image placeholder
- Responsive layout for mobile devices

### Skills Component
- Grid layout of technical skills
- Each skill includes name and description
- Auto-responsive grid that adapts to screen size

### Projects Component
- Showcase of featured projects
- Each project includes title, description, technologies, and status
- Card-based layout with responsive grid

### Contact Component
- Contact information section
- Mailto link for direct email contact
- Centered layout with call-to-action

## Development Notes

- All components use functional React components with hooks
- Semantic HTML elements are used throughout (section, article, main, etc.)
- Basic responsive design implemented with CSS Grid and Flexbox
- No external CSS frameworks used (as specified in requirements)
- Placeholder content and images used for development

## Next Steps

This implementation focuses on structure and functionality. Future enhancements will include:
- Visual design and styling (separate ticket)
- Animation and interactive elements
- Content management integration
- Performance optimizations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested on various screen sizes

## License

This project is for personal use by Yumi Kim.
