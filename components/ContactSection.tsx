'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="w-full max-w-[720px] mx-auto text-center px-6 md:px-0 py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
      <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
        Whether you want to collaborate or just say hi,
        <br />
        feel free to reach out anytime.
      </p>

      <div className="flex justify-center gap-6 text-[20px] text-gray-600">
        <a
          href="mailto:yoori.lee825@gmail.com"
          className="hover:text-blue-500 transition"
        >
          <FiMail />
        </a>
        <a
          href="https://github.com/YooriLee-825"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yoori-lee-d0825b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FiLinkedin />
        </a>
      </div>
    </motion.section>
  );
};

export default ContactSection;
