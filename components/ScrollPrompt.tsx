'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ScrollPrompt = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-10 text-center text-sm tracking-widest z-20 animate-pulse"
    >
      {`{ ↓ SCROLL }`}
    </motion.div>
  );
};

export default ScrollPrompt;
