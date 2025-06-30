import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets with custom charts, filters, and export capabilities for business analytics.',
      technologies: ['React', 'D3.js', 'Python', 'Flask'],
      status: 'Planning'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-status">{project.status}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                <h4>Technologies:</h4>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
