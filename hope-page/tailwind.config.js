/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mauve: '#BC8DA0',
        rose: '#A04668',
        pink: '#AB4967',
        lavender: '#D9D0DE',
        sage: '#ADC698',
      },
    },
  },
  plugins: [],
};
