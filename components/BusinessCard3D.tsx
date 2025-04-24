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

interface BusinessCard3DProps {
  flipped?: boolean; // Used to control initial Y rotation (default: false)
}

const BusinessCard3D: React.FC<BusinessCard3DProps> = ({ flipped = false }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position values (0 to 1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Create tilt angles based on mouse position
  const tiltX = useTransform(mouseY, [0, 1], [10, -10]);
  const tiltY = useTransform(mouseX, [0, 1], [-10, 10]);

  // Smooth tilt animation
  const smoothTiltX = useSpring(tiltX, { stiffness: 80, damping: 18 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 80, damping: 18 });

  // Scroll-based Y rotation (flipping effect)
  const { scrollYProgress } = useScroll();
  const scrollRotateY = useTransform(
    scrollYProgress,
    [0, 0.3],
    flipped ? [180, 180] : [0, 180]
  );
  const smoothScrollRotateY = useSpring(scrollRotateY, {
    stiffness: 80,
    damping: 20,
  });

  // Update mouseX/mouseY when the mouse moves over the card
  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (e.clientX - bounds.left) / bounds.width;
    const y = (e.clientY - bounds.top) / bounds.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Reset tilt when the mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[480px] aspect-[1.638] mx-auto mt-16 perspective-[1200px]"
    >
      <motion.div
        style={{
          rotateY: smoothScrollRotateY,
          rotateX: smoothTiltX,
          rotateZ: smoothTiltY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full bg-white border border-gray-300 shadow-md rounded-md px-8 py-6 flex items-center justify-between gap-10 text-[15px] font-light tracking-wide"
          style={{
            backfaceVisibility: 'hidden',
            backgroundImage: "url('/images/paper-texture.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Top-right bookmark ribbon */}
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

          {/* Left side: name & role */}
          <div className="flex flex-col justify-center h-full basis-1/3">
            <p className="text-[18px] text-gray-800 font-semibold">Yoori Lee</p>
            <p className="text-gray-500 mt-1">Full-Stack Developer</p>
          </div>

          {/* Divider */}
          <div className="w-px h-[70%] bg-gray-300" />

          {/* Right side: contact info */}
          <div className="flex flex-col justify-center h-full space-y-2 basis-2/3 text-[14px] text-gray-700">
            <p>
              <span className="font-medium">Email:</span>{' '}
              <a
                href="mailto:yoori.lee825@gmail.com"
                className="font-medium text-gray-700 hover:text-gray-500 transition"
              >
                yoori.lee825@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">GitHub:</span>
              <a
                href="https://github.com/YooriLee-825"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 hover:text-gray-500 transition"
              >
                YooriLee-825
              </a>
            </p>
            <p>
              <span className="font-medium">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/yoori-lee-d0825b/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 hover:text-gray-500 transition"
              >
                yoori-lee-d0825b
              </a>
            </p>
          </div>
        </div>

        {/* Back side */}
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
