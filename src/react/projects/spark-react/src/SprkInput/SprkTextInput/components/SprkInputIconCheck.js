import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import SprkIcon from '../../../SprkIcon/SprkIcon';

const SprkInputIconCheck = ({
  children,
  leadingIcon,
  textIcon,
  textIconRight,
}) => {
  if (leadingIcon.length > 0 || textIcon) {
    return (
      <div
        className={classnames({
          'sprk-b-TextInputIconContainer': true,
          'sprk-b-TextInputIconContainer--has-text-icon': textIcon,
          'sprk-b-TextInputIconContainer--has-text-icon-right': textIconRight,
        })}
      >
        {leadingIcon.length > 0 && (
          <SprkIcon
            iconName={leadingIcon}
            additionalClasses="
              sprk-c-Icon--m sprk-c-Icon--stroke-current-color
            "
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
};

export default SprkInputIconCheck;
