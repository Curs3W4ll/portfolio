import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

export default defineVitestConfig({
  test: {
    coverage: {
      exclude: [...configDefaults.exclude, "nuxt.config.ts", "**/*.vue", ".nuxt/*"],
      reporter: ["cobertura", "text", "html"],
    },
  },
});
