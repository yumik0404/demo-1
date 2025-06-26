import React from 'react';

const skills = [
  { name: 'React', icon: '/assets/react.svg' },
  { name: 'Python', icon: '/assets/python.svg' },
  { name: 'AWS', icon: '/assets/aws.svg' },
];

const SkillsSection = () => (
  <section className="py-16 bg-[#D9D0DE] flex flex-col items-center">
    <h2 className="text-3xl font-semibold text-[#A04668] mb-8">Skills</h2>
    <div className="flex space-x-8">
      {skills.map(skill => (
        <div key={skill.name} className="flex flex-col items-center">
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
          <span className="text-[#AB4967]">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
