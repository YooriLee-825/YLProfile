import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-3xl font-extrabold text-blue-600 tracking-wide">
          Yoori Lee
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-500 transition-all"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-500 transition-all"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-500 transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
