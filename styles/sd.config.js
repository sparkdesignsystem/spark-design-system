module.exports = {
  source: ['./tokens/**/*.json'],
  platforms: {
    web: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
      ],
      prefix: 'sprk',
      buildPath: 'web/',
      files: [
        {
          format: 'themable-scss/web',
          destination: '_settings.scss',
          filter: {
            file: 'settings',
          },
        },
        {
          format: 'themable-scss/web',
          destination: '_colors.scss',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          format: 'json',
          destination: 'settings.json',
          filter: {
            file: 'settings',
          },
        },
        {
          format: 'json',
          destination: 'colors.json',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
      ],
    },
    js: {
      transformGroup: `js`,
      buildPath: `web/`,
      files: [
        {
          destination: `settings.js`,
          format: `javascript/es6`,
        },
      ],
    },
    android: {
      transformGroup: 'android',
      buildPath: 'android/',
      files: [
        {
          destination: 'spark_colors.xml',
          format: 'android/colors',
        },
        {
          destination: 'spark_font_dimens.xml',
          format: 'android/fontDimens',
        },
        {
          destination: 'spark_dimens.xml',
          format: 'android/dimens',
        },
        {
          destination: 'spark_integers.xml',
          format: 'android/integers',
        },
        {
          destination: 'spark_strings.xml',
          format: 'android/strings',
        },
      ],
    },
    ios: {
      transformGroup: `ios-swift`,
      prefix: 'sprk',
      buildPath: `ios/`,
      files: [
        {
          destination: `SparkDesignTokens.swift`,
          className: `SparkDesignTokens`,
          format: `ios-swift/class.swift`,
        },
      ],
    },
  },
};
