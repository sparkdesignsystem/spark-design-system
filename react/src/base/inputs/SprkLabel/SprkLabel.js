import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const SprkLabel = (props) => {
  const {
    children,
    additionalClasses,
    hasIcon,
    isMonetary,
    isHidden,
    idString,
    analyticsString,
    isDisabled,
    variant,
    id,
    ...rest
  } = props;

  return (
    <label
      htmlFor={id}
      className={classNames('sprk-b-Label', additionalClasses, {
        'sprk-u-ScreenReaderText': isHidden,
        'sprk-b-Label--disabled': isDisabled,
      })}
      {...rest}
    >
      {children}
    </label>
  );
};

SprkLabel.propTypes = {
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkLabel;
