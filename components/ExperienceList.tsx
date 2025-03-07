import React from 'react';
import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    date: '2022 — PRESENT',
    title: 'Program Tutor',
    company: 'Self Employed',
    project: '',
    option: '',
    link: 'https://github.com/YooriLee-825/DevLee',
    description:
      'Designed and led a 12-week algorithm tutoring program, tackling sorting, dynamic programming, DFS/BFS, and greedy strategies. Separately, trained students in C, C++, and Java, breaking down OOP concepts like encapsulation, inheritance, and polymorphism. Helped them master design patterns, debugging, and code optimization—sharpening their skills for real-world development!',
    skills: ['Python', 'C++', 'Java', 'JavaScript'],
  },
  {
    date: '2020 — 2021',
    title: 'Junior Full Stack Web Developer',
    company: 'IIT',
    project: 'ERP modernization project for a government agency',
    option: 'MSSQL Store Procedure enhancement',
    link: 'http://www.iitech.co.kr/',
    description:
      'Redesigned database architecture, optimizing MSSQL queries to improve efficiency and scalability. Applied TDD and A/B testing to accelerate deployment and ensure stability. Worked closely with clients to enhance business logic, UI/UX, and overall system performance through iterative improvements.',
    skills: ['.Net', 'C#', 'MSSQL', 'MSSQL Procedure'],
  },
  {
    date: '2019 — 2020',
    title: 'Junior Web Developer',
    company: 'IIT',
    project: 'Research Project Management System - Inha University Hospital',
    option: 'Web application',
    link: 'https://rms.inha.com/websquare/websquare.html?w2xPath=/wqui/irb/imp/mp/IRB_IMPMP_0010.xml',
    description:
      'Developed a web-based research project management platform using Java, Oracle, and JavaScript, streamlining operations and reducing software costs. Designed system architecture, managed data migration, and optimized database performance for scalability. Implemented a secure payment gateway to enhance security and cost efficiency. Focused on user-friendly development to improve customer satisfaction.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  },
];

const ExperienceList: React.FC = () => {
  return (
    <section id="experience" className="mt-12 max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>

      {/* 경험 목록 */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
