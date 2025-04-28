'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BusinessCard3D from '../BusinessCard3D';
import TypedTitle from '../TypedTitle';
import IntroMenu from '../IntroMenu';
import AboutSection from '../AboutSection';
import ScrollPrompt from '../ScrollPrompt';

const IntroAboutSectionMobile = () => {
  const aboutTriggerRef = useRef(null);

  const { ref: aboutRef } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Animation states
  const [showMenu, setShowMenu] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // When typing animation is complete, trigger sequence
  const handleTypingDone = () => {
    setTimeout(() => setShowMenu(true), 400); // Show IntroMenu
    setTimeout(() => setShowCard(true), 900); // Show BusinessCard3D
    setTimeout(() => setShowScroll(true), 1400); // Show ScrollPrompt
  };

  return (
    <motion.section
      ref={aboutTriggerRef}
      style={{
        backgroundColor: '#1a2238',
        color: '#f4f4f4',
      }}
      className="min-h-[130vh] font-['Inter'] overflow-x-hidden transition-colors duration-700"
    >
      <div className="flex flex-col items-center w-full px-4 pt-16">
        {/* Typing animation for the big title */}
        <TypedTitle
          startTyping={true}
          showCursor={false}
          onTypingDone={handleTypingDone}
        />

        {/* IntroMenu appears after typing */}
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mt-6"
          >
            <IntroMenu />
          </motion.div>
        )}

        {/* Business card animation */}
        {showCard && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10"
          >
            <BusinessCard3D flipped />
          </motion.div>
        )}

        {/* Scroll prompt animation */}
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <ScrollPrompt />
          </motion.div>
        )}

        {/* Invisible trigger for background color transition */}
        <div ref={aboutRef} className="w-full h-1"></div>

        {/* Full About Section (appears naturally) */}
        <div className="mt-16 w-full">
          <AboutSection />
        </div>
      </div>
    </motion.section>
  );
};

export default IntroAboutSectionMobile;
