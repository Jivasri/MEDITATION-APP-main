/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./relax-breathe.html", 
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1f1f1f',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
