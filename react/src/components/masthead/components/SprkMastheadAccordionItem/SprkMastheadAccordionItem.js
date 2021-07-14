import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkIcon from '../../../icons/SprkIcon';

class SprkMastheadAccordionItem extends Component {
  constructor(props) {
    super(props);
    const {
      defaultOpen,
      subNavLinks,
      itemId = uniqueId('sprk_accordion_item_'),
    } = this.props;
    this.state = {
      isOpen: defaultOpen || false,
      height: defaultOpen ? 'auto' : 0,
      subNavLinks: subNavLinks.map((link) => ({ id: uniqueId(), ...link })),
      uniqueIdentifier: itemId,
    };
    this.toggleAccordionOpen = this.toggleAccordionOpen.bind(this);
  }

  toggleAccordionOpen() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
      height: !prevState.isOpen ? 'auto' : 0,
    }));
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      clickFunction,
      defaultOpen,
      element,
      href,
      idString,
      isActive,
      isButton,
      leadingIcon,
      subNavLinks,
      text,
      itemId,
      ...rest
    } = this.props;
    const {
      isOpen,
      height,
      subNavLinks: stateLinks,
      uniqueIdentifier,
    } = this.state;
    const TagName = element;
    return (
      <li
        className={classNames(
          'sprk-c-MastheadAccordion__item',
          { 'sprk-c-MastheadAccordion__item--open': isOpen },
          { 'sprk-c-MastheadAccordion__item--active': isActive },
          { 'sprk-o-Box': isButton },
          additionalClasses,
        )}
        data-analytics={analyticsString}
        data-id={idString}
      >
        {stateLinks.length > 0 && (
          <>
            <button
              className="sprk-c-MastheadAccordion__summary"
              onClick={this.toggleAccordionOpen}
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-controls={uniqueIdentifier}
              type="button"
            >
              <span
                className="
                  sprk-b-TypeBodyOne
                  sprk-c-MastheadAccordion__heading"
              >
                {text}
              </span>
              <SprkIcon
                additionalClasses={classNames(
                  'sprk-c-MastheadAccordion__icon',
                  { 'sprk-c-Icon--open': isOpen },
                )}
                iconName="chevron-down"
              />
            </button>
            <AnimateHeight duration={300} height={height}>
              <ul
                className="
                  sprk-b-List
                  sprk-b-List--bare
                  sprk-c-MastheadAccordion__details"
                id={uniqueIdentifier}
              >
                {stateLinks.map((subnavlink) => {
                  const {
                    element: innerElement,
                    href: innerHref,
                    id: innerId,
                    text: innerText,
                    ...innerRest
                  } = subnavlink;
                  const InnerTagName = innerElement || 'a';
                  return (
                    <li key={innerId}>
                      <InnerTagName
                        onClick={clickFunction}
                        href={
                          InnerTagName === 'a'
                            ? innerHref || '#nogo'
                            : undefined
                        }
                        className={classNames(
                          `sprk-b-Link
                          sprk-b-Link--plain
                          sprk-c-Masthead__link`,
                        )}
                        {...innerRest}
                      >
                        {innerText}
                      </InnerTagName>
                    </li>
                  );
                })}
              </ul>
            </AnimateHeight>
          </>
        )}
        {stateLinks.length <= 0 && (
          <TagName
            onClick={clickFunction}
            className={classNames(
              { 'sprk-c-MastheadAccordion__summary': !isButton },
              {
                // eslint-disable-next-line max-len
                'sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact sprk-c-Button--full@s': isButton,
              },
            )}
            href={TagName === 'a' ? href : undefined}
            {...rest}
          >
            <span
              className={classNames({
                'sprk-c-MastheadAccordion__heading': !isButton,
              })}
            >
              {leadingIcon && (
                <SprkIcon
                  additionalClasses="
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color
                    sprk-c-Icon--xl
                    sprk-c-MastheadAccordion__icon
                    sprk-c-MastheadAccordion__icon--leading
                  "
                  iconName={leadingIcon}
                />
              )}
              {text}
            </span>
          </TagName>
        )}
      </li>
    );
  }
}

SprkMastheadAccordionItem.propTypes = {
  /**
   * A space-separated string of classes to add
   * to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics`
   * attribute serving as a unique selector for
   * outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Expects a function to be
   * executed when a user clicks a
   * link or a link inside the accordion item.
   */
  clickFunction: PropTypes.func,
  /**
   * Decides whether the Accordion
   * item should render open by default.
   */
  defaultOpen: PropTypes.bool,
  /**
   * The element to render, could be 'a' or a Component.
   */
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType,
  ]),
  /**
   * Assigned to the `href` attribute if element is 'a'.
   */
  href: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute
   * serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * 	If true, denotes that the link represents the current page.
   */
  isActive: PropTypes.bool,
  /** Will render the element as a button with correct style. */
  isButton: PropTypes.bool,
  /* The unique item `id`.  */
  itemId: PropTypes.string,
  /**
   * The name of the icon to the left of the link text.
   * Will render in compatible components like narrowNav.
   */
  leadingIcon: PropTypes.string,
  /** Text for the Accordion Item */
  text: PropTypes.string,
  /**
   * Expects an array containing link objects.
   * Will be treated as a subnav to the link.
   */
  subNavLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Determines if link renders as an anchor tag, or router link.
       */
      element: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
      ]),
      /**
       * The `href` value assigned the subNavLink item.
       */
      href: PropTypes.string,
      /**
       * Text for SubNavLink item.
       */
      text: PropTypes.string,
    }),
  ),
};

SprkMastheadAccordionItem.defaultProps = {
  clickFunction: () => {},
  defaultOpen: false,
  element: 'a',
  isActive: false,
  isButton: false,
  subNavLinks: [],
  href: '#nogo',
};

export default SprkMastheadAccordionItem;
