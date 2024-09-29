/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kantumruy: ['"Kantumruy Pro"', "sans-serif"],
      },
      backgroundImage: {
        aboutGradient: [
          "linear-gradient(180deg, rgba(29, 28, 36, 0.2) 0%, rgba(5, 0, 255, 0.2) 100%)",
        ],
      },
    },
  },
  plugins: [],
}
