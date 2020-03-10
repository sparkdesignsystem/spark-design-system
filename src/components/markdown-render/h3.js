import React from 'react';

function H3(props) {
  const { children } = props;
  const id = children.toString().replace(/\s+/g, '-').toLowerCase();
  return (
    <h3
      className="docs-b-h3 sprk-b-TypeDisplayThree sprk-u-mbm sprk-u-Measure"
      id={id}
      {...props}
    >
      {children}
    </h3>
  );
}

export default H3;
