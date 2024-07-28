/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': '#002fb1',
        'background': '#d8e1ff',
        'primary': '#002fb1'
       },
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
