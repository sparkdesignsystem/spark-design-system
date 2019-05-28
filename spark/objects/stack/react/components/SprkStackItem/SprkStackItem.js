import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkStackItem = (props) => {
  const {
    children,
    additionalClasses,
    idString,
    ...other
  } = props;

  return (
    <div
      className={classnames('sprk-o-Stack__item', additionalClasses)}
      data-id={idString}
      {...other}
    >
      {children}
    </div>
  );
};

SprkStackItem.defaultProps = {
  children: '',
  idString: '',
  additionalClasses: '',
};

SprkStackItem.propTypes = {
  // The children of the stack item
  children: PropTypes.node,
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string,
};

export default SprkStackItem;
