import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with modern technologies. Features user authentication, real-time updates, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Project Two',
      description: 'An interactive data visualization dashboard that helps users understand complex datasets through intuitive charts and graphs.',
      technologies: ['TypeScript', 'D3.js', 'Express']
    },
    {
      title: 'Project Three',
      description: 'A mobile-first e-commerce platform with advanced search capabilities, payment integration, and inventory management.',
      technologies: ['React Native', 'Python', 'PostgreSQL']
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
