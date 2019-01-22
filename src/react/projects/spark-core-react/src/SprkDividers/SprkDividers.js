import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkDividers = (props) => {
  const { additionalClasses, idString, ...other } = props;
  const classNames = classnames(
    'sprk-c-Divider',
    additionalClasses
  )
  return (
    <span className={classNames} data-id={idString} {...other}></span>
  );
}

SprkDividers.propTypes = {
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the element
  additionalClasses: PropTypes.string
};

export default SprkDividers;