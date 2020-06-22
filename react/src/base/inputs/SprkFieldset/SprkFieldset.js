import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkFieldset = (props) => {
  const {
    children,
    idString,
    analyticsString,
    additionalClasses,
    ...other
  } = props;

  return (
    <fieldset
      className={classnames('sprk-b-Fieldset', additionalClasses)}
      data-analytics={analyticsString}
      data-id={idString}
      {...other}
    >
      {children}
    </fieldset>
  );
};

SprkFieldset.propTypes = {
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

export default SprkFieldset;
