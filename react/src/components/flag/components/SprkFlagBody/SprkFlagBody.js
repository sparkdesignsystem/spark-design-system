import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkFlagBody = (props) => {
  const {
    children,
    idString,
    additionalClasses,
    ...other
  } = props;
  return (
    <div
      className={classnames(
        'sprk-o-Flag__body',
        additionalClasses
      )}
      {...other}
      data-id={idString}
    >
      {children}
    </div>
  );
};

SprkFlagBody.propTypes = {
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkFlagBody;
