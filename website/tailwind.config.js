/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-blue': '#142ED9',
        'stratos-blue': '#151975',
        'sparky-blue': '#00ebff',
        'highlight-green': '#9FDB9D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        archia: ['Archia', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
