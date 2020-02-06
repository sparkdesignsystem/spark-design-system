/* global document window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadMenuIcon from './components/SprkMastheadMenuIcon/SprkMastheadMenuIcon';
import SprkMastheadLittleNav from './components/SprkMastheadLittleNav/SprkMastheadLittleNav';
import SprkMastheadNarrowNav from './components/SprkMastheadNarrowNav/SprkMastheadNarrowNav';
import SprkMastheadBigNav from './components/SprkMastheadBigNav/SprkMastheadBigNav';
import SprkLink from '../../base/links/SprkLink';
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
      currentLayout: false,
      scrollPosition: 0
    };
    this.toggleNarrowNav = this.toggleNarrowNav.bind(this);
    this.toggleScrollEvent = this.toggleScrollEvent.bind(this);
    this.checkScrollDirection = this.checkScrollDirection.bind(this);
    this.throttledCheckScrollDirection = throttle(this.checkScrollDirection, 500);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.checkIfNarrowLayout = this.checkIfNarrowLayout.bind(this);
    this.checkLayoutOnResize = this.checkLayoutOnResize.bind(this);
    this.throttledCheckLayoutOnResize = throttle(this.checkLayoutOnResize, 500);
    this.closeNarrowNavMenu = this.closeNarrowNavMenu.bind(this);
    this.setIsScrolled = this.setIsScrolled.bind(this);
    this.getCurrentLayout = this.getCurrentLayout.bind(this);
    this.isElementVisible = this.isElementVisible.bind(this);
    this.scrollYDirection = this.scrollYDirection.bind(this);
  }

  componentDidMount() {
    this.setState({ isNarrowLayout : this.isElementVisible('.sprk-c-Masthead__menu') });

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.setIsScrolled);
      window.addEventListener('orientationchange', this.closeNarrowNavMenu);
      window.addEventListener('resize', this.throttledCheckLayoutOnResize);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.setIsScrolled, false);
      window.removeEventListener('scroll', this.throttledCheckScrollDirection, false);
      window.removeEventListener('orientationchange', this.closeNarrowNavMenu, false);
      window.addEventListener('resize', this.throttledCheckLayoutOnResize, false);
    }
  }

  isElementVisible (selector) {
    if(typeof window === 'undefined') {return;}
    const element = document.querySelector(selector);
    if (!element) return;
    const elementDisplayValue = window.getComputedStyle(element).display;
    const elementVisibilityValue = window.getComputedStyle(element).visibility;
    const elementIsVisible = elementDisplayValue === 'none' || elementVisibilityValue === 'hidden' ? false : true;
    return elementIsVisible;
  };

  scrollYDirection() {
    if(typeof window === 'undefined') {return;}
    const newScrollPos = window.scrollY;
    if (newScrollPos < 0) return;
    const diff = newScrollPos - this.state.scrollPosition;
    const direction = diff > 0 ? 'down' : 'up';
    this.setState({scrollPosition: newScrollPos});
    return direction;
  };

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
    document.body.classList.remove('sprk-u-Overflow--hidden');
    document.documentElement.classList.remove('sprk-u-Overflow--hidden');
    document.body.classList.remove('sprk-u-Height--100');
    document.documentElement.classList.remove('sprk-u-Height--100');
  }

  setIsScrolled() {
    if(typeof window === 'undefined') {return;}
    if (window.scrollY >= 10) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  getCurrentLayout() {
    this.setState({ currentLayout : this.isElementVisible('.sprk-c-Masthead__menu')});
  }

  checkIfNarrowLayout() {
    if (this.state.isNarrowLayout !== this.state.currentLayout) {
      this.setState({ isNarrowLayout : this.state.currentLayout });
      this.toggleScrollEvent();
      if (!this.state.isNarrowLayout) {
        this.setState({ isHidden : false });
      }
    }
  }

  checkLayoutOnResize() {
    this.getCurrentLayout();
    this.checkIfNarrowLayout();
  }

  toggleMenu() {
    if (this.state.scrollDirection === 'down') {
      this.setState({ isHidden : true });
    } else {
      this.setState({ isHidden : false });
    }
  }

  checkScrollDirection() {
    const newDirection = this.scrollYDirection();
    if (this.state.scrollDirection !== newDirection) {
      this.setState({ scrollDirection : newDirection });
      this.toggleMenu();
    }
  }

  toggleScrollEvent() {
    if(typeof window === 'undefined') {return;}
    if (this.state.isNarrowLayout) {
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
      narrowNavSelectionFunction,
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
            linkSelectionFunction={()=> {
              if(narrowNavSelectionFunction) {
                narrowNavSelectionFunction();
              }
              this.closeNarrowNavMenu()
            }}
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
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * 	Expects an array of link objects,
   *  to be represented in the navigation
   *  of the wide viewport version of the masthead.
   */
  bigNavLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Determines if link renders as an anchor tag, or router link.
       */
      element: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType
      ]),
      /**
       * The text for the big nav item.
       */
      text: PropTypes.string,
      /**
       * Expects an array containing link objects.
       * Will be treated as a subnav to the link.
       */
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * The text for the sub nav item.
           */
          text: PropTypes.string,
          /**
           * Determines if link renders as an anchor tag, or router link.
           */
          element: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
            PropTypes.elementType
          ]),
        }),
      ),
    }),
  ),
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Expects an array of link objects,
   * to be represented in the littleNav
   * area of the wide viewport version of the masthead.
   */
  littleNavLinks: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType
      ]),
      /**
       * The text for the little nav item.
       */
      text: PropTypes.string,
      /**
       * Expects an array containing link objects.
       * Will be treated as a subnav to the link.
       */
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * Determines if link renders as an anchor tag, or router link.
           */
          element: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
            PropTypes.elementType
          ]),
          /**
           * The text for the little sub nav item.
           */
          text: PropTypes.string,
        }),
      ),
    }),
  ),
  /**
   * Expects a function to be executed when a user clicks a navigating link in the narrow nav.
   */
  narrowNavSelectionFunction: PropTypes.func,
  /**
   * Expects an array of link objects,
   * to be represented in the narrow nav
   * element of the masthead component.
   */
  narrowNavLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Determines if link renders as an anchor tag, or router link.
       */
      element: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType
      ]),
      /**
       * The text for the narrow nav item.
       */
      text: PropTypes.string,
      /**
       * Expects an array containing link objects.
       * Will be treated as a subnav to the link.
       */
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * The text for the sub narrow nav item.
           */
          text: PropTypes.string,
          /**
           * Determines if link renders as an anchor tag, or router link.
           */
          element: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
            PropTypes.elementType
          ]),
        }),
      ),
    }),
  ),
  /**
   * Expects a narrowSelector object that
   * represents choices to be supplied to the
   * selector above the narrow navigation of
   * link objects.
   */
  narrowSelector: PropTypes.shape({
    /** The function that runs once a choice is made. */
    choiceFunction: PropTypes.func,
    /**
     * 	Expects a Component to render at the foot of the open selector.
     */
    footer: PropTypes.node,
    /**
     * Object that configures the items inside a narrow selector
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func,
          PropTypes.elementType
        ]),
        /**
         * Additional text providing context for item.
         */
        information: PropTypes.string,
        // TODO: get rid of this -- it does nothing but add a nonvalid "text" attribute on the item
        text: PropTypes.string,
        /**
         * The main headline of the item
         */
        title: PropTypes.string,
        /**
         * The value assigned for the selector
         */
        value: PropTypes.string,
      }),
    ),
  }),
  /**
   * Expects a selector object that
   * represents choices to be supplied
   * to the selector in the wide viewport
   * version of the masthead.
   */
  selector: PropTypes.shape({
    /** The function that runs once a choice is made. */
    choiceFunction: PropTypes.func,
    /**
     * 	Expects a Component to render at the foot of the open selector.
     */
    footer: PropTypes.node,
    /**
     * Object that configures the items inside the selector
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func,
          PropTypes.elementType
        ]),
        /**
         * Additional text providing context for item.
         */
        information: PropTypes.string,
        // TODO: get rid of this -- it does nothing but add a nonvalid "text" attribute on the item
        text: PropTypes.string,
        /**
         * The main headline of the item
         */
        title: PropTypes.string,
        /**
         * The value assigned for the selector
         */
        value: PropTypes.string,
      }),
    ),
  }),
  /**
   * The component to render into the logo area of the masthead.
   */
  siteLogo: PropTypes.node,
  /**
   * Expects an array containing components
   * to render in the utility area of littleNav,
   * in the wide viewport version of the masthead.
  */
  utilityContents: PropTypes.arrayOf(PropTypes.node),
  /** Determines the type of SprkMasthead to render.. */
  variant: PropTypes.oneOf(['default', 'extended']),
  /**
   * The `href` value assigned the logo's link.
   */
  logoLink: PropTypes.string,
  /**
   * Determines if link renders as an anchor tag, or router link.
   */
  logoLinkElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType
  ]),
  /**
   * Expects a component to render in
   * the nav-item area of the Masthead
   * on narrow viewports.
   */
  navLink: PropTypes.node,
};

SprkMasthead.defaultProps = {
  narrowNavSelectionFunction: () => {},
  littleNavLinks: [],
  narrowNavLinks: [],
  bigNavLinks: [],
  utilityContents: [],
  variant: 'default',
  logoLink: '/',
  logoLinkElement: 'a',
};

export default SprkMasthead;
