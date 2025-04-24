export const projects = [
  {
    slug: 'My-Profile',
    title: 'My-Profile',
    description:
      'A personal portfolio site with elegant animation and thoughtful layout.',
    image: '/images/project/my-profile.png',
    link: 'https://yl-profile.vercel.app',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive UI',
    ],
    content: `
  This portfolio site showcases my experience, projects, and design philosophy as a full-stack developer.
  It features a dark-to-light scroll-based theme transition, animated 3D business card, and a responsive layout.
  Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, and deployed on Vercel.
    `,
  },
  {
    slug: 'matzip-finder',
    title: 'MatZip Finder',
    description: 'A location-based restaurant search app.',
    image: '/images/project/matzip.png',
    link: 'https://github.com/YooriLee-825/MatzipApp',
    tags: ['Next.js', 'Map API', 'Tailwind'],
    content: `
This project helps users find nearby restaurants based on their location.
Built with Kakao Map API, responsive design, and deployed with Vercel.
    `,
  },
  {
    slug: 'reddit-clone',
    title: 'Reddit Clone',
    description: 'A Reddit-style community forum app.',
    image: '/images/project/Reddit-Logo.png',
    link: 'https://github.com/YooriLee-825/reddit-app',
    tags: ['React', 'Firebase', 'Chakra UI'],
    content: `
Users can sign up, create posts, upvote/downvote, and comment on communities.
Authentication is handled by Firebase Auth, and posts are stored in Firestore.
    `,
  },
];
