const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, '../../dist/spark-react'),
  },
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
