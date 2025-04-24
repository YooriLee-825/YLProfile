'use client';
import React from 'react';
import ExperienceList from './ExperienceList';

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-[#f7f5f0] py-24 px-6 md:px-12 flex justify-center"
    >
      <div className="max-w-[1400px] w-full relative">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-wide uppercase">
          Experience
        </h2>
        <ExperienceList />
      </div>
    </section>
  );
};

export default ExperienceSection;
