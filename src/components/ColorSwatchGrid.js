import React from 'react';
import PropTypes from 'prop-types';

const SwatchGrid = ({ children }) => {
  return <div>{children}</div>;
};

SwatchGrid.propTypes = {
  children: PropTypes.node,
};

export default SwatchGrid;
