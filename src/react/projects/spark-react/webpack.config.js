const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../../dist/spark-react'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  plugins: [
    new webpack.DefinePlugin({
      SPRK_REACT_CURRENT_VERSION: JSON.stringify(
        process.env.npm_package_version,
      ),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
