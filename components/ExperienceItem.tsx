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
      style={{ backgroundColor: 'transparent' }} // 카드 배경 투명
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

          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full"
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
