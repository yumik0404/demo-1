import React from 'react';

const ContactSection = () => {
  return (
    <section className="section contact-section">
      <h2>Get In Touch</h2>
      <p>
        I'm always interested in new opportunities and collaborations. 
        Feel free to reach out if you'd like to work together!
      </p>
      <a 
        href="mailto:yumi.kim@example.com" 
        className="contact-link"
        aria-label="Send email to Yumi Kim"
      >
        Contact Me
      </a>
    </section>
  );
};

export default ContactSection;
