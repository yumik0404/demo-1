import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating innovative solutions 
              and beautiful user experiences. With expertise in modern web technologies, I enjoy 
              tackling complex problems and bringing ideas to life through code.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="/api/placeholder/200/200" 
              alt="Yumi Kim profile" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
