import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkLegend = (props) => {
  const {
    children,
    idString,
    analyticsString,
    additionalClasses,
    isDisabled,
    ...other
  } = props;

  return (
    <legend
      className={classnames('sprk-b-Legend sprk-b-Label', additionalClasses, {
        'sprk-b-Label--disabled': isDisabled,
      })}
      data-analytics={analyticsString}
      data-id={idString}
      {...other}
    >
      {children}
    </legend>
  );
};

SprkLegend.propTypes = {
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
   * Will render the component in its disabled state.
   */
  isDisabled: PropTypes.bool,
};

export default SprkLegend;
