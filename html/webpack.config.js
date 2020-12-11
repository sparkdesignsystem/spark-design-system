const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    spark: './spark.js',
    sparkPrerender: './spark-prerender.js',
    sparkExports: './spark-exports.js',
    sparkPolyfills: './spark-polyfills.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      SPRK_CURRENT_VERSION: JSON.stringify(process.env.npm_package_version),
    }),
  ],
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
                    browsers: ['last 2 versions'],
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
