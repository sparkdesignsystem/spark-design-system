import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SprkMastheadLittleNav extends Component {
  render() {
    return (
      <nav role="navigation"
           className="sprk-c-Masthead__little-nav sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--split@xxs sprk-o-Stack--end-row">
        <ul
          className="sprk-c-Masthead__site-links sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack__item--center-column">
          <li>
            <a className="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
              Item 1
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

SprkMastheadLittleNav.propTypes = {};

export default SprkMastheadLittleNav;