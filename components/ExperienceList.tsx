'use client';
import React from 'react';
import { experiences } from '../data/experiences';
import ExperienceItem from './ExperienceItem';

const ExperienceList = () => {
  return (
    <div className="relative flex flex-col gap-20">
      {/* Vertical timeline line in the center */}
      <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gray-300 z-0 transform -translate-x-1/2" />

      {/* Experience cards */}
      {experiences.map((exp, i) => (
        <ExperienceItem key={i} index={i} {...exp} />
      ))}
    </div>
  );
};

export default ExperienceList;
