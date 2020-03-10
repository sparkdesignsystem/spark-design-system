import React from 'react';
import PropTypes from 'prop-types';

function H1(props) {
  const { children } = props;
  const id = children.replace(/\s+/g, '-').toLowerCase();
  return (
    <h1
      className="docs-b-h1 sprk-b-PageTitle sprk-b-TypeDisplayOne sprk-u-mbh sprk-u-Measure"
      id={id}
      {...props}
    >
      {children}
    </h1>
  );
}

H1.propTypes = {
  children: PropTypes.string,
};

export default H1;
