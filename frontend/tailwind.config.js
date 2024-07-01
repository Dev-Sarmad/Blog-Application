/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom : ['"National 2 Condensed Bold"', 'Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
};
