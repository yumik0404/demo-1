import React from 'react';

const AboutSection = () => {
  return (
    <section className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src="https://via.placeholder.com/200x200?text=Yumi+Kim" 
          alt="Yumi Kim profile" 
          className="profile-image"
        />
        <div className="about-text">
          <p>
            Hi, I'm Yumi Kim, a passionate full-stack developer with a love for creating 
            innovative digital solutions. I enjoy working with modern technologies and 
            building applications that make a positive impact. When I'm not coding, 
            you can find me exploring new technologies, contributing to open source 
            projects, or enjoying time outdoors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
