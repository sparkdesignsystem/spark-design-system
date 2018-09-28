const path = require('path');

module.exports = {
  entry: {
    sparkCore: './spark-core.js',
    alerts: './components/alerts.js',
    spinners: './components/spinners.js',
    tabs: './components/tabs.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'es5'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
