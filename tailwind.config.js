/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2D3B36',
        'primary-light': '#EFF5E1',
        'accent-yellow': '#FFFFF4',
        'footer-dark': '#35433E',
        'footer-text': '#E7E8E0'
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}