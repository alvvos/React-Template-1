/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0e17",
        secondary: "#332f4d",
        accent: "#7f5af0",
        light: "#fffffe",
        dark: "#010101",
        "purple-dark": "#2a2156",
        "purple-light": "#d412ff",
        "dark-blue": "#32007f",
        turquesa: "#ceabffff",
      },
    },
    fontFamily: {
      "Poppins-Medium": ["Poppins-Medium"],
      Garet: ["Garet"],
    },
  },
  plugins: [],
};
