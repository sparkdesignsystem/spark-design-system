import React from 'react';

const addPropsToMatchingComponents = (elements, displayNames, props) => {
  let key = 0;
  if (elements.map) {
    return elements.map((element) => {
      if (displayNames.includes(element.type.displayName)) {
        key += 1;
        return React.cloneElement(element, { key, ...props });
      }
      key += 1;
      return React.cloneElement(element, { key });
    });
  }

  return elements;
};

export { addPropsToMatchingComponents as default };
