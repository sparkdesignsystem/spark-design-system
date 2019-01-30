import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadMenuIcon from './components/SprkMastheadMenuIcon/SprkMastheadMenuIcon';
import SprkMastheadLittleNav from './components/SprkMastheadLittleNav/SprkMastheadLittleNav';
import SprkMastheadNarrowNav from './components/SprkMastheadNarrowNav/SprkMastheadNarrowNav';
import SprkMastheadBigNav from './components/SprkMastheadBigNav/SprkMastheadBigNav';

class SprkMasthead extends Component {
  constructor(){
    super();
    this.state = {
      narrowNavOpen: false,
      isScrolled: false
    };
    this.toggleNarrowNav = this.toggleNarrowNav.bind(this);
  }

  toggleNarrowNav() {
    document.body.classList.toggle('sprk-u-Overflow--hidden');
    // Don't add height: 100% if site's html & body el already have it (reapplying makes page jump)
    document.documentElement.classList.toggle('sprk-u-Overflow--hidden');
    if (document.documentElement.style.height !== '100%') {
      document.documentElement.classList.add('sprk-u-Height--100');
    }
    if (document.body.style.height !== '100%') {
      document.body.classList.add('sprk-u-Height--100');
    }

    this.setState(prevState => ({
      narrowNavOpen: !prevState.narrowNavOpen
    }));
  }

  componentDidMount(){
    window.addEventListener('scroll', (event) => {
      window.scrollY >= 10 ? this.setState({isScrolled: true}) : this.setState({isScrolled: false});
    });
    window.addEventListener('orientationchange', () => {
      this.setState({narrowNavOpen: false});
    });
  }

 render() {
    const {
      additionalClasses,
      analyticsString,
      idString,
      bigNavLinks,
      littleNavLinks,
      selector,
      narrowNavLinks,
      narrowSelector,
      selectorChoiceFunction,
      siteLogo,
      utilityContents,
      variant
    } = this.props;
    const { narrowNavOpen } = this.state;

    return (
      <header className={classNames(
        "sprk-c-Masthead",
        "sprk-o-Stack",
        {"sprk-c-Masthead--scroll": this.state.isScrolled},
        additionalClasses)}
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

          <SprkMastheadLittleNav
            selector={selector}
            spacing={variant=== 'extended' ? 'medium' : 'large'}
            links={littleNavLinks}
            utilityContents={utilityContents} />

        </div>
        <SprkMastheadBigNav links={bigNavLinks} />
        <SprkMastheadNarrowNav selector={narrowSelector} links={narrowNavLinks} isOpen={narrowNavOpen} />
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
};

SprkMasthead.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  idString: '',
  littleNavLinks: [],
  narrowNavLinks: [],
  siteLogo: {},
  utilityContents: '',
  variant: 'default'
};

export default SprkMasthead;