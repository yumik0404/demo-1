import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/placeholder-avatar.jpg" 
              alt="Yumi Kim profile" 
              className="profile-image"
            />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm Yumi Kim, a passionate full-stack developer with a love for creating 
              innovative web applications and solving complex problems. I enjoy working with 
              modern technologies and am always eager to learn new skills and take on 
              challenging projects that make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
