const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: "hsl(61, 70%, 52%)",
        red: "hsl(4, 69%, 50%)",
        slate: {
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)",
        },
        white: colors.white,
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
