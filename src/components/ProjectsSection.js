import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with React and Node.js, featuring user authentication, shopping cart, and payment integration.',
      tech: 'React, Node.js, MongoDB'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: 'React, Firebase, Material-UI'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current weather conditions, forecasts, and historical data with beautiful visualizations.',
      tech: 'React, D3.js, Weather API'
    }
  ];

  return (
    <section className="projects-section" style={{ padding: '80px 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Featured Projects</h2>
        <div className="projects-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
            <article key={index} className="project-card" style={{ 
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'white'
            }}>
              <div className="project-image" style={{ 
                height: '200px', 
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '1rem'
              }}>
                Project Screenshot
              </div>
              <div className="project-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>{project.description}</p>
                <div className="project-tech" style={{ 
                  fontSize: '0.9rem', 
                  color: '#888',
                  fontWeight: '500'
                }}>
                  Technologies: {project.tech}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
