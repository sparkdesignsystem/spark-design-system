/* global document window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadMenuIcon from './components/SprkMastheadMenuIcon/SprkMastheadMenuIcon';
import SprkMastheadLittleNav from './components/SprkMastheadLittleNav/SprkMastheadLittleNav';
import SprkMastheadNarrowNav from './components/SprkMastheadNarrowNav/SprkMastheadNarrowNav';
import SprkMastheadBigNav from './components/SprkMastheadBigNav/SprkMastheadBigNav';
import SprkLink from '../SprkLink/SprkLink';
import { isElementVisible } from '@sparkdesignsystem/spark';

class SprkMasthead extends Component {
  constructor() {
    super();
    this.state = {
      narrowNavOpen: false,
      isScrolled: false,
      isHidden: false,
    };
    this.toggleNarrowNav = this.toggleNarrowNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 10) {
        this.setState({ isScrolled: true });
      } else {
        this.setState({ isScrolled: false });
      }
    });
    window.addEventListener('orientationchange', () => {
      this.setState({ narrowNavOpen: false });
    });

    let isMenuVisible = isElementVisible('.sprk-c-Masthead__menu');
    console.log(isMenuVisible);
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
