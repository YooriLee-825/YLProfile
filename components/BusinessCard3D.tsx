'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import Image from 'next/image';
import emo from '../public/images/profile/emo.png';
import useMediaQuery from './hooks/useMediaQuery';

interface BusinessCard3DProps {
  flipped?: boolean;
}

const BusinessCard3D: React.FC<BusinessCard3DProps> = ({ flipped = false }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Safe mobile detection using media query
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Mouse tilt (desktop only)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const tiltX = useTransform(mouseY, [0, 1], [10, -10]);
  const tiltY = useTransform(mouseX, [0, 1], [-10, 10]);
  const smoothTiltX = useSpring(tiltX, { stiffness: 80, damping: 18 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 80, damping: 18 });

  // Scroll rotation
  const { scrollYProgress } = useScroll();
  const scrollRotateY = useTransform(
    scrollYProgress,
    [0, 0.3],
    flipped ? [0, 0] : [0, 180]
  );
  const smoothScrollRotateY = useSpring(scrollRotateY, {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = (e.clientX - bounds.left) / bounds.width;
    const y = (e.clientY - bounds.top) / bounds.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[480px] max-w-[90vw] aspect-[1.638] sm:scale-100 scale-95 mx-auto mt-16 perspective-[1200px]"
    >
      <motion.div
        style={{
          rotateY: smoothScrollRotateY,
          rotateX: isMobile ? '0deg' : smoothTiltX,
          rotateZ: isMobile ? '0deg' : smoothTiltY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-white border border-gray-300 shadow-md rounded-md px-8 py-6 flex items-center justify-between gap-10 text-[15px] font-light tracking-wide"
          style={{
            backfaceVisibility: 'hidden',
            backgroundImage: "url('/images/paper-texture.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Ribbon */}
          <div className="absolute top-2 right-2 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ef4444"
              className="w-10 h-10"
            >
              <path d="M6 2a2 2 0 0 0-2 2v18l8-5.333L20 22V4a2 2 0 0 0-2-2H6z" />
            </svg>
          </div>

          {/* Left */}
          <div className="flex flex-col justify-center h-full basis-1/3">
            <p className="text-[14px] md:text-[18px] text-gray-800 font-semibold">
              Yoori Lee
            </p>
            <p className="text-[12px] md:text-[16px] text-gray-500 mt-1">
              Full-Stack Developer
            </p>
          </div>

          {/* Divider */}
          <div className="w-px h-[70%] bg-gray-300" />

          {/* Right */}
          <div className="flex flex-col justify-center h-full space-y-2 basis-2/3 text-[8px] md:text-[14px] text-gray-700">
            <p>
              <span className="font-medium">Email:</span>{' '}
              <a
                href="mailto:yoori.lee825@gmail.com"
                className="font-medium hover:text-gray-500 transition break-all"
              >
                yoori.lee825@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">GitHub:</span>{' '}
              <a
                href="https://github.com/YooriLee-825"
                className="font-medium hover:text-gray-500 transition break-all"
              >
                YooriLee-825
              </a>
            </p>
            <p>
              <span className="font-medium">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/yoori-lee-d0825b/"
                className="font-medium hover:text-gray-500 transition break-all"
              >
                yoori-lee-d0825b
              </a>
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-white border border-gray-300 shadow-md rounded-md px-8 py-6 flex flex-col items-center justify-center text-center text-[15px] font-light tracking-wide"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundImage: "url('/images/paper-texture.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div style={{ transform: 'scaleX(-1)' }}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              About Me
            </h2>
            <Image
              src={emo}
              alt="Yoori Avatar"
              width={130}
              height={130}
              className="rounded-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessCard3D;
