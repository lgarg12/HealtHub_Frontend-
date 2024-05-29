/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ['Monospace', 'Menlo', 'Ubuntu Mono', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
  },
  plugins: [],
})

