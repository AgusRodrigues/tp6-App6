/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/shadcn/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    [require("@tailwindcss/typography"), require("daisyui")],
  ],
  daisyui: {
    themes: ["light", "dark", "luxury"],
  },
}