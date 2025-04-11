'use client';
import React from 'react';

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full md:w-[48%] bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default ProjectItem;
