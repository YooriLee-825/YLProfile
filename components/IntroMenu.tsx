'use client';

import React from 'react';

const IntroMenu = () => {
  return (
    <>
      {/* Top-right navigation menu */}
      <div className="absolute top-4 md:top-0 right-4 md:right-6 z-[9999] flex space-x-6 md:space-x-8 text-[13px] md:text-[15px] font-bold uppercase tracking-widest">
        {['about', 'experience', 'projects'].map((label) => (
          <a
            key={label}
            href={`#${label}`}
            className="group flex items-center space-x-1 hover:opacity-80 transition-all font-['Eurostile']"
          >
            <span className="transform group-hover:translate-y-[2px] transition-transform duration-300 text-[16px] md:text-[18px] text-red-500 group-hover:text-gray-500">
              ◢
            </span>
            <span>{label}</span>
          </a>
        ))}
      </div>

      {/* One-line personal intro */}
      <div className="flex flex-col items-center mt-[8vh] md:mt-[5vh] text-center font-['Eurostile']">
        <p className="text-[4vw] md:text-[2vw] font-light leading-tight">
          Full-stack developer who loves building
        </p>
        <p className="text-[4vw] md:text-[2vw] font-light leading-tight">
          & solving real problems with thoughtful code.
        </p>
      </div>
    </>
  );
};

export default IntroMenu;
