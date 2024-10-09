import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  runner: "groups",
  reporters: [
    "default",
    [
      "jest-html-reporter",
      { outputPath: "test-results/report/index.html"},
    ],
  ],
};

export default config;
