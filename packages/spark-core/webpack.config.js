const path = require('path');

module.exports = {
  entry: {
    sparkCore: './spark-core.js',
    sparkCorePrerender: './spark-core-prerender.js',
    sparkCoreExports: './spark-core-exports.js',
    sparkCorePolyfills: './spark-core-polyfills.js',
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
