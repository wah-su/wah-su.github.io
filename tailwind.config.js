const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./static/js/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "page-background": "#210905",
        "header-background": "#85144B",
        "card-background": "#823220",
        "button-background": "#E64824",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      screens: {
        'xl': '1512px',
        '2xl': '1860px',
        'fhd': '1920px',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

