import React from 'react';
import PropTypes from 'prop-types';

const SprkListItem = (props) => {
  const { children, additionalClasses, idString, ...other } = props;

  return (
    <li className={additionalClasses} data-id={idString} {...other}>
      {children}
    </li>
  );
};

SprkListItem.defaultProps = {
  idString: undefined,
  additionalClasses: undefined,
  children: undefined,
};

SprkListItem.propTypes = {
  // The children that will be rendered inside the list
  children: PropTypes.node,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkListItem;
