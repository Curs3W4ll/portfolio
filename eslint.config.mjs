// @ts-check
import { FlatCompat } from "@eslint/eslintrc";
import withNuxt from "./.nuxt/eslint.config.mjs";
const compat = new FlatCompat();

export default withNuxt().append([
  ...compat.config({
    plugins: ["cypress"],
    extends: ["plugin:cypress/recommended"],
  }),
]);
