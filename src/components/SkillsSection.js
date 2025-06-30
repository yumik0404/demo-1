import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'React', description: 'Modern frontend framework' },
    { name: 'JavaScript', description: 'Core programming language' },
    { name: 'CSS/Sass', description: 'Styling and responsive design' },
    { name: 'Node.js', description: 'Backend development' },
    { name: 'Git', description: 'Version control system' }
  ];

  return (
    <section className="skills-section" style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Skills</h2>
        <div className="skills-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item" style={{ 
              textAlign: 'center', 
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div className="skill-icon" style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#e0e0e0',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Icon
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
