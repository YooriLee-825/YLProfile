import React from 'react';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'GitHub',
    icon: '/icons/github.png',
    url: 'https://github.com/YooriLee-825',
  },
  {
    name: 'LinkedIn',
    icon: '/icons/linkedin.jpg',
    url: 'https://www.linkedin.com/in/yoori-lee-d0825b/',
  },
  {
    name: 'Gmail',
    icon: '/icons/gmail.svg',
    url: 'mailto:yoori.lee825@gmail.com',
  },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-10">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
