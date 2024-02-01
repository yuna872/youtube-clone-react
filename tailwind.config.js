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
      bgColor: "#0F0F0F",
      youtubeWhite: "#F1F1F1",
      youtubeGray: "#AAAAAA",
      youtubeDarkGray: "#717171",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
