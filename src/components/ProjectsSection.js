import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and inventory management.',
      technologies: 'React, Node.js, MongoDB, Stripe'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      technologies: 'React, Express, Socket.io, PostgreSQL'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides detailed forecasts, interactive maps, and personalized weather alerts for multiple locations.',
      technologies: 'JavaScript, API Integration, Chart.js'
    }
  ];

  return (
    <section className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
