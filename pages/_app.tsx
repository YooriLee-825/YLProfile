import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.className} bg-[#efefea] text-[#1a1a1a] min-h-screen transition-colors duration-300`}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
