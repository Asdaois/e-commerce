module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: { "3/10": "30%" },
      height: { 22: "22rem/* 352px */", "95/100": "95%", "5/100": "5%" },
      transitionDuration: { 6000: "6s" },
      margin: { "6px": "6px" },
      fontFamily: { "open-condense": ['"Open Sans Condensed"', "serif"] },
    },
  },
  variants: {
    extend: {
      borderWidth: ["first", "last"],
      margin: ["first", "last"],
      scale: ["group-hover"],
      cursor: ["hover"],
    },
  },
  plugins: [],
};
