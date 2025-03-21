import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from '../data/projects';

const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="mt-12 max-w-3xl">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 shadow-modern">
        Projects
      </h2>

      {/* 프로젝트 목록 */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
