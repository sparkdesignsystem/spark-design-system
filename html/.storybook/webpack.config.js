const path = require('path');
module.exports = ({ config }) => {
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, '../node_modules'),
    path.resolve(__dirname, '../.babelrc'),
  ];

  return config;
};
