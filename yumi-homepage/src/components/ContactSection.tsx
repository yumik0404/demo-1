import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together!
        </p>
        <a 
          href="mailto:yumi@example.com" 
          className="contact-link"
          aria-label="Send email to Yumi"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
