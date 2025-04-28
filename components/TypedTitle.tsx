'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

interface TypedTitleProps {
  startTyping: boolean; // When true, typing animation starts
  showCursor: boolean; // Whether to show blinking cursor
  onTypingDone: () => void; // Called when typing finishes
}

const TypedTitle: React.FC<TypedTitleProps> = ({
  startTyping,
  showCursor,
  onTypingDone,
}) => {
  return (
    <h1 className="text-[18vw] md:text-[14vw] font-black uppercase leading-none tracking-tight font-['NotoSans'] relative inline-block text-center md:text-left">
      {/* Show typed text when triggered */}
      {startTyping && (
        <>
          {/* Animated typing effect */}
          <ReactTyped
            strings={['Yoori']}
            typeSpeed={160}
            showCursor={false}
            onComplete={onTypingDone}
          />

          {/* Blinking vertical cursor */}
          {showCursor && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: Array(20)
                  .fill(1)
                  .map((_, i) => (i % 2 === 0 ? 1 : 0)),
              }}
              transition={{ duration: 11, ease: 'linear' }}
              className="absolute left-full top-1/2 -translate-y-1/2"
              style={{
                width: '2px',
                height: '80%',
                backgroundColor: '#ccc',
                marginLeft: '20px',
              }}
            />
          )}
        </>
      )}
    </h1>
  );
};

export default TypedTitle;
