/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        extraBold : 900
      },
      colors: {
        primary: "#007500", //green 
        onPrimary: "#FFFDEE", // white
        secondary: "#343337", // black
      },
    },
  },
  plugins: [],
}