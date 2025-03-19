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
      className="block bg-gray-100 p-6 rounded-lg shadow-md flex gap-4 items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-200 cursor-pointer"
    >
      {/* 프로젝트 썸네일 */}
      <div className="w-28 h-16 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={112}
          height={64}
          className="rounded-md object-cover"
        />
      </div>

      {/* 프로젝트 정보 */}
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-900">{title} ↗</h3>
        <p className="text-gray-700 text-sm mt-1">{description}</p>

        {/* 기술 태그 */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
