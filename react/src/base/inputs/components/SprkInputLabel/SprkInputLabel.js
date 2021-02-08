import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

/**
 * TODO: Remove this component as part of Issue #3789.
 */

const SprkInputLabel = ({ id, hiddenLabel, label, disabled }) => (
  <label
    htmlFor={id}
    className={classNames('sprk-b-Label', {
      'sprk-u-ScreenReaderText': hiddenLabel,
      'sprk-b-Label--disabled': disabled,
    })}
  >
    {label}
  </label>
);

SprkInputLabel.propTypes = {
  disabled: propTypes.bool,
  hiddenLabel: propTypes.bool,
  label: propTypes.string,
  id: propTypes.string,
};

export default SprkInputLabel;
