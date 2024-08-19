

const customJestConfig = {
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts",
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
    'dashboard/Charts': '<rootDir>/__mocks__/dashboard/Charts.js',
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", 
  },
  testTimeout: 30000,
  modulePathIgnorePatterns: ["<rootDir>/k6/"],
  coverageReporters: ["json", "html"],
  coverageDirectory: "<rootDir>/coverage",
};

export default customJestConfig;
