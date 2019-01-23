import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SprkMastheadLittleNav extends Component {
  render() {
    const {links, utilityContents, ...rest} = this.props;
    return (
      <nav role="navigation"
           className="sprk-c-Masthead__little-nav sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--split@xxs sprk-o-Stack--end-row">
        <ul
          className="sprk-c-Masthead__site-links sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack__item--center-column">
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
          className="sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack--center-column"
        >
          {utilityContents.map((item) => {
            return(
              <li>
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
  links: [
    {
    text: 'Item 1',
    href: '#nogo'
    },
    {
      text: 'Item 2',
      href: '#nogo'
    }
  ]
};

export default SprkMastheadLittleNav;