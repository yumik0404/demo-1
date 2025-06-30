import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-profile">
          <div className="profile-image">
            <img 
              src="/api/placeholder/150/150" 
              alt="Yumi Kim profile" 
              className="avatar"
            />
          </div>
          <div className="profile-text">
            <p>
              I'm a passionate full-stack developer with a love for creating 
              innovative solutions that bridge the gap between technology and 
              user experience. With expertise in modern web technologies, I 
              enjoy tackling complex problems and turning ideas into reality 
              through clean, efficient code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
