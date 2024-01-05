/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "orangePrimary":"#FC6011",
        "yellowPrimary":"#F99F1C",
        "orangeSecondary ":"#FD6011",
        "globalBody":"#EEEFF0"
      },
    },
  },
  plugins: [],
}
