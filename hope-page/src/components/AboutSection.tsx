import React from 'react';

const AboutSection = () => (
  <section className="py-16 bg-white flex flex-col items-center">
    <img
      src="/assets/headshot-demo.JPG"
      alt="Yumi Kim"
      className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover"
      onError={(e) => {
        console.log('Image failed to load:', e);
        // Hide image if it fails to load
        e.currentTarget.style.display = 'none';
      }}
    />
    <p className="max-w-xl text-center text-[#A04668]">
      Hi! I'm Yumi Kim, a passionate developer who loves building beautiful, functional web experiences. I enjoy working with modern technologies and am always eager to learn and grow.
    </p>
  </section>
);

export default AboutSection;
