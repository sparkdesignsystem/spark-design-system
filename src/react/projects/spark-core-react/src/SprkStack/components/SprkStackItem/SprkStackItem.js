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

  const classNames = classnames('sprk-o-Stack__item', additionalClasses);

  return (
    <div className={classNames} data-id={idString} {...other}>
      {children}
    </div>
  );
};

SprkStackItem.defaultProps = {
  idString: '',
  additionalClasses: '',
};

SprkStackItem.propTypes = {
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string,
};

export default SprkStackItem;
