'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectItemProps {
  project: {
    slug: string;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    content: string;
  };
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
        !isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="relative w-full md:w-[45%] aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-xl border border-gray-200 shadow"
        />
      </div>

      <div className="w-full md:w-[55%]">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          {project.title}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-gray-400 hover:text-blue-500 transition" />
          </a>
        </h3>
        <p className="text-[15px] text-gray-600 mb-3 whitespace-pre-line">
          {project.content}
        </p>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-500">
          {project.tags.map((tag, i) => (
            <li
              key={i}
              className="bg-gray-100 rounded-full px-3 py-1 font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
