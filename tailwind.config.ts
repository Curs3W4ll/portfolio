import type { Config } from "tailwindcss";
// @ts-expect-error No declared type for now
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
      black: "#3A333D",
    },
    fontFamily: {
      sans: ["'Merriweather Sans'", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
    },
  },
  plugins: [primeui],
} satisfies Config;
