// data/projects.ts
export const projects = [
  {
    title: 'Reddit Clone - Full-Stack TypeScript App',
    description:
      'A full-stack Reddit clone built using TypeScript, featuring a Next.js frontend, an Express.js backend, and a PostgreSQL database with TypeORM. The entire system is containerized using Docker for better scalability and deployment.',
    image: '/images/project/Reddit-Logo.png',
    link: 'https://github.com/YooriLee-825/reddit-app',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Docker'],
  },
  {
    title: 'MatZip - Restaurant Discovery App',
    description:
      'A mobile application that helps users discover, save, and review restaurants. Built with React Native and TypeScript, leveraging Zustand for state management and React Query for efficient data fetching. The backend is powered by NestJS with TypeORM and PostgreSQL, ensuring robust performance. The project covers the full development cycle from design to deployment on App Store and Play Store.',
    image: '/images/project/matzip.png',
    link: 'https://github.com/YooriLee-825/my-MatZip',
    tags: [
      'React Native',
      'TypeScript',
      'React Query',
      'NestJS',
      'TypeORM',
      'PostgreSQL',
      'AWS',
    ],
  },
];
