import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    reporters: ["default", "junit"],
    outputFile: {
      junit: "junit-report.xml",
    },
  },
});
