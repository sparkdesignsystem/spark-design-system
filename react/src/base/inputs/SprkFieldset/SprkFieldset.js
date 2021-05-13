import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkFieldset = (props) => {
  const {
    children,
    idString,
    analyticsString,
    additionalClasses,
    ariaDescribedBy,
    ...other
  } = props;

  return (
    <fieldset
      className={classnames('sprk-b-Fieldset', additionalClasses)}
      data-analytics={analyticsString}
      data-id={idString}
      aria-describedby={ariaDescribedBy}
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
  /**
   * Assigned to the `aria-describedby`
   * attribute. Used to create
   * relationships between the
   * component and text that describes it,
   * such as helper text or an error field.
   */
  ariaDescribedBy: PropTypes.string,
};

export default SprkFieldset;
