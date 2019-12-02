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
      <React.Fragment>
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
                          'sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link sprk-c-Masthead__link--big-nav',
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
      </React.Fragment>
    );
  }
}

SprkMastheadBigNav.propTypes = {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString: PropTypes.string,
 /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /** Used to render navigation inside. */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /** The element to render, can be 'a' or a Component like Link. */
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /** Classes to apply to the container of the link. */
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
