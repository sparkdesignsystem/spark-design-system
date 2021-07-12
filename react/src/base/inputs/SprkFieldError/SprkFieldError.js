import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SprkFieldError = (props) => {
  const {
    children,
    additionalClasses,
    idString,
    analyticsString,
    id,
    forwardedRef,
    ...rest
  } = props;

  return (
    <div
      className={classNames('sprk-b-ErrorContainer', additionalClasses)}
      data-analytics={analyticsString}
      data-id={idString}
      id={id}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </div>
  );
};

SprkFieldError.propTypes = {
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * Assigned to the `id` attribute
   * of the rendered component.
   */
  id: PropTypes.string.isRequired,
  /**
   * A space-separated string of
   * classes to add to the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics`
   * attribute serving as a unique
   * selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A ref passed in will be attached to the rendered component.
   */
  forwardedRef: PropTypes.oneOfType([PropTypes.shape(), PropTypes.func]),
};

export default SprkFieldError;
