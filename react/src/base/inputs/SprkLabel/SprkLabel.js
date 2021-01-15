import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
    htmlFor,
    ...rest
  } = props;

  return (
    <label
      htmlFor={htmlFor}
      className={classNames('sprk-b-Label', additionalClasses, {
        'sprk-u-ScreenReaderText': isHidden,
        'sprk-b-Label--disabled': isDisabled,
        'sprk-b-Label--with-icon': hasIcon,
        'sprk-b-Label--monetary': isMonetary,
      })}
      data-id={idString}
      data-analytics={analyticsString}
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
  /**
   * If `true`, this will add
   * monetary styles to the label.
   */
  isMonetary: PropTypes.bool,
  /**
   * If `true`, this will add
   * `sprk-u-ScreenReaderText` class
   * to the label.
   */
  isHidden: PropTypes.bool,
  /**
   * If `true`, this will add
   * disabled styles to the label.
   */
  isDisabled: PropTypes.bool,
  /**
   * If `true`, this will add
   * styles to the label to make it work
   * with an icon.
   */
  hasIcon: PropTypes.bool,
  /**
   * Assigned to the `for` attribute of the label that will connect
   * relationships between the label and input.
   */
  htmlFor: PropTypes.string,
};

export default SprkLabel;
