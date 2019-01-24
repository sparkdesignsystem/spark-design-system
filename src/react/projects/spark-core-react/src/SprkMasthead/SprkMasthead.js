import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadMenuIcon from './components/SprkMastheadMenuIcon/SprkMastheadMenuIcon';
import SprkMastheadLittleNav from './components/SprkMastheadLittleNav/SprkMastheadLittleNav';
import SprkMastheadNarrowNav from './components/SprkMastheadNarrowNav/SprkMastheadNarrowNav';

class SprkMasthead extends Component {
  constructor(){
    super();
    this.state = { narrowNavOpen: false };
    this.toggleNarrowNav = this.toggleNarrowNav.bind(this);
  }

  toggleNarrowNav() {
    this.setState(prevState => ({
      narrowNavOpen: !prevState.narrowNavOpen
    }));
  }

  render() {
    const { additionalClasses, analyticsString, idString, littleNavLinks, narrowNavLinks, siteLogo, utilityContents } = this.props;
    const { narrowNavOpen } = this.state;

    return (
      <header className={classNames("sprk-c-Masthead", "sprk-o-Stack", additionalClasses)}
              role="banner"
              data-analytics={analyticsString}
              data-id={idString}>
        <div className="sprk-c-Masthead__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xxs">
          <SprkMastheadMenuIcon toggleNarrowNav={this.toggleNarrowNav} isOpen={narrowNavOpen} />

          <div className="sprk-c-Masthead__branding sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
            <a href="/">
              {siteLogo}
            </a>
          </div>

          <SprkMastheadLittleNav links={littleNavLinks} utilityContents={utilityContents} />

        </div>
        <SprkMastheadNarrowNav links={narrowNavLinks} isOpen={narrowNavOpen} />
      </header>
    );
  }
}

SprkMasthead.propTypes = {
  additionalClasses: PropTypes.string,
  analyticsString: PropTypes.string,
  idString: PropTypes.string,
  littleNavLinks: PropTypes.array,
  narrowNavLinks: PropTypes.array,
  siteLogo: PropTypes.node,
};

SprkMasthead.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  idString: '',
  littleNavLinks: [],
  narrowNavLinks: [],
  siteLogo: {},
  utilityContents: ''
};

export default SprkMasthead;