import type { Config } from "tailwindcss";
import primeui from "tailwindcss-primeui";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./components/**/*.{js,ts,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./storyblok/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#ECECEC",
        dark: "#CEC4D2",
      },
      black: {
        DEFAULT: "#3A333D",
        light: "#584E5D",
      },
    },
    fontFamily: {
      sans: ["'Merriweather Sans'", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
    },
  },
  darkMode: "selector",
  plugins: [primeui],
} satisfies Config;
