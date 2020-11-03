import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkDivider = (props) => {
  const { element, additionalClasses, idString, ...other } = props;
  const classNames = classnames('sprk-c-Divider', additionalClasses);
  const TagName = element;
  return <TagName className={classNames} data-id={idString} {...other} />;
};

SprkDivider.propTypes = {
  /**
   * Determines if link renders as a `<span>` or `<hr>`.
   */
  element: PropTypes.oneOf(['span', 'hr']).isRequired,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the
   * outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkDivider;
