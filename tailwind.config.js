/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefbf2',
          100: '#d6f5de',
          200: '#b0eac3',
          300: '#7dd8a0',
          400: '#48bf7a',
          500: '#25a45f',
          600: '#198f51',
          700: '#126a3e',
          800: '#115433',
          900: '#0f452b',
          950: '#072718',
        },
        hero: '#32462d',
      },
    },
  },
  plugins: [],
};
