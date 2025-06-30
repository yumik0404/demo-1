import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['TypeScript', 'React', 'Socket.io', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for data visualization and analytics, with customizable charts and real-time data processing.',
      technologies: ['Python', 'React', 'D3.js', 'FastAPI'],
      link: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={`/api/placeholder/300/200`} 
                  alt={project.title}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
