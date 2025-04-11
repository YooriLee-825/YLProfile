'use client';
import React from 'react';

const TopNavBar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust for navbar height
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <nav className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center text-sm font-medium text-gray-700 dark:text-gray-300">
        {/* Yoori clickable */}
        <button
          onClick={scrollToTop}
          className="text-lg font-bold text-gray-900 dark:text-white hover:opacity-80 transition-all tracking-wide"
        >
          Yoori
        </button>

        {/* Navigation Links with icon */}
        <ul className="flex gap-8">
          {['about', 'experience', 'projects'].map((label) => (
            <li key={label}>
              <a
                href={`#${label}`}
                onClick={(e) => scrollToSection(e, label)}
                className="group flex items-center space-x-1 hover:text-blue-500 dark:hover:text-blue-400 transition-all uppercase tracking-wider font-['Eurostile']"
              >
                <span className="text-[14px] text-gray-300 group-hover:text-gray-500 transform group-hover:translate-y-[1px] transition-transform duration-300">
                  ◢
                </span>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TopNavBar;
