import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  runner: "groups",
  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "./test-results", outputName: "test-results.xml" },
    ],
  ],
};

export default config;
