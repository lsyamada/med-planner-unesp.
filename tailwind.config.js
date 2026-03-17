/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'unesp-blue': '#004a8d', // Azul oficial aproximado
      },
    },
  },
  plugins: [],
}
