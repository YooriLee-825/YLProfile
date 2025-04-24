'use client';
import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../data/projects';

const ProjectList = () => {
  return (
    <div className="flex flex-col gap-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      {projects.map((project, index) => (
        <ProjectItem key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectList;
