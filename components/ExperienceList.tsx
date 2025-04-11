import React from 'react';
import ExperienceItem from './ExperienceItem';
import { experiences } from '../data/experiences';

const ExperienceList: React.FC = () => {
  return (
    <section id="experience" className="mt-12 max-w-3xl">
      {/* 경험 목록 */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
