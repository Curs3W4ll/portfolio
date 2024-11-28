/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-primeui")],
};
