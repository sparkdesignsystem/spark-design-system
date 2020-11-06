const StyleDictionary = require('style-dictionary').extend('./sd.config.js');

StyleDictionary.registerFormat({
  name: 'themable-scss/web',
  formatter: (tokens) => {
    return tokens.allProperties
      .map((token) => {
        let tokenName = token.name;
        let tokenValue = token.original.value;

        if (tokenName === 'sprk-masthead-translate-y')
          tokenName = 'sprk-masthead-translateY';

        /*
         * Check if the value includes a reference
         * so that we can format the ref to a Sass Var.
         */
        const regex = /\{(.*?)\}/;

        /*
         * Formats a reference back into a scss var.
         * black.value -> $sprk-black
         */
        const convert = (str) => {
          const strArr = str.split('.');
          return `$sprk-${strArr.slice(0, strArr.length - 1).join('-')}`;
        };

        while (tokenValue.match(regex)) {
          tokenValue = tokenValue.replace(
            regex,
            convert(tokenValue.match(regex)[1]),
          );
        }

        // Return formatted Sass var with comment.
        return `/// ${token.comment} \n$${tokenName}: ${tokenValue}${
          token.themable ? ' !default' : ''
        };`;
      })
      .join('\n');
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

StyleDictionary.registerTransformGroup({
  name: 'custom/android',
  transforms: [
    'attribute/cti',
    'name/cti/snake',
    'color/hex8android',
    'size/px-to-rem',
    'size/remToSp',
    'size/remToDp',
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
