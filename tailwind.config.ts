import type { Config } from 'tailwindcss';
import { screensWithPx as screens } from './src/config/screens';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    container: {
      center: true, // Optional: centers the container by auto-margin
      padding: {
        DEFAULT: '1rem',
        phone: '0.8rem',
        xlPhone: '1.6rem',
      },
      screens: {
        tablet: '728px', // 728px at 'md'
        xlTablet: '924px', // 984px at 'lg'
        laptop: '1160px', // 1240px at 'xl'
      },
    },
    extend: {
      colors: {
        'primary-dark': '#1E212C',
        'separator-gray': '#FFFFFF26',
        'easy-gray': '#F4F5F6',
        'primary-green': '#17696A',
        'moderate-gray': '#787A80',
        'light-gray': '#D7DADD',
        'low-white': '#FFFFFF1F',
        'half-white': '#FFFFFF99',
        'article-moderate-gray': '#424551',
        'article-light-gray': '#787A80',
      },
      fontFamily: {
        sans: ['Lato', 'Roboto', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        pc: '1380px',
        xlPc: '1536px',
      },
    },
    screens,
  },
  plugins: [],
} satisfies Config;
