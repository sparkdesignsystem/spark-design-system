/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkIcon from '../icons/SprkIcon';
import SprkLink from '../../base/links/SprkLink';
import SprkText from '../../base/typography/SprkText/SprkText';

class SprkDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggerText: this.getDefaultOptionText(),
      isOpen: false,
      choiceItems: props.choices.items.map((item) =>
        item.isDefault
          ? {
              id: uniqueId(),
              ...item,
              isActive: true,
            }
          : {
              id: uniqueId(),
              ...item,
              isActive: false,
            },
      ),
    };
    this.toggleDropdownOpen = this.toggleDropdownOpen.bind(this);
    this.closeOnEsc = this.closeOnEsc.bind(this);
    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.selectChoice = this.selectChoice.bind(this);
    this.setSelectedChoice = this.setSelectedChoice.bind(this);
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

  setSelectedChoice(componentToUpdateId) {
    const { choiceItems } = this.state;
    return choiceItems.map(({ id, isActive, ...rest }) => {
      if (id === componentToUpdateId) {
        return { id, isActive: true, ...rest };
      }
      return { id, isActive: false, ...rest };
    });
  }

  getDefaultOptionText() {
    const { props } = this;
    const { choices, defaultTriggerText } = props;
    const { items } = choices;

    if (props.variant !== 'informational' || items.length === 0) {
      return defaultTriggerText;
    }

    const defaultOption = items.find((item) => item.isDefault);

    return defaultOption ? defaultOption.content.title : defaultTriggerText;
  }

  selectChoice(id, text) {
    this.setState({
      triggerText: text,
      choiceItems: this.setSelectedChoice(id),
    });
  }

  toggleDropdownOpen(e) {
    e.preventDefault();
    const { openedEvent } = this.props;
    const { isOpen } = this.state;

    if (!isOpen) {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen,
      }));

      if (openedEvent) {
        openedEvent();
      }
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

  closeDropdown() {
    const { closedEvent } = this.props;
    const { isOpen } = this.state;

    if (isOpen) {
      this.setState({
        isOpen: false,
      });

      if (closedEvent) {
        closedEvent();
      }
    }
  }

  // TODO: Remove deprecated props as part of Issue 3798
  render() {
    const {
      additionalClasses,
      additionalIconClasses,
      iconAdditionalClasses = additionalIconClasses,
      additionalTriggerClasses,
      triggerAdditionalClasses = additionalTriggerClasses,
      additionalTriggerTextClasses,
      triggerTextAdditionalClasses = additionalTriggerTextClasses,
      analyticsString,
      choices,
      iconName,
      idString,
      screenReaderText,
      title,
      heading = title,
      variant,
      defaultTriggerText,
      openedEvent,
      closedEvent,
      ...rest
    } = this.props;
    const { choiceFunction, footer } = choices;
    const { choiceItems, isOpen, triggerText } = this.state;
    return (
      <div ref={this.dropdownRef}>
        <SprkLink
          element="a"
          variant="plain"
          additionalClasses={classNames(
            'sprk-c-Dropdown__trigger',
            { 'sprk-u-mrs': variant === 'informational' },
            triggerAdditionalClasses,
          )}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={screenReaderText || triggerText}
          data-analytics={analyticsString}
          data-id={idString}
          onClick={this.toggleDropdownOpen}
          {...rest}
        >
          {variant === 'informational' && (
            <>
              <span className={classNames(triggerTextAdditionalClasses)}>
                {triggerText}
              </span>
              <SprkIcon
                additionalClasses={classNames(
                  iconAdditionalClasses,
                  `
                  sprk-c-Icon--filled-current-color
                  sprk-c-Icon--stroke-current-color
                  sprk-u-mls
                `,
                )}
                iconName={iconName}
              />
            </>
          )}
          {variant !== 'informational' && (
            <>
              <span
                className={classNames(
                  'sprk-u-ScreenReaderText',
                  triggerTextAdditionalClasses,
                )}
              >
                {screenReaderText}
              </span>
              <SprkIcon
                iconName={iconName}
                additionalClasses={iconAdditionalClasses}
              />
            </>
          )}
        </SprkLink>
        {isOpen && (
          <div className={classNames('sprk-c-Dropdown', additionalClasses)}>
            {heading !== '' && (
              <div className="sprk-c-Dropdown__header">
                <SprkText
                  element="h2"
                  variant="bodyTwo"
                  additionalClasses="sprk-c-Dropdown__title"
                >
                  {heading}
                </SprkText>
              </div>
            )}
            <ul
              className="sprk-c-Dropdown__links"
              aria-label={heading || screenReaderText || 'My Choices'}
              role="listbox"
            >
              {choiceItems.map((choice) => {
                const {
                  content,
                  element,
                  href,
                  isActive,
                  text,
                  value,
                  // eslint-disable-next-line no-shadow
                  idString,
                  ...choicesRest
                } = choice;
                const TagName = element || 'a';
                return (
                  <li
                    className="sprk-c-Dropdown__item"
                    aria-selected={isActive}
                    role="option"
                    key={choice.id}
                  >
                    {variant !== 'informational' && (
                      <TagName
                        className="sprk-c-Dropdown__link"
                        href={TagName === 'a' ? href || '#' : undefined}
                        aria-label={text}
                        onClick={() => {
                          this.selectChoice(choice.id, text);
                          this.closeDropdown();
                          if (choiceFunction) {
                            choiceFunction(value);
                          }
                        }}
                        data-id={idString}
                        {...choicesRest}
                      >
                        {text}
                      </TagName>
                    )}
                    {variant === 'informational' && (
                      <>
                        <TagName
                          className={classNames('sprk-c-Dropdown__link', {
                            'sprk-c-Dropdown__link--active': isActive,
                          })}
                          href={TagName === 'a' ? href || '#' : undefined}
                          aria-label={content.title}
                          onClick={() => {
                            this.selectChoice(choice.id, content.title);
                            this.closeDropdown();
                            if (choiceFunction) {
                              choiceFunction(value);
                            }
                          }}
                          {...choicesRest}
                        >
                          <SprkText variant="bodyOne">{content.title}</SprkText>
                          {content.infoLine1 && (
                            <SprkText variant="bodyTwo">
                              {content.infoLine1}
                            </SprkText>
                          )}
                          {content.infoLine2 && (
                            <SprkText variant="bodyTwo">
                              {content.infoLine2}
                            </SprkText>
                          )}
                        </TagName>
                      </>
                    )}
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

SprkDropdown.propTypes = {
  /**
   * A space-separated string of
   * classes to add to the dropdown.
   */
  additionalClasses: PropTypes.string,
  // TODO remove as part of issue 3798
  /**
   * Deprecated - use `iconAdditionalClasses` instead.
   * A space-separated string of classes to add to the icon.
   */
  additionalIconClasses: PropTypes.string,
  /**
   * A space-separated string of classes to add to the icon.
   */
  iconAdditionalClasses: PropTypes.string,
  // TODO remove as part of issue 3798
  /**
   * Deprecated - use `triggerAdditionalClasses` instead.
   * A space-separated string of classes
   * to add to the trigger element.
   */
  additionalTriggerClasses: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the trigger element.
   */
  triggerAdditionalClasses: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the trigger text.
   */
  triggerTextAdditionalClasses: PropTypes.string,
  // TODO remove as part of issue 3798
  /**
   * Deprecated - use `triggerTextAdditionalClasses` instead.
   * A space-separated string of classes
   * to add to the trigger text.
   */
  additionalTriggerTextClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics`
   * attribute serving as a unique
   * selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * The choices object represents
   * data that is shown inside the open dropdown
   */
  choices: PropTypes.shape({
    /** An array of objects that describe the items in the menu. */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /** The element to render for each menu item. */
        element: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func,
          PropTypes.elementType,
        ]),
        /**
         * Determines the href of the choice item.
         */
        href: PropTypes.string,
        /** The text inside the choice item. */
        text: PropTypes.string,
        /**
         * If set to true, current option will be set as default selected option
         *  */
        isDefault: PropTypes.bool,
      }),
    ),
    footer: PropTypes.node,
    choiceFunction: PropTypes.func,
  }),
  /** The text set as the default of the trigger link. */
  defaultTriggerText: PropTypes.string,
  /**
   * Determines what icon `SprkIcon` renders
   * as the trigger icon.
   */
  iconName: PropTypes.string,
  /**
   * Assigned to the `data-id`
   * attribute serving as a unique
   * selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A value for screen readers when there isn't
   * discernable text on the dropdown.
   * Useful for when the `heading` prop is empty
   * and the Dropdown trigger is only an icon.
   */
  screenReaderText: PropTypes.string,
  // TODO remove as part of issue 3798
  /**
   * Deprecated - use `heading` instead.
   * The text of the optional header above the
   * choices in the dropdown.
   */
  title: PropTypes.string,
  /**
   * The text of the optional header above the
   * choices in the dropdown.
   */
  heading: PropTypes.string,
  /**
   * The variant of the Dropdown to render.
   */
  variant: PropTypes.oneOf(['base', 'informational']),
  /**
   * A function to be called when the dropdown is toggled open.
   */
  openedEvent: PropTypes.func,
  /**
   * A function to be called when the dropdown is toggled closed.
   */
  closedEvent: PropTypes.func,
};

SprkDropdown.defaultProps = {
  choices: {
    items: [],
  },
  defaultTriggerText: 'Choose One',
  iconName: 'chevron-down',
};

export default SprkDropdown;
