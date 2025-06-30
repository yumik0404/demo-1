import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="hero-content" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Yumi Kim</h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>Frontend Developer & UI/UX Enthusiast</p>
      </div>
    </section>
  );
};

export default HeroSection;
