/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5', // Indigo-600
          DEFAULT: '#4338ca', // Indigo-700
          dark: '#3730a3', // Indigo-800
        },
        secondary: {
          light: '#10b981', // Emerald-500
          DEFAULT: '#059669', // Emerald-600
          dark: '#047857', // Emerald-700
        },
        accent: {
          light: '#f59e0b', // Amber-500
          DEFAULT: '#d97706', // Amber-600
          dark: '#b45309', // Amber-700
        },
        background: {
          DEFAULT: '#1f2937', // Gray-800
          light: '#374151', // Gray-700
        },
        text: {
          light: '#f3f4f6', // Gray-100
          DEFAULT: '#e5e7eb', // Gray-200
          dark: '#d1d5db', // Gray-300
        },
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        moveGlow: {
          '0%, 100%': { transform: 'translateY(0)', boxShadow: '0 0 10px rgba(0, 0, 0, 0)' },
          '50%': { transform: 'translateY(-5px)', boxShadow: '0 0 20px rgba(79, 70, 229, 0.7)' }, // primary.light
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 0, 0, 0)' },
          '50%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.7)' }, // primary.light
        },
      },
      animation: {
        slide: 'slide 30s linear infinite',
        moveGlow: 'moveGlow 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        glow: 'glow 1.5s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
