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
        primary: {
          DEFAULT: "#51BBFE",
          300: "#61C2FF",
        },
      }
    },
  },
  plugins: [],
}