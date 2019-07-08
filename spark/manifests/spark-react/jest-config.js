const { resolve } = require('path');

const root = resolve(__dirname, '../..');
module.exports = {
  rootDir: root,
  setupFilesAfterEnv: ["<rootDir>/manifests/spark-react/setup.test.js"],
  "testMatch": [
    "**/?(*.)+(spec|test).[j]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    '<rootDir>/manifests/spark-react/setup.test.js'
  ],
  modulePaths: ['<rootDir>manifests/spark-react/node_modules'],
  coveragePathIgnorePatterns: ["/node_modules/", "/vanilla/"],
  coverageDirectory: '<rootDir>/coverage/react'
};