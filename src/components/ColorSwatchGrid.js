import React from 'react';
import PropTypes from 'prop-types';

const SwatchGrid = ({ children, additionalClasses }) => {
  return (
    <div className={['docs-o-ColorSwatchGrid', additionalClasses].join(' ')}>
      {/* // todo convert this to SprkStack */}
      {children}
    </div>
  );
};

SwatchGrid.propTypes = {
  children: PropTypes.node,
  additionalClasses: PropTypes.string,
};

export default SwatchGrid;
