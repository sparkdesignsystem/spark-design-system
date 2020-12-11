const { resolve } = require('path');

const root = resolve(__dirname, '.');
module.exports = {
  rootDir: root,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  testMatch: ['**/?(*.)+(tests).[j]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/setup-jest.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: '<rootDir>/coverage',
};
