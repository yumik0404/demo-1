# Yumi Kim - Personal Homepage

A personal homepage built with React, showcasing Yumi Kim's professional profile, skills, and projects.

## Project Structure

This project implements the requirements from ticket DD-5, featuring:

- **Full-screen Hero Section**: Landing section with name and tagline
- **About Me Section**: Personal introduction with profile image placeholder
- **Skills Section**: Display of 5 key technologies with descriptions
- **Projects Section**: 3 featured project showcases with descriptions and tech stacks
- **Contact Section**: Contact information with mailto link

## Features

- ✅ React functional components
- ✅ Modular component structure
- ✅ Semantic HTML elements
- ✅ Mobile-friendly responsive design
- ✅ Clean, accessible markup
- ✅ Placeholder content and images ready for customization

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Component Structure

```
src/
├── components/
│   ├── Hero.js & Hero.css          # Full-screen hero section
│   ├── About.js & About.css        # About me with profile image
│   ├── Skills.js & Skills.css      # Skills showcase
│   ├── Projects.js & Projects.css  # Featured projects
│   └── Contact.js & Contact.css    # Contact information
├── App.js                          # Main app component
├── App.css                         # Global styles
└── index.js                        # React app entry point
```

## Customization

### Profile Information
- Update the hero tagline in `src/components/Hero.js`
- Modify the about me text in `src/components/About.js`
- Replace placeholder email in `src/components/Contact.js`

### Skills and Projects
- Edit skills list in `src/components/Skills.js`
- Update project information in `src/components/Projects.js`

### Images
- Replace placeholder avatar: `/public/placeholder-avatar.jpg`
- Add project images: `/public/placeholder-project-[1-3].jpg`

## Next Steps

This implementation focuses on structure and basic responsive layout. Future enhancements may include:

- Visual design and styling improvements
- CSS frameworks integration
- Animation and interactive elements
- Content management system integration

## Technology Stack

- **React** - Frontend library
- **CSS3** - Styling and responsive design
- **Create React App** - Development environment

---

**Note**: This project was built to fulfill the requirements of ticket DD-5, focusing on structure and semantic organization rather than visual design.
