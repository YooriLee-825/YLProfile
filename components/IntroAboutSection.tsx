'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import BusinessCard3D from '../components/BusinessCard3D';
import TypedTitle from '../components/TypedTitle';
import IntroMenu from '../components/IntroMenu';
import ScrollPrompt from '../components/ScrollPrompt';
import AboutSection from '../components/AboutSection';

const IntroAboutSection = () => {
  const sectionRef = useRef(null);

  const [startTyping, setStartTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // Track scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Card rotation and movement based on scroll
  const rotateY = useTransform(scrollYProgress, [0.2, 0.3], [0, 180]);
  const smoothRotateY = useSpring(rotateY, { stiffness: 80, damping: 20 });

  const x = useTransform(scrollYProgress, [0, 0.3], ['-50%', '50%']);
  const y = useTransform(scrollYProgress, [0, 0.3], ['0%', '170%']);

  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    ['0deg', '8deg', '0deg']
  );
  const smoothRotateZ = useSpring(rotateZ, { stiffness: 70, damping: 20 });

  // Background fade and color transition on scroll
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ['#1a2238', '#f7f5f0']
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ['#f4f4f4', '#222']
  );

  // Start typing effect after short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
      setShowCursor(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Cursor blinks for a few seconds then disappears
  useEffect(() => {
    if (showCursor) {
      const timer = setTimeout(() => setShowCursor(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [showCursor]);

  // After typing ends, show menu, card, and scroll prompt one by one
  const handleTypingDone = () => {
    setTimeout(() => setShowRight(true), 500);
    setTimeout(() => setShowCard(true), 1200);
    setTimeout(() => setShowScroll(true), 2000);
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor, color: textColor }}
      className="min-h-[200vh] relative overflow-hidden font-['Inter'] transition-colors duration-700"
    >
      {/* Full-screen gradient background with fade-out on scroll */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          opacity: backgroundOpacity,
          backgroundImage:
            'linear-gradient(to bottom, #05070e 0%, #3c3f58 100%)',
        }}
      />

      {/* Main content: Left = Typed text, Right = Menu */}
      <div className="relative z-10 flex flex-col md:flex-row w-full min-h-[48vh]">
        {/* Left: Typing animation */}
        <div className="flex-1 p-6 md:p-12 mt-[10vh]">
          <TypedTitle
            startTyping={startTyping}
            showCursor={showCursor}
            onTypingDone={handleTypingDone}
          />
        </div>

        {/* Right: Menu appears after typing is done */}
        {showRight && (
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 p-6 md:p-12 flex flex-col justify-start relative mt-[20vh]"
          >
            <IntroMenu />
          </motion.div>
        )}
      </div>

      {/* 3D business card appears and animates on scroll */}
      {showCard && (
        <motion.div
          style={{ x, y, rotateZ: smoothRotateZ, rotateY: smoothRotateY }}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[26%] left-1/2 -translate-x-1/2 z-[10]"
        >
          <BusinessCard3D />
        </motion.div>
      )}

      {/* Scroll prompt appears last */}
      {showScroll && <ScrollPrompt />}

      {/* About section at the bottom */}
      <AboutSection />
    </motion.section>
  );
};

export default IntroAboutSection;
