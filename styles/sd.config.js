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
          destination: '_vars.scss',
          filter: {
            file: 'settings',
          },
        },
        {
          format: 'themable-scss/web',
          destination: '_space.scss',
          filter: {
            file: 'space',
          },
        },
        {
          format: 'themable-scss/web',
          destination: '_layer.scss',
          filter: {
            file: 'layer',
          },
        },
        {
          format: 'themable-scss/web',
          destination: '_typography.scss',
          filter: {
            file: 'typography',
          },
        },
        {
          format: 'themable-scss/web',
          destination: '_object.scss',
          filter: {
            file: 'object',
          },
        },
        {
          format: 'themable-scss/web',
          destination: '_colors.scss',
          filter: {
            file: 'color',
          },
        },
        {
          format: 'themable-scss/web',
          destination: '_component.scss',
          filter: {
            file: 'component',
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
      transformGroup: 'custom/android',
      prefix: 'sprk',
      buildPath: 'android/',
      files: [
        {
          destination: 'spark_design_tokens_colors.xml',
          format: 'android/colors',
        },
        {
          destination: 'spark_design_tokens_font_dimens.xml',
          format: 'android/fontDimens',
        },
        {
          destination: 'spark_design_tokens_dimens.xml',
          format: 'android/dimens',
        },
        {
          destination: 'spark_design_tokens_strings.xml',
          format: 'android/strings',
        },
      ],
    },
    ios: {
      transformGroup: 'custom/ios',
      prefix: 'sprk',
      buildPath: `ios/`,
      files: [
        {
          destination: `SparkDesignTokens.swift`,
          className: `SparkDesignTokens`,
          format: ['ios-swift/class.swift'],
          filter: 'filter-mobile',
        },
      ],
    },
  },
};
