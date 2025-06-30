import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Get In Touch</h2>
        <div className="contact-content" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8', color: '#666' }}>
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to say hello, feel free to reach out!
          </p>
          <a 
            href="mailto:yumi.kim@example.com" 
            style={{ 
              display: 'inline-block',
              padding: '12px 30px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem',
              fontWeight: '500',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
