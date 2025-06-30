import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <p>
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, 
            feel free to reach out!
          </p>
          <div className="contact-methods">
            <a 
              href="mailto:yumi.kim@example.com" 
              className="contact-link"
              aria-label="Send email to Yumi Kim"
            >
              📧 yumi.kim@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
