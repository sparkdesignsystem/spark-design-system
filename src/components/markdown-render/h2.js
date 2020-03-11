import React from 'react';

function H2(props) {
  const { children } = props;
  const id = children.toString().replace(/\s+/g, '-').toLowerCase();
  return (
    <>
      <span id={id} className="docs-b-Link--anchor" />
      <h2
        className="
          docs-b-h2
          sprk-b-TypeDisplayTwo
          sprk-u-mbm
          sprk-u-Measure
        "
        {...props}
      >
        {children}
      </h2>
    </>
  );
}

export default H2;
