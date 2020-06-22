import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkCheckboxGroup = (props) => {
  const {
    children,
    variant,
    idString,
    additionalClasses,
    analyticsString,
  } = props;

  return (
    <div
      className={classnames('sprk-b-InputContainer', additionalClasses, {
        'sprk-b-InputContainer--huge': variant === 'huge',
      })}
      data-analytics={analyticsString}
      data-id={idString}
    >
      {children}
    </div>
  );
};

SprkCheckboxGroup.propTypes = {
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * Determines the style of checkbox.
   * Supplying no value will cause the default styles to be used.
   */
  variant: PropTypes.oneOf(['huge']),
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

export default SprkCheckboxGroup;
