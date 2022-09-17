module.exports = {
  testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  },
  moduleDirectories: ['node_modules', 'src'],
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.[jt]s?(x)'],
  coverageProvider: 'babel',
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
};
