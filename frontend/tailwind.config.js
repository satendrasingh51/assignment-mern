/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        container: "#ffffff",
        sidebar: "#fff",
        fontBg: '#282e38',
        mainHeading: "#282e38",
        page: "#f7f7f9",
        navLinks: "#a4a9b8",
        card: "#313844",
        golden: "ffbd4a",
        bars: "#188ae2",
        blue: '#2E90EF',
        red: '#EC4A5E',
        primary: "rgba(46, 144, 239, 1)", //blue
        greyBg: "rgba(247, 250, 253, 1)", //grey
        black: "#333333", // Black
        secondary: "#C3C3C3"

      },
      fontFamily: {
        primary: ["Figtree", "Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
      cursor: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        'not-allowed': 'not-allowed',
        crosshair: 'crosshair',
        'zoom-in': 'zoom-in',
      },
      backgroundImage: {
        addCourse: "url('./Assets/Img/addCourse.png')"
      }
    },
  },
  plugins: [],
};
