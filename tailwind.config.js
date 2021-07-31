module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: { "3/10": "30%" },
      margin: { "6px": "6px" },
    },
  },
  variants: {
    extend: {
      borderWidth: ["first", "last"],
      margin: ["first", "last"],
    },
  },
  plugins: [],
};
