import React from 'react';

const SkillsSection = () => {
  const skills = [
    {
      name: 'React',
      description: 'Modern frontend development with React and ecosystem'
    },
    {
      name: 'Node.js',
      description: 'Backend development and API creation'
    },
    {
      name: 'JavaScript',
      description: 'ES6+ and modern JavaScript development'
    },
    {
      name: 'Python',
      description: 'Data analysis, automation, and backend development'
    },
    {
      name: 'Git',
      description: 'Version control and collaborative development'
    }
  ];

  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
