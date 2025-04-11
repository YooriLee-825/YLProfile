import React from 'react';
import ExperienceList from './ExperienceList';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience">
      <div className="relative mb-16">
        <h3 className="relative text-3xl md:text-4xl font-bold mb-10 z-10">
          Experience
        </h3>
      </div>

      <ExperienceList />
    </section>
  );
};

export default ExperienceSection;
