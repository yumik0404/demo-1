import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript/TypeScript', icon: 'JS' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Git/GitHub', icon: '📦' }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
