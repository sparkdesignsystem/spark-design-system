import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkIcon from '../SprkIcon/SprkIcon';

class SprkDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggerText: props.defaultTriggerText,
      isOpen: false
    };
    this.toggleDropdownOpen = this.toggleDropdownOpen.bind(this);
  }

  toggleDropdownOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const {iconType, defaultTriggerText, variant} = this.props;
    const { triggerText, isOpen } = this.state;
    return (
      <React.Fragment>
        <a className={classNames(
          "sprk-b-Link",
          "sprk-b-Link--plain",
          {"sprk-u-mrs": variant === 'informational'}
        )} href="#nogo" aria-haspopup="true" role="combobox" onClick={this.toggleDropdownOpen}>
          { variant === 'informational' &&
            <React.Fragment>
              <span data-sprk-dropdown-trigger-text-container="" role="combobox">{triggerText}</span>
              <SprkIcon additionalClasses="sprk-c-Icon--stroke-current-color sprk-u-mls" iconType="chevron-down" />
            </React.Fragment>
          }
          { variant === 'base' &&
            <SprkIcon iconType={iconType} />
          }
        </a>
        {isOpen &&
          <div className="sprk-c-Dropdown">
            <div className="sprk-c-Dropdown__header">
              <h2 className="sprk-c-Dropdown__title">My Choices</h2>
            </div>
            <ul className="sprk-c-Dropdown__links">
              <li className="sprk-c-Dropdown__item" role="option">
                <a className="sprk-c-Dropdown__link" href="#nogo">
                  Choice 1
                </a>
              </li>
              <li className="sprk-c-Dropdown__item" role="option">
                <a className="sprk-c-Dropdown__link" href="#nogo">
                  Choice 2
                </a>
              </li>
            </ul>
          </div>
        }
      </React.Fragment>
    );
  }
}

SprkDropdown.propTypes = {};

SprkDropdown.defaultProps = {
  variant: 'base'
};

export default SprkDropdown;