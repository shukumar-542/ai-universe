/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#eac277",

          "secondary": "#24a2c9",

          "accent": "#96f7dc",

          "neutral": "#16171D",

          "base-100": "#E6DBF0",

          "info": "#5789C7",

          "success": "#29D68B",

          "warning": "#F3BC5E",

          "error": "#DF4A3A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
