/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: "#6051a2",
      aquaBlue: "#60e1a9",
      white: "#ffffff",
    },
    screens: {
      custom: "904px",
      maxXl: "1280px",
      custoMin: "504px",
    },
  },
  plugins: [],
};
