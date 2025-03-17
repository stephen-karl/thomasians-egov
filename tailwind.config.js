/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "SF-Pro": ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

