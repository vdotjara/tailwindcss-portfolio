/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': '#000000',
        'background': '#fffafa',
        'primary': '#165cff',
        'secondary': '#164c7e',
        'tertiary': '#81B7E9',
        'accent': '#FD560E',
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
