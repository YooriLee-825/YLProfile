'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BusinessCard3D from '../BusinessCard3D';
import TypedTitle from '../TypedTitle';
import IntroMenu from '../IntroMenu';
import AboutSection from '../AboutSection';
import ScrollPrompt from '../ScrollPrompt';

const IntroAboutSectionMobile = () => {
  const aboutTriggerRef = useRef(null);

  // Observer for AboutSection start
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1, // Slight trigger when AboutSection shows
    triggerOnce: false,
  });

  const [showMenu, setShowMenu] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [isPastIntro, setIsPastIntro] = useState(false);

  const handleTypingDone = () => {
    setTimeout(() => setShowMenu(true), 400);
    setTimeout(() => setShowCard(true), 900);
    setTimeout(() => setShowScroll(true), 1400);
  };

  useEffect(() => {
    setIsPastIntro(aboutInView);
  }, [aboutInView]);

  return (
    <motion.section
      ref={aboutTriggerRef}
      style={{
        backgroundColor: isPastIntro ? '#1a2238' : '#f7f5f0',
        color: isPastIntro ? '#f4f4f4' : '#222',
      }}
      className="min-h-[130vh] font-['Inter'] overflow-x-hidden transition-colors duration-700"
    >
      <div className="flex flex-col items-center w-full px-4 pt-16">
        {/* Big Typing Title */}
        <TypedTitle
          startTyping={true}
          showCursor={false}
          onTypingDone={handleTypingDone}
        />

        {/* Menu after typing */}
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6"
          >
            <IntroMenu />
          </motion.div>
        )}

        {/* Business card */}
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

        {/* Scroll prompt */}
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

        {/* About trigger (hidden) */}
        <div ref={aboutRef} className="w-full h-1"></div>

        {/* AboutSection */}
        <div className="mt-16 w-full">
          <AboutSection />
        </div>
      </div>
    </motion.section>
  );
};

export default IntroAboutSectionMobile;
