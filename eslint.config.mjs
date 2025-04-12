// @ts-check
import { FlatCompat } from "@eslint/eslintrc";
import withNuxt from "./.nuxt/eslint.config.mjs";

const compat = new FlatCompat();

export default withNuxt().append([
  {
    ignores: ["components-types-sb.d.ts", "volt/**/*"],
  },
  ...compat.config({
    plugins: ["cypress", "no-only-tests"],
    extends: ["plugin:cypress/recommended"],
    overrides: [
      {
        files: ["storyblok/**/*.vue"],
        rules: {
          "vue/multi-word-component-names": "off",
        },
      },
    ],
    rules: {
      "vue/no-v-html": "off",
      "vue/html-self-closing": "off",
    },
  }),
]);
