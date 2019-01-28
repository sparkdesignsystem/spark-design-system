import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkDropdown from '../../../SprkDropdown/SprkDropdown';

class SprkMastheadBigNav extends Component {
  render() {
    const {links} = this.props
    return (
      <React.Fragment>
        <div className="sprk-o-Stack__item">
          <nav className="sprk-c-Masthead__big-nav" role="navigation">
            <ul
              className="sprk-c-Masthead__big-nav-items sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--center-row sprk-o-Stack--split@xxs sprk-b-List sprk-b-List--bare"
              data-sprk-navigation="big">
              <li className="sprk-c-Masthead__big-nav-item sprk-o-Stack__item sprk-c-Masthead__big-nav-item--active">
                <SprkDropdown
                  defaultTriggerText="Navigation Item"
                  additionalClasses="sprk-u-TextAlign--left"
                  additionalTriggerClasses="sprk-c-Masthead__link sprk-c-Masthead__link--big-nav"
                />
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

SprkMastheadBigNav.propTypes = {};

export default SprkMastheadBigNav;
