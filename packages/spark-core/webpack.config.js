const path = require('path');

module.exports = {
  entry: {
    sparkCore: './spark-core.js',
    alerts: './components/alerts.js',
    spinners: './components/spinners.js',
    tabs: './components/tabs.js',
    modals: './components/modals.js',
    getElements: './utilities/getElements.js',
    pagination: './components/pagination.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: [
                      'last 2 versions',
                    ],
                  },
                },
              ],
            ],
          },
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
