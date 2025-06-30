import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to say hello, feel free to reach out!
          </p>
          <div className="contact-methods">
            <a 
              href="mailto:yumi.kim@example.com" 
              className="contact-link"
              aria-label="Send email to Yumi Kim"
            >
              📧 yumi.kim@example.com
            </a>
            <a 
              href="https://linkedin.com/in/yumikim" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yumi Kim's LinkedIn profile"
            >
              💼 LinkedIn
            </a>
            <a 
              href="https://github.com/yumikim" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yumi Kim's GitHub profile"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
