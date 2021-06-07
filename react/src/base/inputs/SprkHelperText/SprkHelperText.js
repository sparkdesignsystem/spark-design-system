import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';

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
  const internalId = id || uniqueId('sprk-helper-text-');

  return (
    <div
      className={classnames('sprk-b-HelperText', additionalClasses)}
      data-analytics={analyticsString}
      data-id={idString}
      id={internalId}
      ref={forwardedRef}
      {...other}
    >
      {children}
    </div>
  );
};

SprkHelperText.propTypes = {
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * Assigned to the `id` attribute
   * of the rendered helper text container.
   * A custom ID will
   * be added if this is not supplied.
   */
  id: PropTypes.string,
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
