import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkHelperText = (props) => {
  const {
    children,
    idString,
    analyticsString,
    additionalClasses,
    id,
    forwardedRef,
    ...other
  } = props;

  return (
    <p
      className={classnames('sprk-b-HelperText', additionalClasses)}
      data-analytics={analyticsString}
      data-id={idString}
      id={id}
      ref={forwardedRef}
      {...other}
    >
      {children}
    </p>
  );
};

SprkHelperText.propTypes = {
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * Assigned to the `id` attribute
   * of the rendered helper text container.
   */
  id: PropTypes.string.isRequired,
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
   * A ref passed in will be attached to the rendered component.
   */
  forwardedRef: PropTypes.oneOfType([PropTypes.shape(), PropTypes.func]),
};

export default SprkHelperText;
