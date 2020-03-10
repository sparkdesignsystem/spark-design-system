import React from 'react';
import PropTypes from 'prop-types';

function H3(props) {
  const { children } = props;
  const id = children.replace(/\s+/g, '-').toLowerCase();
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

H3.propTypes = {
  children: PropTypes.string,
};

export default H3;
