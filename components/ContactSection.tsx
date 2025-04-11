import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="text-center py-20 max-w-2xl mx-auto px-4 sm:px-6"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <p className="text-gray-600 mb-8">
        I'm always open to new opportunities, collaborations, or just a chat.
        Feel free to reach out!
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="mailto:yoori.lee825@gmail.com"
          className="text-sm font-medium text-blue-600 hover:text-blue-400 transition"
        >
          yoori.lee825@gmail.com
        </a>
        <a
          href="https://github.com/YooriLee-825"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-700 hover:text-gray-500 transition"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/yoori-lee-d0825b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-700 hover:text-blue-500 transition"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
