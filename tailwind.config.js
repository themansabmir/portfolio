/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#141416",
        background:"#1a1a1a",
        mainText:"#f6f0e2",
      },
    },
  },
  plugins: [],
};

