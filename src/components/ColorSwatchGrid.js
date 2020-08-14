import React from 'react';
import PropTypes from 'prop-types';
import withColorData from '../util/withColorData';

const SwatchGrid = ({ children }) => {
  return <div>{children}</div>;
};

const ColorSwatchGrid = () => {
  return withColorData(SwatchGrid);
};

SwatchGrid.propTypes = {
  children: PropTypes.node,
};
export default ColorSwatchGrid;
