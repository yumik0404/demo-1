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
src/
├── components/
│   ├── About.tsx         # About me section
│   ├── Contact.tsx       # Contact information and links
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Full-screen hero section
│   ├── Navigation.tsx    # Site navigation with mobile menu
│   ├── Projects.tsx      # Featured projects showcase
│   └── Skills.tsx        # Skills and technologies
├── assets/               # Images and static assets
├── App.tsx              # Main application component
├── App.css              # Main stylesheet
└── index.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
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

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Removes Create React App abstraction (irreversible)

## Component Details

### Hero Component
- Full viewport height section
- Displays name prominently
- Includes professional tagline
- Centered content layout

### About Component
- Two-column layout (text and image)
- Professional introduction
- Profile image placeholder
- Responsive grid layout

### Skills Component
- Grid layout for skill items
- Icon and text representation
- Covers key technologies: React, TypeScript, Node.js, Python, Git

### Projects Component
- Card-based layout for project showcases
- Three featured project placeholders
- Technology tags for each project
- Hover effects and links

### Contact Component
- Multiple contact methods
- Email mailto link
- Social media placeholders
- Centered layout design

### Navigation Component
- Fixed position header
- Mobile hamburger menu
- Smooth scroll navigation links
- Responsive behavior

## Mobile Responsiveness

The site includes comprehensive mobile optimizations:
- Responsive navigation with hamburger menu
- Flexible grid layouts that adapt to screen size
- Optimized typography scaling
- Touch-friendly interface elements
- Improved spacing for mobile devices

## Styling Approach

Current styling focuses on:
- Semantic HTML structure
- Basic layout and positioning
- Mobile responsiveness
- Clean, readable typography
- Minimal visual design (as per ticket requirements)

**Note**: Detailed visual design, colors, fonts, and CSS frameworks will be implemented in a future ticket as specified in DD-5 scope.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Enhanced visual design and styling
- Custom CSS animations
- Content management integration
- SEO optimization
- Performance improvements
- Accessibility enhancements

## Contributing

This project follows the development workflow outlined in the project documentation. Please refer to the ticket system for feature requests and bug reports.

## License

This project is for personal/portfolio use.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
