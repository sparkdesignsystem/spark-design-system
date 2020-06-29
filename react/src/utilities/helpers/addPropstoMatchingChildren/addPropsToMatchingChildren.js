import React from 'react';

const addPropsToMatchingChildren = (
  childElements,
  displayNames,
  propsToAssign,
) => {
  const elements = React.Children.toArray(childElements);

  return elements.map((element) => {
    // Assign props to matching grandchildren element
    if (element.props.children) {
      const grandChildren = React.Children.toArray(element.props.children);
      return grandChildren.map((grandchild) => {
        if (displayNames.includes(grandchild.type.displayName)) {
          return React.cloneElement(grandchild, propsToAssign);
        }
        return grandchild;
      });
    }

    // Return elements that match the element, and assign a prop
    if (displayNames.includes(element.type.displayName)) {
      return React.cloneElement(element, propsToAssign);
    }

    // Otherwise, just return it with no changes
    return element;
  });
};

export { addPropsToMatchingChildren as default };
