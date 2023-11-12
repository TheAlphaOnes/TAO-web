/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      gilroy: ["Gilroy"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 600,
      bold: 800,
      extra: 900,
    },
    extend: {},
  },
  plugins: [],
}