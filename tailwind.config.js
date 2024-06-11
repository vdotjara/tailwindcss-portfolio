/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        Familjen: ["Familjen Grotesk"],
        Syne: ["Syne"],
      },
    },
  },
  plugins: [],
};
