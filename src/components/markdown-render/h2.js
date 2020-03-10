import React from 'react';

function H2(props) {
  const { children } = props;
  const id = children.toString().replace(/\s+/g, '-').toLowerCase();
  return (
    <h2
      className="docs-b-h2 sprk-b-TypeDisplayTwo sprk-u-mbm sprk-u-Measure docs-b-Link--anchor"
      id={id}
      {...props}
    >
      {children}
    </h2>
  );
}

export default H2;
