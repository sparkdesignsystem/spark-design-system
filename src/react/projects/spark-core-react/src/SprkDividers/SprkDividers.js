import React from 'react';
import PropTypes from 'prop-types';

const SprkDividers = (props) => {
  const { idString, ...other } = props;
  return (
    <span className="sprk-c-Divider" data-id={idString} {...other}></span>
  );
}

SprkDividers.propTypes = {
  // The string to use for the data-id attribute
  idString: PropTypes.string
};

export default SprkDividers;