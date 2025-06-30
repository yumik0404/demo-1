import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'React',
      description: 'Modern frontend development with React and React ecosystem'
    },
    {
      name: 'JavaScript/TypeScript',
      description: 'Full-stack development with modern JavaScript and TypeScript'
    },
    {
      name: 'Node.js',
      description: 'Backend development with Node.js and Express'
    },
    {
      name: 'Python',
      description: 'Backend development, data analysis, and automation'
    },
    {
      name: 'Database Technologies',
      description: 'SQL and NoSQL databases including PostgreSQL and MongoDB'
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>Skills & Technologies</h2>
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
