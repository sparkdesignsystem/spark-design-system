import React from 'react';
import PropTypes from 'prop-types';

function H2(props) {
  const { children } = props;
  const id = children.replace(/\s+/g, '-').toLowerCase();
  return (
    <h2
      className="docs-b-h2 sprk-b-TypeDisplayTwo sprk-u-mbm sprk-u-Measure"
      id={id}
      {...props}
    >
      {children}
    </h2>
  );
}

H2.propTypes = {
  children: PropTypes.string,
};

export default H2;
