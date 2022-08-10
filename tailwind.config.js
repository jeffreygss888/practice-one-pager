/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        texture: `url('/src/assets/brick-wall.webp')`,
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 100 },
        },
        fadeOut: {
          from: { opacity: 100 },
          to: { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-out',
        fadeOut: 'fadeOut 300ms ease-out',
      },
    },
  },
  plugins: [],
};
