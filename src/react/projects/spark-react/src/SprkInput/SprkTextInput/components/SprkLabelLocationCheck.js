import React from 'react';
import propTypes from 'prop-types';
import SprkInputLabel from './SprkInputLabel'

const SprkLabelLocationCheck = ({
  children,
  type,
  label,
  leadingIcon,
  hiddenLabel,
  id,
}) => {
  if (type === 'hugeTextInput' || type === 'hugeSelect') {
    return (
      <>
        {children}
        <SprkInputLabel
          id={id}
          leadingIcon={leadingIcon}
          hiddenLabel={hiddenLabel}
          label={label}
        />
      </>
    );
  }
  return (
    <>
      <SprkInputLabel
        id={id}
        leadingIcon={leadingIcon}
        hiddenLabel={hiddenLabel}
        label={label}
      />
      {children}
    </>
  );
};

SprkLabelLocationCheck.propTypes = {
  type: propTypes.string,
  label: propTypes.string,
  leadingIcon: propTypes.string,
  id: propTypes.string,
  hiddenLabel: propTypes.bool,
};

export default SprkLabelLocationCheck;
