const path = require('path');
module.exports = ({ config }) => {
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');
  config.module.rules[0].include.push(path.resolve('../spark'));
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-env'),
  ];
  // use @babel/plugin-proposal-class-properties for class arrow functions
  config.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
  ];
  config.node = {
    fs: 'empty'
  }
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, '../.babelrc'),
    path.resolve(__dirname, '../../spark/manifests/spark'),
    path.resolve(__dirname, '../../spark/manifests/spark/node_modules'),
    path.resolve(__dirname, '../node_modules')
  ];
  return config;
}
