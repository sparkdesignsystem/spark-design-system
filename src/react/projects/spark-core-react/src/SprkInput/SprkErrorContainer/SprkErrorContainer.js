import React from 'react';
import PropTypes from 'prop-types';
import SprkIcon from '../../SprkIcon/SprkIcon';

const SprkErrorContainer = ({ message, id }) => (
  <div className="sprk-b-ErrorContainer" id={id}>
    <SprkIcon
      additionalClasses="sprk-c-Icon--m sprk-b-ErrorIcon"
      iconName="exclamation-filled-small"
    />
    <div className="sprk-b-ErrorText">{message}</div>
  </div>
);

SprkErrorContainer.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string,
};

SprkErrorContainer.defaultProps = {
  message: 'This is an error in this field.',
};

export default SprkErrorContainer;
