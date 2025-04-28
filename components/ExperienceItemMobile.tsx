'use client';

import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItemMobileProps {
  date: string;
  title: string;
  company: string;
  project?: string;
  option?: string;
  link?: string;
  description: string;
  skills: string[];
}

const ExperienceItemMobile: React.FC<ExperienceItemMobileProps> = ({
  date,
  title,
  company,
  project,
  option,
  link,
  description,
  skills,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
      className="w-full bg-white shadow-md rounded-xl p-6 border border-gray-200 space-y-4"
    >
      {/* Title and link */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-gray-800">
            {title} @ {company}
          </h3>
          {project && <p className="text-sm text-gray-600">{project}</p>}
          {option && <p className="text-sm text-gray-400 italic">{option}</p>}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-gray-400 hover:text-blue-500 transition" />
          </a>
        )}
      </div>

      {/* Date */}
      <p className="text-sm text-gray-500">{date}</p>

      {/* Description */}
      <p className="text-gray-700 text-[15px] leading-relaxed">{description}</p>

      {/* Skills */}
      <ul className="flex flex-wrap gap-2 text-sm text-gray-500">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="bg-gray-100 rounded-full px-3 py-1 font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceItemMobile;
