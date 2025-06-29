import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', description: 'Frontend library for building user interfaces' },
    { name: 'Node.js', description: 'Backend JavaScript runtime environment' },
    { name: 'Python', description: 'Versatile programming language for web and data' },
    { name: 'PostgreSQL', description: 'Relational database management system' },
    { name: 'Git', description: 'Version control and collaboration tool' }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
