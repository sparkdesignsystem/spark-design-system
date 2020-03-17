import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkFlagFigure = (props) => {
  const {
    children,
    idString,
    additionalClasses,
    ...other
  } = props;
  return (
    <div
      classname={classnames(
        'sprk-o-Flag__figure',
        additionalClasses
      )}
      data-id={idString}
      {...other}
    >
      {children}
    </div>
  );
};

SprkFlagFigure.propTypes = {
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkFlagFigure;
