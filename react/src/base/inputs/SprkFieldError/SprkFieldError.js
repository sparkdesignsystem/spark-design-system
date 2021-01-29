import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

const SprkFieldError = (props) => {
  const {
    children,
    additionalClasses,
    idString,
    analyticsString,
    id,
    ...rest
  } = props;

  return (
    <div
      className={classNames('sprk-b-ErrorContainer', additionalClasses)}
      data-analytics={analyticsString}
      data-id={idString}
      id={id}
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
   * of the rendered input element.
   * A custom ID will
   * be added if this is not supplied.
   */
  id: PropTypes.string,
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
};

SprkFieldError.defaultProps = {
  id: uniqueId('sprk-'),
};

export default SprkFieldError;
