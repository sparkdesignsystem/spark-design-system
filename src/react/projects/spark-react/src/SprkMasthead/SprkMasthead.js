/* global document window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadMenuIcon from './components/SprkMastheadMenuIcon/SprkMastheadMenuIcon';
import SprkMastheadLittleNav from './components/SprkMastheadLittleNav/SprkMastheadLittleNav';
import SprkMastheadNarrowNav from './components/SprkMastheadNarrowNav/SprkMastheadNarrowNav';
import SprkMastheadBigNav from './components/SprkMastheadBigNav/SprkMastheadBigNav';
import SprkLink from '../SprkLink/SprkLink';
import { isElementVisible, scrollYDirection } from '@sparkdesignsystem/spark';
import throttle from 'lodash/throttle';

class SprkMasthead extends Component {
  constructor() {
    super();
    this.state = {
      narrowNavOpen: false,
      isScrolled: false,
      isHidden: false,
      isNarrowLayout: false,
      scrollDirection: 'up',
    };
    this.toggleNarrowNav = this.toggleNarrowNav.bind(this);
    this.toggleScrollEvent = this.toggleScrollEvent.bind(this);
    this.checkScrollDirection = this.checkScrollDirection.bind(this);
    this.throttledCheckScrollDirection = throttle(this.checkScrollDirection, 500);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.checkIfNarrowLayout = this.checkIfNarrowLayout.bind(this);
    this.throttledCheckIfNarrowLayout = throttle(this.checkIfNarrowLayout, 500);
    this.closeNarrowNavMenu = this.closeNarrowNavMenu.bind(this);
    this.setIsScrolled = this.setIsScrolled.bind(this);
  }

  componentDidMount() {
    this.setState({ isNarrowLayout : isElementVisible('.sprk-c-Masthead__menu') });

    window.addEventListener('scroll', this.setIsScrolled);
    window.addEventListener('orientationchange', this.closeNarrowNavMenu);
    window.addEventListener('resize', this.throttledCheckIfNarrowLayout);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setIsScrolled, false);
    window.removeEventListener('scroll', this.throttledCheckScrollDirection, false);
    window.removeEventListener('orientationchange', this.closeNarrowNavMenu, false);
    window.removeEventListener('resize', this.throttledCheckIfNarrowLayout, false);
  }

  toggleNarrowNav() {
    document.body.classList.toggle('sprk-u-Overflow--hidden');
    document.documentElement.classList.toggle('sprk-u-Overflow--hidden');

    this.setState(prevState => ({
      narrowNavOpen: !prevState.narrowNavOpen,
    }));

    // Don't add height: 100% if site's html & body el already have it (reapplying makes page jump)
    if (document.documentElement.style.height !== '100%') {
      document.documentElement.classList.toggle('sprk-u-Height--100');
    }
    if (document.body.style.height !== '100%') {
      document.body.classList.toggle('sprk-u-Height--100');
    }
  }

  closeNarrowNavMenu() {
    this.setState({ narrowNavOpen: false });
  }

  setIsScrolled() {
    if (window.scrollY >= 10) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  checkIfNarrowLayout() {
    const newMenuVisibility = isElementVisible('.sprk-c-Masthead__menu');
    if (this.state.isNarrowLayout !== newMenuVisibility) {
      this.setState({ isNarrowLayout : newMenuVisibility });
      this.toggleScrollEvent();
      if(!this.state.isNarrowLayout) {
        this.setState({ isHidden : false });
      }
    }
  }

  toggleMenu() {
    if(this.state.scrollDirection === 'down') {
      this.setState({ isHidden : true });
    } else {
      this.setState({ isHidden : false });
    }
  }

  checkScrollDirection() {
    const newDirection = scrollYDirection();
    if(this.state.scrollDirection !== newDirection) {
      this.setState({ scrollDirection : newDirection });
      this.toggleMenu();
    }
  }

  toggleScrollEvent() {
    if(this.state.isNarrowLayout) {
      window.addEventListener('scroll', this.throttledCheckScrollDirection);
    } else {
      window.removeEventListener('scroll', this.throttledCheckScrollDirection, false);
    }
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      bigNavLinks,
      idString,
      littleNavLinks,
      narrowNavLinks,
      narrowSelector,
      siteLogo,
      selector,
      utilityContents,
      variant,
      logoLink,
      logoLinkElement,
      navLink,
    } = this.props;
    const { isScrolled, narrowNavOpen, isHidden } = this.state;

    // On render check whether to add the scroll event
    this.toggleScrollEvent();
    return (
      <header
        className={classNames(
          'sprk-c-Masthead',
          'sprk-o-Stack',
          { 'sprk-c-Masthead--open': narrowNavOpen },
          { 'sprk-c-Masthead--scroll': isScrolled },
          { 'sprk-c-Masthead--hidden': isHidden },
          additionalClasses,
        )}
        role="banner"
        data-analytics={analyticsString}
        data-id={idString}
      >
        <div className="sprk-c-Masthead__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xxs">
          <SprkMastheadMenuIcon
            toggleNarrowNav={this.toggleNarrowNav}
            isOpen={narrowNavOpen}
          />

          <div className="sprk-c-Masthead__branding sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
            {logoLinkElement !== 'a' ? (
              <SprkLink
                variant="unstyled"
                to={logoLink}
                element={logoLinkElement}
              >
                {siteLogo}
              </SprkLink>
            ) : (
              <SprkLink
                variant="unstyled"
                href={logoLink}
                element={logoLinkElement}
              >
                {siteLogo}
              </SprkLink>
            )}
          </div>

          <div className="sprk-c-Masthead__nav-item sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
            {navLink}
          </div>

          {(littleNavLinks.length > 0 || utilityContents.length > 0) && (
            <SprkMastheadLittleNav
              selector={selector}
              spacing={variant === 'extended' ? 'medium' : 'large'}
              links={littleNavLinks}
              utilityContents={utilityContents}
            />
          )}
        </div>
        {bigNavLinks.length > 0 && <SprkMastheadBigNav links={bigNavLinks} />}
        {narrowNavLinks.length > 0 && (
          <SprkMastheadNarrowNav
            selector={narrowSelector}
            links={narrowNavLinks}
            isOpen={narrowNavOpen}
          />
        )}
      </header>
    );
  }
}

SprkMasthead.propTypes = {
  // classes to be added to the masthead
  additionalClasses: PropTypes.string,
  // assigned to data-analytics
  analyticsString: PropTypes.string,
  // array of link objects to use in building the big nav
  bigNavLinks: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      text: PropTypes.string,
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        }),
      ),
    }),
  ),
  // assigned to data-id
  idString: PropTypes.string,
  // array of link objects to use in building the little nav
  littleNavLinks: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      text: PropTypes.string,
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
          text: PropTypes.string,
        }),
      ),
    }),
  ),
  // array of link objects to use in building the narrow nav
  narrowNavLinks: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      text: PropTypes.string,
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        }),
      ),
    }),
  ),
  // object containing an array of objects to use in building the narrow selector
  narrowSelector: PropTypes.shape({
    choiceFunction: PropTypes.func,
    footer: PropTypes.node,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        information: PropTypes.string,
        text: PropTypes.string,
        title: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
  }),
  // object containing an array of objects to use in building the selector
  selector: PropTypes.shape({
    choiceFunction: PropTypes.func,
    footer: PropTypes.node,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        information: PropTypes.string,
        text: PropTypes.string,
        title: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
  }),
  // expects a component to render the logo
  siteLogo: PropTypes.node,
  // an array containing components to render into the utility area
  utilityContents: PropTypes.arrayOf(PropTypes.node),
  // the variant name to render
  variant: PropTypes.oneOf(['default', 'extended']),
  // the href to render for the logo link
  logoLink: PropTypes.string,
  // the element link element to render for the logo
  logoLinkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // expects a component to render the nav link
  navLink: PropTypes.node,
};

SprkMasthead.defaultProps = {
  littleNavLinks: [],
  narrowNavLinks: [],
  bigNavLinks: [],
  utilityContents: [],
  variant: 'default',
  logoLink: '/',
  logoLinkElement: 'a',
};

export default SprkMasthead;
