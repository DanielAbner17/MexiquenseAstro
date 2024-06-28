/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#468bc2',
        secondary: '#ea0a72',
        accent: '#969696',
      },
      fontFamily: {
        sans: ['Averta', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
