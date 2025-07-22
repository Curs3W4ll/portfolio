import pluginCypress from "eslint-plugin-cypress";
import pluginMocha from "eslint-plugin-mocha";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  pluginCypress.configs.recommended,
  pluginMocha.configs.recommended,
  {
    ignores: [".storyblok/**/*", "volt/**/*"],
  },
  {
    files: ["storyblok/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  {
    rules: {
      "no-console": "error",
      "vue/no-v-html": "off",
      "vue/html-self-closing": "off",
      "mocha/no-mocha-arrows": "off",
      "mocha/no-exclusive-tests": "error",
      "mocha/no-pending-tests": "error",
    },
  },
);
