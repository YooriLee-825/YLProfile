import React, { useState, useEffect } from 'react';

interface PhotoGalleryProps {
  images: string[];
  marginLeft?: string; // 데스크탑에서 명함 카드와 정렬하기 위한 왼쪽 여백
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images, marginLeft }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 모바일: offset 20px, 데스크탑: offset 50px
  const offset = screenWidth < 768 ? 20 : 50;

  // 반응형 카드 크기: 모바일에서는 w-32 h-44, 데스크탑에서는 w-40 h-56
  const cardWidth = screenWidth < 768 ? 'w-32' : 'w-40';
  const cardHeight = screenWidth < 768 ? 'h-44' : 'h-56';

  return (
    <div
      className="relative w-full h-80 mt-6 flex justify-center items-center"
      style={{ marginLeft: screenWidth < 768 ? 0 : marginLeft || undefined }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`absolute rounded-2xl overflow-hidden transform transition duration-500 cursor-pointer border-4 border-white shadow-2xl ${cardWidth} ${cardHeight}`}
          style={{
            left: `${index * offset}px`,
            transform: hoveredIndex === index ? 'scale(1.7)' : 'scale(1)',
            zIndex: hoveredIndex === index ? 10 : index,
          }}
        >
          <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-gray-300">
            <img
              src={src}
              alt={`photo-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
