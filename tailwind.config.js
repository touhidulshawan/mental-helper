const colors = require("tailwindcss/colors");

module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        righteous: ["Righteous", "cursive"],
      },
      outline: {
        sky: ["2px dashed #38BDF8", "1px"],
      },
      colors: {
        bluegray: colors.blueGray,
        teal: colors.teal,
        fuchsia: colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
