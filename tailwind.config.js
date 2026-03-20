/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          light: '#4DB8D6',
          DEFAULT: '#2A7A8C',
          dark: '#1a5a6a',
        }
      }
    },
  },
  plugins: [],
}
