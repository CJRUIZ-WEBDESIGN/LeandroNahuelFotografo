/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primero: "#041c32",
        segundo: "#04293a",
        tercero: "#064663",
        cuarto: "#ecb365",

        primary: "#3490dc",
        success: "#38c172",
        info: "#6cb2eb",
        warning: "#ffed4a",
        danger: "#e3342f",
        dark: "#343a40",
        light: "#f8f9fa",
      },
    },
  },
  plugins: [],
}