/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'md': '800px',
      'lg': '1024px',
      'xl': '1440px',
    },
    container: {
      center: true,
    },

    extend: {
      colors: {
        "neutral-2": "#F2F2F3",
        "neutral-3": "#E5E5E6",
        "neutral-8": "#88898E",
        "primary-2": "#00C614"
      },
      width: {
        "search-bar": "392px",
        "sidebar": "235px"
      },
      height: {
        body: "calc(100vh - 64px)"
      }
    },
  },
  plugins: [],
}
