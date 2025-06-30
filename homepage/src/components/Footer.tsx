import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Yumi Kim. All rights reserved.</p>
          <p>Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
