import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadMenuIcon from './components/SprkMastheadMenuIcon/SprkMastheadMenuIcon';
import SprkMastheadNarrowNav from './components/SprkMastheadNarrowNav/SprkMastheadNarrowNav';
import SprkMastheadLittleNav from './components/SprkMastheadLittleNav/SprkMastheadLittleNav';

class SprkMasthead extends Component {
  render() {
    const { additionalClasses, analyticsString, siteLogo } = this.props;

    return (
      <header className={classNames("sprk-c-Masthead", "sprk-o-Stack", additionalClasses)}
              role="banner"
              data-id={analyticsString}>
        <div className="sprk-c-Masthead__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xxs">
          <div className="sprk-c-Masthead__menu sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
            <button className="sprk-c-Menu" type="button" aria-expanded="false"
                    data-sprk-mobile-nav-trigger="mobileNav">
              <span className="sprk-u-ScreenReaderText">Toggle Navigation</span>
              <SprkMastheadMenuIcon/>
            </button>
          </div>

          <div className="sprk-c-Masthead__branding sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
            <a href="#">
              {siteLogo}
            </a>
          </div>
        </div>
        <SprkMastheadLittleNav/>
        <SprkMastheadNarrowNav/>
      </header>
    );
  }
}

SprkMasthead.propTypes = {};

export default SprkMasthead;