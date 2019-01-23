import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadMenuIcon from './components/SprkMastheadMenuIcon/SprkMastheadMenuIcon';
import SprkMastheadLittleNav from './components/SprkMastheadLittleNav/SprkMastheadLittleNav';
import SprkMastheadUtilitySection from './components/SprkMastheadUtilitySection/SprkMastheadUtilitySection';

class SprkMasthead extends Component {
  render() {
    const { additionalClasses, analyticsString, idString, siteLogo } = this.props;

    return (
      <header className={classNames("sprk-c-Masthead", "sprk-o-Stack", additionalClasses)}
              role="banner"
              data-id={idString}>
        <div className="sprk-c-Masthead__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xxs">
          <SprkMastheadMenuIcon/>

          <div className="sprk-c-Masthead__branding sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
            <a href="#">
              {siteLogo}
            </a>
          </div>

          <SprkMastheadLittleNav/>
          <SprkMastheadUtilitySection/>
        </div>
      </header>
    );
  }
}

SprkMasthead.propTypes = {};

export default SprkMasthead;