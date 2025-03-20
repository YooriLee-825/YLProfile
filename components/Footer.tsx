import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 text-gray-600 text-sm">
      <p>
        This portfolio was <span className="italic">designed</span> and{' '}
        <span className="italic">developed</span> by me, focusing on a{' '}
        <span className="font-semibold">
          clean, responsive, and user-friendly
        </span>{' '}
        experience. Built with <span className="font-bold">Next.js</span> and{' '}
        <span className="font-bold">TypeScript</span>, styled using{' '}
        <span className="font-bold">Tailwind CSS</span>, and deployed with{' '}
        <span className="font-semibold">Vercel</span>.
      </p>
      <p className="mt-2">
        This project incorporates{' '}
        <span className="font-semibold">i18n for multilingual support</span>,
        <span className="font-semibold"> optimized performance and SEO</span>,
        and <span className="font-semibold">dynamic content rendering</span>.
        The codebase is managed using{' '}
        <span className="font-semibold">GitHub</span> for version control and
        collaboration.
      </p>
    </footer>
  );
};

export default Footer;
