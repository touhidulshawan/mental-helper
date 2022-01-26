const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        bluegray: colors.slate,
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
