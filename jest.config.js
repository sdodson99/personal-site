module.exports = {
  testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '^@/entities(.*)$': '<rootDir>/src/entities/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>/src'],
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
  resolver: '<rootDir>/test/unit/jest.resolver.js',
  setupFilesAfterEnv: ['<rootDir>/test/unit/setup/setup-router.ts'],
};
