/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          dark: '#1a1a1a',
          orange: '#ff6b35',
          orangeHover: '#e55a2b',
          white: '#ffffff',
          gray: '#f5f5f5',
        }
      }
    },
  },
  plugins: [],
}