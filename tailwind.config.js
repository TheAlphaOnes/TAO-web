/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':'320px',
      'sm': '540px',
      'md': '840px',
      'lg': '1100px',
      'xl': '1600px',
    },
    fontFamily: {
      gilroy: ["Gilroy"],
      quicksand: ["Quicksand", "sans-serif"],
      seogeUI: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
    },
    fontWeight: {
      'light-300': 300,
      'normal-400': 400,
      'medium-600': 600,
      'bold-800': 800,
      'extra-900': 900,
    },
    extend: {},
  },
  plugins: [],
}