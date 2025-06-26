import React from 'react';

const ContactSection = () => (
  <section className="py-16 bg-[#D9D0DE] flex flex-col items-center">
    <h2 className="text-3xl font-semibold text-[#A04668] mb-4">Contact</h2>
    <a
      href="mailto:yumi.kim@email.com"
      className="text-lg text-[#AB4967] hover:text-[#A04668] underline"
    >
      yumi.kim@email.com
    </a>
  </section>
);

export default ContactSection;
