/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkIcon from '../../../icons/SprkIcon';
import SprkLink from '../../../../base/links/SprkLink';

class SprkMastheadSelector extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      triggerText: props.defaultTriggerText,
      choiceItems: props.choices.items.map((item) => ({
        id: uniqueId(),
        ...item,
      })),
    };
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.updateTriggerText = this.updateTriggerText.bind(this);
    this.closeOnEsc = this.closeOnEsc.bind(this);
    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc);
    window.addEventListener('focusin', this.closeOnClickOutside);
    window.addEventListener('click', this.closeOnClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
    window.removeEventListener('focusin', this.closeOnClickOutside);
    window.removeEventListener('click', this.closeOnClickOutside);
  }

  closeOnEsc(e) {
    if (e.key === 'Escape') {
      this.closeDropdown();
    }
  }

  closeOnClickOutside(e) {
    if (!this.dropdownRef.current.contains(e.target)) {
      this.closeDropdown();
    }
  }

  openDropdown(e) {
    e.preventDefault();
    this.setState({
      isOpen: true,
    });
  }

  closeDropdown() {
    this.setState({
      isOpen: false,
    });
  }

  updateTriggerText(text) {
    this.setState({
      triggerText: text,
    });
  }

  render() {
    const {
      additionalClasses,
      additionalIconClasses,
      additionalTriggerClasses,
      additionalTriggerTextClasses,
      analyticsString,
      choices,
      iconName,
      idString,
      isFlush,
    } = this.props;
    const { choiceFunction, footer } = choices;
    const { choiceItems, isOpen, triggerText } = this.state;

    return (
      // eslint-disable-next-line
      <div
        role="dialog"
        ref={this.dropdownRef}
        className={classNames({ 'sprk-c-MastheadMask': isOpen && isFlush })}
        onClick={() => {
          if (isOpen) {
            this.closeDropdown();
          }
        }}
      >
        <div className={classNames({ 'sprk-o-Box': isFlush })}>
          <SprkLink
            variant="plain"
            additionalClasses={classNames(
              `
                sprk-c-Masthead__selector
                sprk-o-Stack
                sprk-o-Stack--split@xxs
                sprk-o-Stack--center-column
              `,
              additionalTriggerClasses,
            )}
            data-analytics={analyticsString}
            data-id={idString}
            onClick={this.openDropdown}
            href="#nogo"
            data-sprk-dropdown-trigger="dropdown-selector"
            aria-haspopup="true"
          >
            <span
              className={classNames(
                'sprk-o-Stack__item sprk-o-Stack__item--flex@xxs',
                additionalTriggerTextClasses,
              )}
              role="listbox"
            >
              {triggerText}
            </span>
            <SprkIcon
              iconName={iconName}
              additionalClasses={classNames(
                'sprk-c-Icon--toggle sprk-Stack__item',
                additionalIconClasses,
              )}
            />
          </SprkLink>
        </div>

        {isOpen && (
          <div
            className={classNames(
              'sprk-c-Masthead__selector-dropdown',
              additionalClasses,
            )}
            data-sprk-dropdown="dropdown-selector"
          >
            <div className="sprk-c-Masthead__selector-dropdown-header">
              <SprkLink
                variant="plain"
                additionalClasses="
                  sprk-o-Stack
                  sprk-o-Stack--split@xxs
                  sprk-o-Stack--center-column
                "
                onClick={this.closeDropdown}
                href="#nogo"
                aria-haspopup="true"
              >
                <span
                  className="
                    sprk-c-Masthead__selector-dropdown-title
                    sprk-b-TypeBodyTwo
                    sprk-o-Stack__item
                    sprk-o-Stack__item--flex@xxs
                  "
                >
                  {triggerText}
                </span>
                <SprkIcon
                  iconName="chevron-up"
                  additionalClasses="sprk-c-Icon--toggle sprk-Stack__item"
                />
              </SprkLink>
            </div>

            <ul className="sprk-c-Masthead__selector-dropdown-links">
              {choiceItems.map((item) => {
                const {
                  element,
                  href,
                  title,
                  information,
                  value,
                  ...rest
                } = item;
                const TagName = element || 'a';
                return (
                  <li
                    className="sprk-c-Masthead__selector-dropdown-item"
                    key={item.id}
                  >
                    <TagName
                      className="sprk-c-Masthead__selector-dropdown-link"
                      href={TagName === 'a' ? href || '#nogo' : undefined}
                      onClick={() => {
                        this.updateTriggerText(title);
                        this.closeDropdown();
                        if (choiceFunction) {
                          choiceFunction(value);
                        }
                      }}
                      role="option"
                      {...rest}
                    >
                      <p className="sprk-b-TypeBodyOne">{title}</p>
                      <p>{information}</p>
                    </TagName>
                  </li>
                );
              })}
            </ul>

            {footer && (
              <div className=" sprk-c-Masthead__selector-footer ">{footer}</div>
            )}
          </div>
        )}
      </div>
    );
  }
}

SprkMastheadSelector.propTypes = {
  /**
   * A space-separated string of classes to add to
   * the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * A space-separated string of classes to add to the icon.
   */
  additionalIconClasses: PropTypes.string,
  /**
   * A space-separated string of classes to add to the trigger element.
   */
  additionalTriggerClasses: PropTypes.string,
  /**
   * A space-separated string of classes to add to the trigger text.
   */
  additionalTriggerTextClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as
   * a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /** Configuration object that builds the dropdown. */
  choices: PropTypes.shape({
    /**
     * A function supplied that will run when a choice is made.
     */
    choiceFunction: PropTypes.func,
    /** A node to render at the foot of the dropdown menu. */
    footer: PropTypes.node,
    /** An array of objects that describe the items in the menu. */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        /**
         * The `href` value assigned the logo's link.
         */
        href: PropTypes.string,
        /** The text for the Masthead Selector item. */
        text: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  // TODO: Get rid of this, not needed
  children: PropTypes.node,
  /** The text set as the default of the trigger link */
  defaultTriggerText: PropTypes.string,
  /** The icon type of the trigger icon */
  iconName: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /** Applies styles if the selector is flush with the sides of the viewport */
  isFlush: PropTypes.bool,
};

SprkMastheadSelector.defaultProps = {
  defaultTriggerText: 'Choose One...',
  iconName: 'chevron-down',
  isFlush: false,
};

export default SprkMastheadSelector;
