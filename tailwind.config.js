/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#fff7fa',
        rose: '#f4dce5',
        pink: '#e8a9c0',
        berry: '#8e3d5b',
        ink: '#34252d',
        mauve: '#9b7a88',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        editorial: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 70px rgba(142, 61, 91, .12)',
      },
    },
  },
  plugins: [],
}