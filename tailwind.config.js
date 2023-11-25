/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // Standard screens
      xs: "320px",
      sm: "540px",
      md: "840px",
      lg: "1100px",
      xl: "1600px",

      // Members Card screen
      card_xs: "320px",
      card_sm: "540px",
      card_md: "777px",
      card_lg: "1070px",
    },
    fontFamily: {
      gilroy: ["Gilroy"],
      quicksand: ["Quicksand", "sans-serif"],
      seogeUI: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      IBM: ["IBM Plex Sans", "sans-serif"],
    },
    fontWeight: {
      "light-300": 300,
      "normal-400": 400,
      "medium-600": 600,
      "bold-800": 800,
      "extra-900": 900,
    },
    extend: {},
  },
  plugins: [],
};
