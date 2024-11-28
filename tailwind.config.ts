import type { Config } from "tailwindcss";
// @ts-expect-error No declared type for now
import primeui from "tailwindcss-primeui";

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
  plugins: [primeui],
} satisfies Config;
