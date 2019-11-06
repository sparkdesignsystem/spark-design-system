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
   * The type of element that will be rendered.
   */
  element: PropTypes.oneOf(['span', 'hr']).isRequired,
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This val ue should be unique
   * per page.
   */
  idString: PropTypes.string,
  /** Any additional classes to add to the element */
  additionalClasses: PropTypes.string,
};

export default SprkDivider;
