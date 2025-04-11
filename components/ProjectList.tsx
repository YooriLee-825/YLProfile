import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../data/projects';

const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#f7f5f0]">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-center">
        Projects
      </h2>

      <div className="flex flex-wrap gap-6 justify-center md:justify-between">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
