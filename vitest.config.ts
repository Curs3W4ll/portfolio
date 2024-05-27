import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

export default defineVitestConfig({
  test: {
    reporters: ["default", "junit"],
    outputFile: {
      junit: "junit-report.xml",
    },
    coverage: {
      exclude: [...configDefaults.exclude, "nuxt.config.ts", "**/*.vue", ".nuxt/*"],
      reporter: ["cobertura", "text", "html"],
    },
  },
});
