/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnEdit: "#D85D5D",
        btnTrash: "#D85D5D",
        bgForm: "#3C3C3D",
        subTitle: "#D3D3D3",
        titleName: "#0F0F2D",
        titleText: "#5465FF",
      },
      fontFamily: {
        fontText: ["'Lato', sans-serif"],
      },
    },
  },
  plugins: [],
};
