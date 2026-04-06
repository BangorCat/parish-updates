/** @type {import('tailwindcss').Config} */
const primary1 = "#000162";
const primary2 = "#00B297";
const primary3 = "#B20000";
const primaryLight1 = "#2E3060";
const primaryLight2 = "#00493E";
const primaryLight3 = "#700000";
const fontBlack = "#404040";
const bgLight = "#EDF5F8";

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-1": `linear-gradient(66deg, ${primaryLight1}, ${primary1})`,
        "gradient-2": `linear-gradient(66deg, ${primaryLight2}, ${primary2})`,
        "gradient-3": `linear-gradient(66deg, ${primaryLight3}, ${primary3})`,
        "gradient-animation-2": `linear-gradient(66deg, ${primaryLight2}, ${primary2}, ${primaryLight2}, ${primary2})`,
        "gradient-animation-3": `linear-gradient(66deg, ${primaryLight3}, ${primary3}, ${primaryLight3})`,
      }),
      backgroundPosition: {
        "position-0": "0% 0%",
        "position-50": "50% 0%",
        "position-100": "100% 0%",
      },
      backgroundSize: {
        "size-500": "500%",
        "size-300": "300%",
        "size-100": "100% 0",
      },
      colors: {
        "dark-1": bgLight,
        "primary-1": primary1,
        "primary-2": primary2,
        "primary-3": primary3,
        "primary-light-1": primaryLight1,
        "primary-light-2": primaryLight2,
        "primary-light-3": primaryLight3,
        "font-black": fontBlack,
        "bg-light": bgLight,

        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      fontFamily: {
        title: ["Old Standard TT", "serif"],
        main: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xxl: "2100px",
      xxxl: "2500px",
    },
  },
  plugins: [],
};
