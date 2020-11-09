const StyleDictionary = require('style-dictionary').extend('./sd.config.js');

StyleDictionary.registerFormat({
  name: 'themable-scss/web',
  formatter: (tokens) => {
    return tokens.allProperties
      .map((token) => {
        let tokenName = token.name;
        let tokenValue = token.original.value;
        const tokenGroup = token.group;
        const tokenType = token.type;
        /*
         * We have one variable name that
         * doesn't follow our convention and
         * so we have to transform it.
         */
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

        if (tokenType && tokenGroup) {
          // Return formatted Sass var with comment includes group and type.
          return `/// ${token.comment}\n/// @group ${tokenGroup}\n/// @type ${tokenType}\n$${tokenName}: ${tokenValue}${
            token.themable ? ' !default' : ''
          };`;
        }
        // Return formatted Sass var with comment.
        return `/// ${token.comment}\n$${tokenName}: ${tokenValue}${
          token.themable ? ' !default' : ''
        };`;
      })
      .join('\n');
  },
});

/*
 * Convert all px values to
 * rems. Values need to be in rem
 * for the mobile transforms.
 */
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
