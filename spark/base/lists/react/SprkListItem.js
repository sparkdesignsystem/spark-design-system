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
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string,
};

export default SprkListItem;
