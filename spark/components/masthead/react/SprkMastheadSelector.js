/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import SprkIcon from '../../icons/react/SprkIcon';
import SprkLink from '../../../base/links/react/SprkLink';

class SprkMastheadSelector extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      triggerText: props.defaultTriggerText,
      choiceItems: props.choices.items.map(item => ({
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
    if (window) {
      window.addEventListener('keydown', this.closeOnEsc);
      window.addEventListener('focusin', this.closeOnClickOutside);
      window.addEventListener('click', this.closeOnClickOutside);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('keydown', this.closeOnEsc);
      window.removeEventListener('focusin', this.closeOnClickOutside);
      window.removeEventListener('click', this.closeOnClickOutside);
    }
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
              'sprk-c-Masthead__selector sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column',
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
              'sprk-c-Masthead__selector-dropdown sprk-c-Dropdown',
              additionalClasses,
            )}
            data-sprk-dropdown="dropdown-selector"
          >
            <div className="sprk-c-Dropdown__header">
              <SprkLink
                variant="plain"
                additionalClasses="sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column sprk-u-Width-100"
                onClick={this.closeDropdown}
                href="#nogo"
                aria-haspopup="true"
              >
                <span className="sprk-c-Dropdown__title sprk-b-TypeBodyTwo sprk-o-Stack__item sprk-o-Stack__item--flex@xxs">
                  {triggerText}
                </span>
                <SprkIcon
                  iconName="chevron-up"
                  additionalClasses="sprk-c-Icon--toggle sprk-Stack__item"
                />
              </SprkLink>
            </div>

            <ul className="sprk-c-Dropdown__links">
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
                  <li className="sprk-c-Dropdown__item" key={item.id}>
                    <TagName
                      className="sprk-c-Dropdown__link sprk-u-ptm"
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
              <div className="sprk-c-Dropdown__footer sprk-u-TextAlign--center">
                {footer}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

SprkMastheadSelector.propTypes = {
  // Classes applied to the dropdown
  additionalClasses: PropTypes.string,
  // Classes applied to the icon
  additionalIconClasses: PropTypes.string,
  // Classes applied to the link that triggers the dropdown to open
  additionalTriggerClasses: PropTypes.string,
  // Classes applied to the text in the trigger link
  additionalTriggerTextClasses: PropTypes.string,
  // Assigned to data-analytics
  analyticsString: PropTypes.string,
  // Choices object that builds the dropdown contents
  choices: PropTypes.shape({
    // A node to render at the foot of the dropdown menu
    footer: PropTypes.node,
    // An array of objects that describe the items in the menu
    items: PropTypes.arrayOf(
      PropTypes.shape({
        // The element to render for each menu item
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        // Assigned to href of the element is 'a'
        href: PropTypes.string,
        // The text inside the item
        text: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  // Incoming children
  children: PropTypes.node,
  // The text set as the default of the trigger link
  defaultTriggerText: PropTypes.string,
  // The icon type of the trigger icon
  iconName: PropTypes.string,
  // Assigned to data-id
  idString: PropTypes.string,
  // Applies styles if the selector is flush with the sides of the viewport
  isFlush: PropTypes.bool,
};

SprkMastheadSelector.defaultProps = {
  defaultTriggerText: 'Choose One...',
  iconName: 'chevron-down',
  isFlush: false,
};

export default SprkMastheadSelector;
