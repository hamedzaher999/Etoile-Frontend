/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        primary2: "#333399",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "460px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "art-pattern": "url('/src/assets/art.png')",
        "space-pattern": "url('/src/assets/space2.jpg')",
        "planet-pattern": "url('/src/assets/company/planet2.png')",
        "planet1-pattern": "url('/src/assets/company/planet1.png')",
        "space": "url('/src/assets/4k.jpg')",
        "space2": "url('/src/assets/4k2.jpg')",

      },
      fontFamily: {
        gabriola: ['Gabriola', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};