import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkIcon from '../../SprkMasthead';
import classNames from 'classnames';

class SprkMastheadNarrowNav extends Component {
  render() {
    const {links, isOpen, ...rest} = this.props;
    return (
      <React.Fragment>
      { isOpen &&
        <nav
          className="sprk-c-Masthead__narrow-nav"
          role="navigation"
          data-id="navigation-narrow-1">
          <ul className="sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare">

            {links.map((link, id) => {
              return (
                <li className="sprk-c-MastheadAccordion__item" key={id}>
                  <a className="sprk-c-MastheadAccordion__summary" href={link.href}>
                      <span className="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
                        {link.text}
                        <svg className="sprk-c-Icon" viewBox="0 0 64 64">
                          <use xlinkHref='#chevron-down'/>
                        </svg>
                      </span>
                  </a>
                  {link.subnav &&
                  <ul className="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details">
                    {link.subnav.map((subnavlink, id) => {
                      return (
                        <li key={id}>
                          <a className="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href={subnavlink.href}>
                            {subnavlink.text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  }
                </li>
              );
            })}
          </ul>
        </nav>}
        </React.Fragment>
      );
  }
}

SprkMastheadNarrowNav.propTypes = {};

export default SprkMastheadNarrowNav;