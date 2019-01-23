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

          <li>
            <a className="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
              Item 2
            </a>
          </li>
        </ul>

        <ul
          className="sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack--center-column">
          <li>
            <a className="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="tel:555-555-5555">
              (555) 555-5555
            </a>
          </li>

          <li>
            <a className="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href="#nogo">
              Talk To Us
            </a>
          </li>

          <li>
            <a className="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact" href="#nogo">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

SprkMastheadLittleNav.propTypes = {};

export default SprkMastheadLittleNav;