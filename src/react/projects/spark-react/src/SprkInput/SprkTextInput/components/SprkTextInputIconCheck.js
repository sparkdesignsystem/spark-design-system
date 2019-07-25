import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkIcon from '../../../SprkIcon/SprkIcon';

class SprkTextInputIconCheck extends Component {

  render() {
    const {
      leadingIcon,
      textIcon,
      children
    } = this.props;

    if (leadingIcon.length > 0 || textIcon) {
      return (
        <div
          className={classNames('sprk-b-TextInputIconContainer',{
            'sprk-b-TextInputIconContainer--has-text-icon': textIcon,
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

    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )

  }
}

SprkTextInputIconCheck.propTypes = {
  leadingIcon: PropTypes.string,
  textIcon: PropTypes.bool,
};

SprkTextInputIconCheck.defaultProps = {
  leadingIcon: '',
  textIcon: false,
};

export default SprkTextInputIconCheck;
