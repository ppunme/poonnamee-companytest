/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#8759f2",
        "secondary-color": "#f3eefe",
      },
    },
  },
  plugins: [],
};
