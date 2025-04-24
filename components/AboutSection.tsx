'use client';
import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="mt-[77vh] flex flex-col md:flex-row justify-between items-start w-full pt-18 px-6 md:px-12 z-10"
    >
      {/* Left column: About text */}
      <div className="w-full md:w-1/2">
        <p className="uppercase text-sm text-gray-500 mb-2">About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Full-stack developer based in Toronto, creating clean, thoughtful web
          experiences with a focus on usability and real-world impact.
        </h2>
        <p className="text-[16px] leading-relaxed">
          With a background in software development across Korea’s hospitals,
          research centers, and public institutions, I’ve built adaptable
          solutions in complex environments. Now tutoring students in Canada, I
          share what I’ve learned while constantly sharpening my own skills. My
          approach blends clean code, user-first thinking, and clear design —
          always aiming to make tech feel a little more human.
        </p>
      </div>

      {/* Right column: Empty spacer for layout balance (only shown on desktop) */}
      <div className="hidden md:block w-full md:w-1/2" />
    </section>
  );
};

export default AboutSection;
