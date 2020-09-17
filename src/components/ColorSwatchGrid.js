import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SwatchGrid = ({ children, additionalClasses }) => {
  return (
    <div className={classnames('docs-o-ColorSwatchGrid', additionalClasses)}>
      {children}
    </div>
  );
};

SwatchGrid.propTypes = {
  children: PropTypes.node,
  additionalClasses: PropTypes.string,
};

export default SwatchGrid;
