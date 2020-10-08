const StyleDictionary = require('style-dictionary').extend('./sd.config.js');

StyleDictionary.registerTransform({
  name: 'themable',
  type: 'value',
  transformer: (prop) => {
    if (prop.themable === true) {
      return `${prop.original.value.toString()} !default`;
    }
    return prop.original.value;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'themable/web',
  // eslint-disable-next-line dot-notation
  transforms: StyleDictionary.transformGroup['scss'].concat(['themable']),
});

StyleDictionary.buildAllPlatforms();
