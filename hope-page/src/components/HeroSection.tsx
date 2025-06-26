import React from 'react';
import resumePdf from '../assets/Kim, Tressa Resume 2025.docx.pdf';

const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-[#D9D0DE]">
    <h1 className="text-5xl font-bold text-[#A04668]">Yumi Kim</h1>
    <p className="mt-4 text-xl text-[#AB4967]">Creative Developer & Problem Solver</p>
    <a
      href={resumePdf}
      className="mt-6 px-6 py-3 bg-[#ADC698] text-white rounded shadow hover:bg-[#BC8DA0] transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Resume
    </a>
  </section>
);

export default HeroSection;
