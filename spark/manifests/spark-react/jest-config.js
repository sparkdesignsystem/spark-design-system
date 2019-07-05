const { resolve } = require('path');

const root = resolve(__dirname, '../..');
module.exports = {
  rootDir: root,
  projects: ['/spark/**/react/*.test.js'],
};
