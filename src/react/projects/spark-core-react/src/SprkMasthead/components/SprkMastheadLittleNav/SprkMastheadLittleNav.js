import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadDropdown from '../SprkMastheadDropdown/SprkMastheadDropdown';

class SprkMastheadLittleNav extends Component {
  render() {
    const {links, selector, selectorChoiceFunction, spacing, utilityContents, ...rest} = this.props;
    return (
      <nav role="navigation"
           className="sprk-c-Masthead__little-nav sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--split@xxs sprk-o-Stack--end-row">
        {selector &&
          <div className="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--center-column sprk-o-Stack--center-row">
            <div className="sprk-o-Stack__item sprk-u-Position--relative">
              <SprkMastheadDropdown choiceFunction={selectorChoiceFunction} selector={selector}/>
            </div>
          </div>
        }
        <ul
          className={classNames(
            "sprk-c-Masthead__site-links",
            "sprk-o-Stack__item",
            "sprk-o-HorizontalList",
            {"sprk-o-HorizontalList--spacing-large": spacing === 'large'},
            {"sprk-o-HorizontalList--spacing-medium": spacing === 'medium'},
            "sprk-o-Stack__item--center-column")}>
          {links.map((link, id) => {
            return(
              <li key={id}>
                <a className="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href={link.href}>
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul
          className={classNames(
            "sprk-o-Stack__item",
            "sprk-o-HorizontalList",
            {"sprk-o-HorizontalList--spacing-large": spacing === 'large'},
            {"sprk-o-HorizontalList--spacing-medium": spacing === 'medium'},
            "sprk-o-Stack--center-column")}>
          {utilityContents.map((item, id) => {
            return(
              <li key={id}>
                {item}
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

SprkMastheadLittleNav.propTypes = {
  links: PropTypes.array
};
SprkMastheadLittleNav.defaultProps = {
  links: [],
  spacing: 'medium'
};

export default SprkMastheadLittleNav;