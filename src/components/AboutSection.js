import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section" style={{ padding: '80px 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>About Me</h2>
        <div className="about-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div className="avatar-placeholder" style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%', 
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            color: '#666'
          }}>
            Profile Image
          </div>
          <div className="about-text" style={{ maxWidth: '600px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              I'm a passionate frontend developer with a keen eye for user experience design. 
              I love creating beautiful, functional, and accessible web applications that make 
              a difference in people's lives. When I'm not coding, you can find me exploring 
              new design trends and experimenting with creative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
