import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}', // Pages et layouts Next.js
    './src/components/**/*.{ts,tsx,js,jsx}', // Composants React
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '320px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E14FDC',
          light: '#F4C3F6',
          dark: '#9B2A96',
        },
        background: '#FFFFFF',
        surface: '#F9F9F9',
        textPrimary: '#222222',
        textSecondary: '#555555',
        border: '#E0E0E0',
      },
      borderRadius: {
        DEFAULT: '6px',
      },
    },
  },
  plugins: [],
};

export default config;
