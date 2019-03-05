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

<<<<<<< HEAD
  return (
    <div className={classnames('sprk-o-Stack__item', additionalClasses)} data-id={idString} {...other}>
=======
  const classNames = classnames('sprk-o-Stack__item', additionalClasses);

  return (
    <div className={classNames} data-id={idString} {...other}>
>>>>>>> write stack component and tests
      {children}
    </div>
  );
};

SprkStackItem.defaultProps = {
<<<<<<< HEAD
  children: '',
=======
>>>>>>> write stack component and tests
  idString: '',
  additionalClasses: '',
};

SprkStackItem.propTypes = {
<<<<<<< HEAD
  // The children of the stack item
  children: PropTypes.node,
=======
>>>>>>> write stack component and tests
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string,
};

export default SprkStackItem;
