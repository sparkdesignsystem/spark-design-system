import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import SprkIcon from '../../../../components/icons/SprkIcon';

/**
 * TODO: Remove this component as part of Issue #3786.
 */

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
              'sprk-c-Icon--stroke-current-color': true,
              'sprk-c-Icon--filled-current-color': true,
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
  children: propTypes.node,
  leadingIcon: propTypes.string,
  textIcon: propTypes.bool,
  narrowWidth: propTypes.bool,
  iconRight: propTypes.bool,
};

export default SprkInputIconCheck;
