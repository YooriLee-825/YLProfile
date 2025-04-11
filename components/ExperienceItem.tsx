'use client';

import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  description: string;
  project?: string;
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  date,
  description,
  project,
  skills,
}) => {
  return (
    <div className="flex gap-6 relative pl-6">
      {/* Vertical line */}
      <div className="absolute left-1 top-0 bottom-0 w-px bg-gray-300" />

      {/* Date dot */}
      <div className="absolute -left-1 top-1 w-2 h-2 bg-blue-500 rounded-full" />

      {/* Content */}
      <div className="flex-1">
        <p className="text-sm text-gray-400 font-mono mb-1">{date}</p>
        <h3 className="text-lg font-bold text-gray-800">
          {title} <span className="text-gray-500 font-normal">@ {company}</span>
        </h3>
        {project && (
          <p className="text-sm text-gray-500 italic mt-1">
            Project: {project}
          </p>
        )}
        <p className="text-[15px] text-gray-700 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-gradient-to-br from-indigo-300 to-purple-200 text-gray-900 rounded-full font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
