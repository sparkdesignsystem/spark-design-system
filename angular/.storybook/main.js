module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-google-analytics',
  ],
  stories: ['../projects/spark-angular/src/lib/**/*.stories.ts'],
  features: {
    postcss: false,
  },
  core: {
    builder: 'webpack5',
  },
  babel: async (options) => ({
    ...options,
    // any extra options you want to set
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { targets: { node: 'current' } }], // add this
    ],
  }),
  webpackFinal: (config) => {
    // Workaround for @storybook/addon-jest on Webpack 5, Issue #14856
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        path: require.resolve('path-browserify'),
      },
    };

    return config;
  },
};
