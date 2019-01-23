import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkIcon from '../../SprkMasthead';
import SprkButton from '../../../SprkButton/SprkButton';

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
            <a className="sprk-c-MastheadAccordion__summary" href="#nogo">
              <span className="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
                <svg className="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-u-mrs" viewBox="0 0 64 64">
                  <use xlinkHref="#call-team-member"/>
                </svg>
                <SprkIcon iconType="call-team-member" />
                Talk To Us
              </span>
            </a>
          </li>
          <li className="sprk-c-MastheadAccordion__item sprk-o-Box">
            <SprkButton variant="secondary" additionalClasses="sprk-c-Button--compact spark-c-Button--full@sm" />
          </li>
        </ul>
      </nav>
    );
  }
}

SprkMastheadNarrowNav.propTypes = {};

export default SprkMastheadNarrowNav;