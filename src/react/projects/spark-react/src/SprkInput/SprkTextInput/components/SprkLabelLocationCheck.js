import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const SprkLabelLocationCheck = ({
  children,
  type,
  label,
  leadingIcon,
  hiddenLabel,
  id,
}) => {
  if (type === 'hugeTextInput') {
    return (
      <>
        {children}
        <label
          htmlFor={id}
          className={classNames('sprk-b-Label', {
            'sprk-b-Label--with-icon': leadingIcon.length > 0,
            'sprk-u-ScreenReaderText': hiddenLabel && type !== "hugeTextInput",
          })}
        >
          {label}
        </label>
      </>
    );
  }
  return (
    <>
      <label
        htmlFor={id}
        className={classNames('sprk-b-Label', {
          'sprk-b-Label--with-icon': leadingIcon.length > 0,
          'sprk-u-ScreenReaderText': hiddenLabel && type !== "hugeTextInput",
        })}
      >
        {label}
      </label>
      {children}
    </>
  );
};

SprkLabelLocationCheck.propTypes = {
  type: propTypes.string,
  label: propTypes.string,
  leadingIcon: propTypes.string,
  id: propTypes.string,
};

export default SprkLabelLocationCheck;
