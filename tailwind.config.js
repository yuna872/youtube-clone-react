/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      title: "18px",

      desc: "12px",
    },
    colors: {
      youtubeWhite: "#F1F1F1",
      youtubeGray: "#AAAAAA",
    },
  },
  plugins: [],
};
