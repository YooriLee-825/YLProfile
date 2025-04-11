import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ 개발 시 이미지 최적화 끄기
  },
};

export default nextConfig;
