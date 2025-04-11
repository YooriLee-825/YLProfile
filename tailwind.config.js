/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ 다크모드 활성화 방식
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // tailwind.config.js
  theme: {
    extend: {
      colors: {
        base: '#efefea',
        ink: '#1a1a1a',
        muted: '#4b4b4b',
        panel: '#e2e2dd',
        accent: '#2a2a2a',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
