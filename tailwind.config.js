/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.jsx',
    './src/App.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'color-a': '#555B6E',
        'color-b': '#89B0AE',
        'color-c': '#BEE3DB',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}