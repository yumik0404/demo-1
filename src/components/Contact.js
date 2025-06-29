import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together or just say hello!
          </p>
          <a 
            href="mailto:yumi.kim@example.com" 
            className="contact-email"
            aria-label="Send email to Yumi Kim"
          >
            yumi.kim@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
