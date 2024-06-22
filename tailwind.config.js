/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./public/js/cards.js",
    "./public/js/status.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
