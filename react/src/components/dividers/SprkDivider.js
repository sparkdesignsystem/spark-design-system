import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkDivider = (props) => {
  const { element, additionalClasses, idString, ...other } = props;
  const classNames = classnames('sprk-c-Divider', additionalClasses);
  const TagName = element;
  return <TagName className={classNames} data-id={idString} {...other} />;
};

SprkDivider.defaultProps = {
  idString: undefined,
  additionalClasses: undefined,
};

SprkDivider.propTypes = {
  /**
   * Determines if link renders as a `<span>` or `<hr>`.
   */
  element: PropTypes.oneOf(['span', 'hr']).isRequired,
  /**
   * Value assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * Divider.
   */
  additionalClasses: PropTypes.string,
};

export default SprkDivider;
