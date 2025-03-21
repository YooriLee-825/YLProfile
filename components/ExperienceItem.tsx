import React from 'react';

interface ExperienceItemProps {
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
  date,
  title,
  company,
  project,
  option,
  link,
  description,
  skills,
}) => {
  return (
    <a
      href={link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 transition-colors duration-300 hover:bg-gray-50 cursor-pointer"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="md:flex">
        {/* 날짜 부분 */}
        <div className="md:w-1/4 text-gray-600 font-medium text-xs mb-2 md:mb-0">
          {date}
        </div>

        {/* 내용 부분 */}
        <div className="md:w-3/4">
          <h3 className="text-sm font-bold text-gray-900">
            {title}, {company}
          </h3>

          {project && (
            <p className="text-xs font-semibold text-gray-600 mt-1">
              {project}
            </p>
          )}
          {option && (
            <p className="text-xs font-semibold text-gray-600 mt-1">{option}</p>
          )}

          <p className="text-gray-700 mt-2 text-xs">{description}</p>

          {/* 스킬 태그 영역 */}
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
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
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ExperienceItem;
