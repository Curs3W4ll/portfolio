import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "uhqsvm",
  reporter: "junit",
  reporterOptions: {
    mochaFile: "tests-results/cypress/test-output-[hash].xml",
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
});
