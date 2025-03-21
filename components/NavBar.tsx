import React from 'react';

const NavBar: React.FC = () => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="mt-16 pt-7">
      <ul className="space-y-2 text-gray-700">
        <li>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="hover:text-blue-500 transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={(e) => handleScroll(e, 'experience')}
            className="hover:text-blue-500 transition-colors"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, 'projects')}
            className="hover:text-blue-500 transition-colors"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
