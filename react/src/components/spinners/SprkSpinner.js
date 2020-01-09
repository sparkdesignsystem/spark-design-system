import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function SprkSpinner({ size, lightness, additionalClasses, ...rest }) {
  return (
    <div
      className={classnames(
        'sprk-c-Spinner',
        'sprk-c-Spinner--circle',
        { 'sprk-c-Spinner--large': size === 'large' },
        { 'sprk-c-Spinner--dark': lightness === 'dark' },
        additionalClasses,
      )}
      {...rest}
    />
  );
}

SprkSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  lightness: PropTypes.oneOf(['light', 'dark']),
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
};

SprkSpinner.defaultProps = {
  size: 'small',
  lightness: 'light',
};

export default SprkSpinner;
