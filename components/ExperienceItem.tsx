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
      className="block bg-gray-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row transition-all duration-300 hover:shadow-lg hover:bg-gray-200 cursor-pointer"
    >
      {/* 왼쪽 - 날짜 */}
      <div className="md:w-1/4 text-gray-600 font-medium">
        <p>{date}</p>
      </div>

      {/* 오른쪽 - 직책 및 설명 */}
      <div className="md:w-3/4">
        <h3 className="text-xl font-bold text-gray-900">
          {title}, {company}
        </h3>

        {/* 프로젝트 & 옵션 - 스타일로 구분 */}
        {project && (
          <p className="text-base font-semibold text-gray-600 mt-3">
            {project}
          </p>
        )}
        {option && (
          <p className="text-base font-semibold text-gray-600 mt-1">{option}</p>
        )}

        {/* 설명 부분 */}
        <p className="text-gray-700 mt-4">{description}</p>

        {/* 기술 태그 */}
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ExperienceItem;
