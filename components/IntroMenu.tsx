'use client';
import React from 'react';

const IntroMenu = () => {
  return (
    <>
      {/* Top-right navigation menu */}
      <div className="absolute top-0 right-6 z-[9999] flex space-x-8 text-[15px] font-bold uppercase tracking-widest">
        {['about', 'experience', 'projects'].map((label) => (
          <a
            key={label}
            href={`#${label}`}
            className="group flex items-center space-x-1 hover:opacity-80 transition-all font-['Eurostile']"
          >
            <span className="transform group-hover:translate-y-[2px] transition-transform duration-300 text-[18px] text-red-500 group-hover:text-gray-500">
              ◢
            </span>
            <span>{label}</span>
          </a>
        ))}
      </div>

      {/* One-line personal intro */}
      <p className="text-[2.5vw] md:text-[2vw] font-light leading-tight mt-[5vh] font-['Eurostile']">
        Full-stack developer who loves building & solving real problems with
        thoughtful code.
      </p>
    </>
  );
};

export default IntroMenu;
