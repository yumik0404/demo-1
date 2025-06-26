import React from 'react';

const projects = [
  { title: 'Project One', description: 'A cool project about X.', link: '#' },
  { title: 'Project Two', description: 'A fun project about Y.', link: '#' },
  { title: 'Project Three', description: 'An interesting project about Z.', link: '#' },
];

const ProjectsSection = () => (
  <section className="py-16 bg-white flex flex-col items-center">
    <h2 className="text-3xl font-semibold text-[#A04668] mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map(project => (
        <div key={project.title} className="bg-[#D9D0DE] p-6 rounded shadow">
          <h3 className="text-xl font-bold text-[#A04668]">{project.title}</h3>
          <p className="mt-2 text-[#AB4967]">{project.description}</p>
          <a href={project.link} className="mt-4 inline-block text-[#ADC698] hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
