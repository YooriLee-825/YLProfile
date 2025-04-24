'use client';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItemProps {
  index: number;
  date: string;
  title: string;
  company: string;
  project?: string;
  option?: string;
  link?: string;
  description: string;
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  index,
  date,
  title,
  company,
  project,
  option,
  link,
  description,
  skills,
}) => {
  const isLeft = index % 2 === 0;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.3,
        ease: 'easeOut',
      }}
      className="relative flex justify-center w-full"
    >
      {/* Date + icon (center aligned) */}
      <div className="absolute top-[4.3rem] w-full flex justify-center z-10">
        <div className="relative flex items-center gap-2">
          {!isLeft && (
            <span className="pr-40 text-sm text-gray-500 font-medium text-right min-w-[120px]">
              {date}
            </span>
          )}
          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="bg-white p-1 rounded-full border border-gray-300 shadow text-[20px]">
              📅
            </span>
          </div>
          {isLeft && (
            <span className="pl-32 text-sm text-gray-500 font-medium text-left min-w-[120px] ml-[60px]">
              {date}
            </span>
          )}
        </div>
      </div>

      {/* Card container */}
      <div className="relative w-[1400px] flex justify-between pt-12 pb-16">
        {isLeft && (
          <Card
            position="left"
            {...{ title, company, link, project, option, description, skills }}
          />
        )}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 z-0" />
        {!isLeft && (
          <Card
            position="right"
            {...{ title, company, link, project, option, description, skills }}
          />
        )}
      </div>
    </motion.div>
  );
};

const Card = ({
  position,
  title,
  company,
  link,
  project,
  option,
  description,
  skills,
}: {
  position: 'left' | 'right';
} & Omit<ExperienceItemProps, 'index' | 'date'>) => (
  <div
    className={`w-[620px] relative ${position === 'right' ? 'self-end ml-auto' : ''}`}
  >
    <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 relative z-10">
      <div
        className={`absolute top-6 w-4 h-4 bg-white rotate-45 border-gray-200 z-[-1] ${
          position === 'left'
            ? '-right-2 border-t border-r'
            : '-left-2 border-b border-l'
        }`}
      />
      <CardContent
        {...{ title, company, link, project, option, description, skills }}
      />
    </div>
  </div>
);

const CardContent = ({
  title,
  company,
  link,
  project,
  option,
  description,
  skills,
}: Omit<ExperienceItemProps, 'index' | 'date'>) => (
  <>
    <div className="mb-1 flex items-center justify-between">
      <h3 className="text-xl font-bold text-gray-800">
        {title} @ {company}
      </h3>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FiExternalLink className="text-gray-400 hover:text-blue-500 transition" />
        </a>
      )}
    </div>
    {project && <p className="text-sm text-gray-600 mb-1">{project}</p>}
    {option && <p className="text-sm text-gray-400 mb-2 italic">{option}</p>}
    <p className="text-[15px] text-gray-700 mb-3">{description}</p>
    <ul className="flex flex-wrap gap-2 text-sm text-gray-500">
      {skills.map((skill, i) => (
        <li key={i} className="bg-gray-100 rounded-full px-3 py-1 font-medium">
          {skill}
        </li>
      ))}
    </ul>
  </>
);

export default ExperienceItem;
