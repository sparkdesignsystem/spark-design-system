import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const SprkInputLabel = ({
  id,
  leadingIcon,
  hiddenLabel,
  label,
}) => {
  return (
    <label
      htmlFor={id}
      className={classNames('sprk-b-Label', {
        'sprk-b-Label--with-icon': leadingIcon,
        'sprk-u-ScreenReaderText': hiddenLabel,
      })}
    >
      {label}
    </label>
  );
};

SprkInputLabel.propTypes = {
  label: propTypes.string,
  leadingIcon: propTypes.string,
  id: propTypes.string,
};

export default SprkInputLabel;
