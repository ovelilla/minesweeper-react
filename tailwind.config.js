/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        10: "repeat(10, minmax(0, 1fr))",
        25: "repeat(25, minmax(0, 1fr))",
        35: "repeat(35, minmax(0, 1fr))",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};
