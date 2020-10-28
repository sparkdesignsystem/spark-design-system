const StyleDictionary = require('style-dictionary').extend('./sd.config.js');

StyleDictionary.registerFormat({
  name: 'themable-scss/web',
  formatter: (tokens) => {
    const formattedTokens = tokens.allProperties.map((token) => {
      let tokenName = token.name;
      if (tokenName === 'sprk-masthead-translate-y')
        tokenName = 'sprk-masthead-translateY';
      return `/// ${token.comment} \n$${tokenName}: ${token.value}${
        token.themable ? ' !default' : ''
      };`;
    });
    return formattedTokens.join('\n');
  },
});

StyleDictionary.registerTransform({
  name: 'size/px-to-rem',
  type: 'value',
  matcher(token) {
    return (
      token.attributes.category === 'size' &&
      token.original.value.includes('px')
    );
  },
  transformer: (token) => {
    let tokenValue = parseInt(token.original.value, 10);
    tokenValue = parseFloat(tokenValue / 16);
    return `${tokenValue}rem`;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'custom/ios',
  transforms: [
    'attribute/cti',
    'name/cti/camel',
    'color/UIColorSwift',
    'content/swift/literal',
    'asset/swift/literal',
    'size/px-to-rem',
    'size/swift/remToCGFloat',
    'font/swift/literal',
  ],
});

StyleDictionary.registerFilter({
  name: 'filter-mobile',
  // eslint-disable-next-line consistent-return
  matcher: (prop) => {
    if (prop.attributes) {
      return prop.attributes.category !== 'content';
    }
  },
});

StyleDictionary.buildAllPlatforms();
