import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function SprkSpinner({
  size,
  lightness,
  variant,
  additionalClasses,
  altText,
  role,
  ...rest
}) {
  return (
    <div
      role={role}
      aria-valuetext={altText}
      className={classnames(
        'sprk-c-Spinner',
        'sprk-c-Spinner--circle',
        { 'sprk-c-Spinner--large': size === 'large' },
        // TODO: Deprecate lightness in the next release.
        { 'sprk-c-Spinner--dark': lightness === 'dark' || variant === 'dark' },
        { 'sprk-c-Spinner--primary': variant === 'primary' },
        { 'sprk-c-Spinner--secondary': variant === 'secondary' },
        additionalClasses,
      )}
      {...rest}
    />
  );
}

SprkSpinner.propTypes = {
  /**
   * Determines size of spinner.
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   *  Determines the corresponding spinner style.
   */
  variant: PropTypes.oneOf(['dark', 'primary', 'secondary']),
  /**
   * Determines shade of spinner.
   */
  lightness: PropTypes.oneOf(['light', 'dark']),
  /**
   * A space-separated string of classes to add to
   * the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Assigned to the `role` attribute serving as
   * additional accessibility context for screen readers.
   */
  role: PropTypes.string,
  /**
   * Assigned to the `aria-valuetext` attribute serving as
   * additional context for screen readers.
   */
  altText: PropTypes.string,
};

SprkSpinner.defaultProps = {
  size: 'small',
  lightness: 'light',
  altText: 'Loading',
  role: 'progressbar',
};

export default SprkSpinner;
