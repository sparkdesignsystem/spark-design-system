import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkIcon from '../../SprkMasthead';

class SprkMastheadNarrowNav extends Component {
  render() {
    return (
      <nav
        className="sprk-c-Masthead__narrow-nav"
        data-sprk-mobile-nav="mobileNav"
        role="navigation"
        data-id="navigation-narrow-1">
        <ul className="sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare">
          <li className="sprk-c-MastheadAccordion__item">
            <a className="sprk-c-MastheadAccordion__summary" href="#">
            <span className="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
              <svg className="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-u-mrs" viewBox="0 0 64 64">
                <use xlink:href="#call-team-member"/>
              </svg>
              <SprkIcon additionalClasses iconType="call-team-member" />
              Talk To Us
            </span>
            </a>
          </li>
          <li className="sprk-c-MastheadAccordion__item sprk-o-Box">
            <a className="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact sprk-c-Button--full@sm"
               href="#nogo">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

SprkMastheadNarrowNav.propTypes = {};

export default SprkMastheadNarrowNav;