import React from 'react';
import Image from 'next/image';

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  image,
  link,
  tags,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 transition-colors duration-300 hover:bg-gray-50 cursor-pointer"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="flex items-center gap-4">
        {/* 프로젝트 썸네일 */}
        <div className="w-20 h-12 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={80}
            height={48}
            className="rounded-md object-cover"
          />
        </div>

        {/* 프로젝트 정보 */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-900">{title} ↗</h3>
          <p className="text-gray-700 text-xs mt-1">{description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="
                  inline-flex items-center
                  px-3 py-1
                  text-xs
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-500
                  rounded-full
                  shadow-sm
                  hover:scale-105
                  transition-transform
                  cursor-pointer
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
