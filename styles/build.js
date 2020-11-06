const StyleDictionary = require('style-dictionary').extend('./sd.config.js');

const formatDashCase = (value) => {
  // Remove json JSON .value notation.
  const newVal = value.replace(/\.value/g, '');
  // Replace all "." with Sass var "-"" syntax.
  return newVal.replace(/\./g, '-');
};

/*
 * Takes a SD reference value ex. "{gray.value}"
 * and formats it to be in
 * Sass var syntax ex. $sprk-gray
 * @param {string} reference
 * @return {string}
 */
const formatRefForSass = (reference) => {
  let varRef = reference;
  const hasOpenParen = reference.includes('(');
  const hasCloseParen = reference.includes(')');
  if (hasOpenParen || hasCloseParen) {
    const refArr = hasOpenParen
      ? reference.split(/(\()/)
      : reference.split(/(\))/);
    // The Sass Var is last item in
    // array for Open parens and last for Close.
    varRef = hasOpenParen ? refArr.pop() : refArr.shift();
    console.log(reference, 'var ref')
    varRef = formatDashCase(varRef);
    // Replace reference with Sass var.
    if (hasOpenParen) refArr.push(`$sprk-${varRef}`);
    if (hasCloseParen) refArr.unshift(`$sprk-${varRef}`);
    return refArr.join('');
  }

  return `$sprk-${formatDashCase(varRef)}`;
};

/*
 * Removes curly braces from a string.
 * @param {string} property
 * @return {string}
 */
const removeCurlyBraces = (property) => {
  return property.replace(/[{}]/g, '');
};

/*
 * Takes the value from a JSON token
 * and formats the value to be in Sass syntax.
 * Allows us to preserve the ability for it
 * to be redeclared vs hard-coded.
 * @example replaces "{white.value}"" with "$sprk-white".
 * @param {string} tokenValue
 * @return {string}
 */
const formatValForSass = (tokenValue) => {
  const valueReferences = tokenValue.split(' ');
  // expected: ['0','0', '{gray.value}']
  // Map through array of all properties per value.
  const formattedValue = valueReferences.map((property) => {
    /*
     * Check if the property is a Spark var reference.
     * Expected: '16px' === false, then exit and return value.
     * Expected: '{space.m.value}' === true, then change into Sass Var.
     */
    if (property.includes('{')) {
      // Remove {}.
      const varName = removeCurlyBraces(property);
      // Transform into Spark Sass Var format
      return formatRefForSass(varName);
    }
    // If its not a Spark var reference then just return it
    // to the array as we do not need to change it.
    return property;
  });

  return formattedValue.join(' ');
};

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
        if (tokenValue.includes('{')) {
          // 2px solid {purple.value}
          tokenValue = formatValForSass(tokenValue);
          // Return formatted Sass var with comment.
          return `/// ${token.comment} \n$${tokenName}: ${tokenValue}${
            token.themable ? ' !default' : ''
          };`;
        }

        /*
         * This only runs if the token value does not
         * include any references to other Spark vars.
         * @return value with comment.
         */
        return `/// ${token.comment} \n$${tokenName}: ${token.value}${
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
