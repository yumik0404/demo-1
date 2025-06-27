import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about">
          <div className="about-text">
            <p>
              Hello! I'm Yumi, a passionate software developer with a love for creating 
              meaningful digital experiences. I enjoy working with modern technologies 
              and solving complex problems through clean, efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or learning about the latest 
              trends in web development.
            </p>
          </div>
          <div className="about-image">
            <div className="avatar">
              Profile Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
