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
      utilityContents: utilityContents.map((item) => ({
        id: uniqueId(),
        ...item,
      })),
      links: links.map((link) => ({ id: uniqueId(), ...link })),
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
            const { element, href, isActive, text, subNavLinks, ...rest } = link;
            const TagName = element || 'a';
            return (
              <li key={link.id}>
                <TagName
                  className="sprk-b-Link sprk-b-Link--simple sprk-c-Masthead__link"
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
          {utilityContents.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
      </nav>
    );
  }
}

SprkMastheadLittleNav.propTypes = {
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics`
   * attribute serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Assigned to the `data-id`
   * attribute serving as a unique
   * selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Used to render navigation links
   * inside the little nav.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Determines if link renders as an
       * anchor tag, or router link.
       */
      element: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
      ]),
      /**
       * A space-separated string of classes
       * to add to the link item.
       */
      additionalContainerClasses: PropTypes.string,
      /** Adds a class if the link is active */
      isActive: PropTypes.bool,
      /** The link text */
      text: PropTypes.string,
    }),
  ),
  /**
   * Expects a selector object that
   * represents choices to be supplied
   * to the selector in the wide viewport
   * version of the masthead.
   */
  selector: PropTypes.shape({
    /**
     * An array of objects that describe the items in the menu
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func,
          PropTypes.elementType,
        ]),
        /** Assigned to href if the element is an anchor */
        href: PropTypes.string,
        /** The text inside the item */
        text: PropTypes.string,
      }),
    ),
  }),
  /**
   * Determines the spacing between
   * little nav items
   */
  spacing: PropTypes.oneOf(['medium', 'large']),
  /**
   * Expects an array containing components
   * to render in the utility area of littleNav,
   * in the wide viewport version of the masthead.
   */
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
