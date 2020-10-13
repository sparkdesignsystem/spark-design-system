const StyleDictionary = require('style-dictionary').extend('./sd.config.js');

StyleDictionary.registerFormat({
  name: 'themable-scss/web',
  formatter: (tokens) => {
    const formattedTokens = tokens.allProperties.map((token) => {
      if (token.themable === true) {
        // eslint-disable-next-line max-len
        return `/// ${token.comment} \n$${token.name}: ${token.value} !default;`;
      }
      return `/// ${token.comment} \n$${token.name}: ${token.value};`;
    });
    return formattedTokens.join('\n');
  },
});

StyleDictionary.buildAllPlatforms();
