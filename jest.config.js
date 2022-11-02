module.exports = {
  testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '^@/widgets(.*)$': '<rootDir>/src/widgets/$1',
    '^@/features(.*)$': '<rootDir>/src/features/$1',
    '^@/entities(.*)$': '<rootDir>/src/entities/$1',
    '^@/shared(.*)$': '<rootDir>/src/shared/$1',
    '^@/test(.*)$': '<rootDir>/test/$1',
    'react-markdown':
      '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
    'rehype-raw': '<rootDir>/test/unit/mocks/rehype-raw.js',
    '\\.svg$': '<rootDir>/test/unit/mocks/svgr.js',
  },
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
  setupFilesAfterEnv: [
    '<rootDir>/test/unit/setup/setup-router.ts',
    '<rootDir>/test/unit/setup/setup-firebase.ts',
  ],
};
