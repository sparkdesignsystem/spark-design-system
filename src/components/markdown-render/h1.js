import React from 'react';

function H1(props) {
  const { children } = props;
  const id = children.toString().replace(/\s+/g, '-').toLowerCase();
  return (
    <h1
      className="docs-b-h1 sprk-b-PageTitle sprk-b-TypeDisplayOne sprk-u-mbh sprk-u-Measure docs-b-Link--anchor"
      id={id}
      {...props}
    >
      {children}
    </h1>
  );
}

export default H1;
