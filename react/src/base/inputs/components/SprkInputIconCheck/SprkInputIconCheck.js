import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import SprkIcon from '../../../../components/icons/SprkIcon';

const SprkInputIconCheck = ({
  children,
  leadingIcon,
  textIcon,
  narrowWidth,
  iconRight,
}) => {
  if (leadingIcon || textIcon) {
    return (
      <div
        className={classnames({
          'sprk-b-InputContainer__icon-container': true,
          'sprk-b-TextInputIconContainer--has-text-icon': textIcon,
          'sprk-b-InputContainer__icon-container--narrow': narrowWidth,
        })}
      >
        {leadingIcon && (
          <SprkIcon
            iconName={leadingIcon}
            additionalClasses={classnames({
              'sprk-b-InputContainer__icon': true,
              'sprk-c-Icon--stroke-current-color sprk-c-Icon--filled-current-color': true,
              'sprk-b-InputContainer__icon--right': iconRight,
            })}
          />
        )}
        {children}
      </div>
    );
  }
  return <>{children}</>;
};

SprkInputIconCheck.propTypes = {
  leadingIcon: propTypes.string,
  textIcon: propTypes.bool,
  narrowWidth: propTypes.bool,
  iconRight: propTypes.bool,
};

export default SprkInputIconCheck;
