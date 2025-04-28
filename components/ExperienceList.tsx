'use client';

import React from 'react';
import { experiences } from '../data/experiences';
import ExperienceItem from './ExperienceItem';
import ExperienceItemMobile from './ExperienceItemMobile';
import useMediaQuery from './hooks/useMediaQuery';

const ExperienceList = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="relative flex flex-col gap-12">
      {/* Center vertical line only for desktop */}
      {!isMobile && (
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gray-300 z-0 transform -translate-x-1/2" />
      )}

      {/* Experience cards */}
      {experiences.map((exp, i) =>
        isMobile ? (
          <ExperienceItemMobile key={i} {...exp} />
        ) : (
          <ExperienceItem key={i} index={i} {...exp} />
        )
      )}
    </div>
  );
};

export default ExperienceList;
