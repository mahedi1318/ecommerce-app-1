/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mb: "320px"
      },
      container: {
        center: true,
        padding: {
          padding: {
            DEFAULT: "1rem",
            sm: "1rem",
          },
        }
      }
    },
  },
  plugins: [],
}