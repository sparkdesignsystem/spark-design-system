const path = require('path');
module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');
  config.module.rules[0].include.push(path.resolve('../spark'));

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  // use @babel/plugin-proposal-class-properties for class arrow functions
  config.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
    /*
     * use babel-plugin-remove-graphql-queries
     * to remove static queries from components
     * when rendering in storybook
     */
    require.resolve("babel-plugin-remove-graphql-queries"),
  ];

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  });

  config.node = {
    fs: 'empty'
  }

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, '../.babelrc'),
    path.resolve(__dirname, '../../spark/manifests/spark-react'),
    path.resolve(__dirname, '../../spark/manifests/spark-react/node_modules'),
    path.resolve(__dirname, '../node_modules')
  ];

  return config;
}
