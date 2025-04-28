'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
      className="mt-[77vh] flex flex-col md:flex-row justify-between items-start w-full pt-18 px-6 md:px-12 z-10"
    >
      {/* Mobile only: About Me title + icon */}
      <div className="flex flex-col items-center w-full mb-10 md:hidden">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <img
          src="/images/profile/emo.png"
          alt="About Me Icon"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      {/* Left column: About text (shared on mobile and desktop) */}
      <div className="w-full md:w-1/2">
        <p className="uppercase text-sm text-gray-500 mb-2">About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Full-stack developer based in Toronto, creating clean, thoughtful web
          experiences with a focus on usability and real-world impact.
        </h2>
        <p className="text-[16px] leading-relaxed">
          With a background in software development across Korea’s hospitals,
          research centers, and public institutions, I’ve built adaptable
          solutions in complex environments. Now tutoring students in Canada, I
          share what I’ve learned while constantly sharpening my own skills. My
          approach blends clean code, user-first thinking, and clear design —
          always aiming to make tech feel a little more human.
        </p>
      </div>

      {/* Right column: Empty spacer for layout balance (desktop only) */}
      <div className="hidden md:block w-full md:w-1/2" />
    </motion.section>
  );
};

export default AboutSection;
