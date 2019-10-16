import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkMastheadSelector from '../SprkMastheadSelector/SprkMastheadSelector';

class SprkMastheadLittleNav extends Component {
  constructor(props) {
    super(props);
    const { links, utilityContents } = props;
    this.state = {
      utilityContents: utilityContents.map(item => ({
        id: uniqueId(),
        ...item,
      })),
      links: links.map(link => ({ id: uniqueId(), ...link })),
    };
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      idString,
      selector,
      spacing,
    } = this.props;
    const { links, utilityContents } = this.state;
    return (
      <nav
        role="navigation"
        data-analytics={analyticsString}
        data-id={idString}
        className={classNames(
          'sprk-c-Masthead__little-nav sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--split@xxs sprk-o-Stack--end-row',
          additionalClasses,
        )}
      >
        {selector.items && (
          <div className="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--center-column sprk-o-Stack--center-row">
            <div className="sprk-o-Stack__item sprk-u-Position--relative">
              <SprkMastheadSelector choices={selector} />
            </div>
          </div>
        )}
        <ul
          className={classNames(
            'sprk-c-Masthead__site-links',
            'sprk-o-Stack__item',
            'sprk-o-HorizontalList',
            { 'sprk-o-HorizontalList--spacing-large': spacing === 'large' },
            { 'sprk-o-HorizontalList--spacing-medium': spacing === 'medium' },
            'sprk-o-Stack__item--center-column',
          )}
        >
          {links.map((link) => {
            const { element, href, text, ...rest } = link;
            const TagName = element || 'a';
            return (
              <li key={link.id}>
                <TagName
                  className="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href={TagName === 'a' ? href || '#nogo' : undefined}
                  {...rest}
                >
                  {text}
                </TagName>
              </li>
            );
          })}
        </ul>
        <ul
          className={classNames(
            'sprk-o-Stack__item',
            'sprk-o-HorizontalList',
            { 'sprk-o-HorizontalList--spacing-large': spacing === 'large' },
            { 'sprk-o-HorizontalList--spacing-medium': spacing === 'medium' },
            'sprk-o-Stack--center-column',
          )}
        >
          {utilityContents.map(item => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
      </nav>
    );
  }
}

SprkMastheadLittleNav.propTypes = {
  /** classes to be added to the masthead */
  additionalClasses: PropTypes.string,
  /** assigned to data-analytics */
  analyticsString: PropTypes.string,
  /** assigned to data-id */
  idString: PropTypes.string,
  /** used to render navigation inside */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /** The element to render, can be 'a' or a Component like Link */
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /** Classes to apply to the container of the link */
      additionalContainerClasses: PropTypes.string,
      /** Adds a class if the link is active */
      isActive: PropTypes.bool,
      /** The link text */
      text: PropTypes.string,
    }),
  ),
  /** Choices object that builds the dropdown contents */
  selector: PropTypes.shape({
    /** An array of objects that describe the items in the menu */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /** The element to render for each menu item */
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        /** Assigned to href of the element is 'a' */
        href: PropTypes.string,
        /** The text inside the item */
        text: PropTypes.string,
      }),
    ),
  }),
  /** Determines the spacing between little nav items */
  spacing: PropTypes.oneOf(['medium', 'large']),
  /** An array of components to fill the utility area with */
  utilityContents: PropTypes.arrayOf(PropTypes.node),
};

SprkMastheadLittleNav.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  idString: '',
  links: [],
  spacing: 'medium',
  selector: {},
  utilityContents: [],
};

export default SprkMastheadLittleNav;
