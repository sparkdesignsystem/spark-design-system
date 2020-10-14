const StyleDictionary = require('style-dictionary').extend('./sd.config.js');

StyleDictionary.registerFormat({
  name: 'themable-scss/web',
  formatter: (tokens) => {
    const formattedTokens = tokens.allProperties.map((token) => {
      return `/// ${token.comment} \n$${token.name}: ${token.value}${
        token.themable ? ' !default' : ''
      };`;
    });
    return formattedTokens.join('\n');
  },
});

StyleDictionary.buildAllPlatforms();
