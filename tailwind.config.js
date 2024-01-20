/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: { 
      playfair: ['Playfair Display', 'serif'],
    },
    extend: {
      colors:{
        primary: '#51BBFE',
      }
    },
  },
  plugins: [],
}