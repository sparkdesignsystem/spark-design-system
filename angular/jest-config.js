const { resolve } = require('path');

const root = resolve(__dirname, '.');
module.exports = {
  rootDir: root,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/setup-jest.ts',
    '<rootDir>/projects/spark-angular/src/lib/components/sprk-carousel/',
    '<rootDir>/projects/spark-angular/src/lib/components/sprk-carousel-item/',
    '<rootDir>/projects/spark-angular/src/lib/components/sprk-stepper/',
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/setup-jest.ts',
    '<rootDir>/projects/spark-angular/src/lib/components/sprk-carousel/',
    '<rootDir>/projects/spark-angular/src/lib/components/sprk-carousel-item/',
    '<rootDir>/projects/spark-angular/src/lib/components/sprk-stepper/',
  ],
  coverageDirectory: '<rootDir>/coverage/spark-angular',
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
