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
