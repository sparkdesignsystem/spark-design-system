import React from 'react';
import PropTypes from 'prop-types';

const H4 = (props) => {
  const { children } = props;
  const id = children.replace(/\s+/g, '-').toLowerCase();
  return (
    <h4
      className="docs-b-h4 sprk-b-TypeDisplayFour sprk-u-mbm sprk-u-Measure"
      id={id}
      {...props}
    >
      {children}
    </h4>
  );
};

H4.propTypes = {
  children: PropTypes.string,
};

export default H4;
