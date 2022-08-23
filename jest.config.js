/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/app/**/*.ts"
  ],
  coverageProvider: "v8",
  coverageReporters: [
    "text"
  ],
  errorOnDeprecated: true,
  reporters: [
    "default",
  ],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "http://localhost/"
  }
}
