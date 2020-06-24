import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import SprkMastheadDropdown from '../SprkMastheadDropdown/SprkMastheadDropdown';

class SprkMastheadBigNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: props.links.map(link => ({ id: uniqueId(), ...link })),
    };
  }

  render() {
    const { additionalClasses, analyticsString, idString } = this.props;
    const { links } = this.state;
    return (
      <>
        <div className="sprk-o-Stack__item">
          <nav
            className={classNames(
              'sprk-c-Masthead__big-nav',
              additionalClasses,
            )}
            data-analytics={analyticsString}
            data-id={idString}
            role="navigation"
          >
            <ul className="sprk-c-Masthead__big-nav-items sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--center-row sprk-o-Stack--split@xxs sprk-b-List sprk-b-List--bare">
              {links.map((link) => {
                const {
                  element,
                  additionalContainerClasses,
                  isActive,
                  text,
                  ...rest
                } = link;
                const TagName = element || 'a';
                return (
                  <li
                    className={classNames(
                      'sprk-c-Masthead__big-nav-item sprk-o-Stack__item',
                      { 'sprk-c-Masthead__link--active': isActive },
                      additionalContainerClasses,
                    )}
                    key={link.id}
                  >
                    {!link.subNavLinks && (
                      <TagName
                        className={classNames(
                          'sprk-b-Link sprk-b-Link--simple sprk-c-Masthead__link sprk-c-Masthead__link--big-nav',
                        )}
                        {...rest}
                      >
                        {text}
                      </TagName>
                    )}
                    {link.subNavLinks && (
                      <SprkMastheadDropdown
                        choices={{ items: link.subNavLinks }}
                        triggerText={link.text}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

SprkMastheadBigNav.propTypes = {
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
 /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /** Used to render navigation inside. */
  links: PropTypes.arrayOf(
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
       * A space-separated string of classes to add to the link item.
       */
      additionalContainerClasses: PropTypes.string,
      /** Adds a class if the link is active. */
      isActive: PropTypes.bool,
      /** The link text. */
      text: PropTypes.string,
    }),
  ).isRequired,
};

SprkMastheadBigNav.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  idString: '',
};

export default SprkMastheadBigNav;
