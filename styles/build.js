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

StyleDictionary.buildAllPlatforms();
