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
        "yellowSecondary":"#F1BC70",
        "orangeSecondary ":"#FD6011",
        "globalBody":"#EEEFF0",
        "grayPrimary":"#FEFEFE",
        "gray1":"#9CA4AD",
      },
    },
  },
  plugins: [],
}

//#A9B0B8