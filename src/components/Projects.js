import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js, featuring user authentication, product catalog, and payment integration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB']
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets with charts, graphs, and filtering capabilities for business intelligence.',
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL']
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={`/placeholder-project-${index + 1}.jpg`} 
                  alt={`${project.title} preview`}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
