/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        GiantsInline: ["Giants-Inline"],
        GongGothicMedium: ["GongGothicMedium"],
        prentenDard: ["Pretendard-Regular"],
      },
    },
  },
  plugins: [],
};
