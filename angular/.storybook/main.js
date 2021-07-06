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
};
