import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import SprkIcon from '../../SprkIcon/SprkIcon';

const SprkInputIconCheck = ({
  children,
  leadingIcon,
  textIcon,
  narrowWidth,
  iconRight,
}) => {
  if (leadingIcon.length > 0 || textIcon) {
    return (
      <div
        className={classnames({
          'sprk-b-InputContainer__icon-container': true,
          'sprk-b-TextInputIconContainer--has-text-icon': textIcon,
          'sprk-b-InputContainer__icon-container--narrow': narrowWidth,
        })}
      >
        {leadingIcon.length > 0 && (
          <SprkIcon
            iconName={leadingIcon}
            additionalClasses={classnames({
              'sprk-b-InputContainer__icon sprk-c-Icon--m sprk-c-Icon--stroke-current-color': true,
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
