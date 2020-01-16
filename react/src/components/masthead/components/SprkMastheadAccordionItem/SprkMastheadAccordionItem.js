import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkIcon from '../../../icons/SprkIcon';
import SprkLink from '../../../../base/links/SprkLink';

class SprkMastheadAccordionItem extends Component {
  constructor(props) {
    super(props);
    const { defaultOpen, subNavLinks } = this.props;
    this.state = {
      isOpen: defaultOpen || false,
      height: defaultOpen ? 'auto' : 0,
      subNavLinks: subNavLinks.map(link => ({ id: uniqueId(), ...link })),
    };
    this.toggleAccordionOpen = this.toggleAccordionOpen.bind(this);
  }

  toggleAccordionOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      height: !prevState.isOpen ? 'auto' : 0,
    }));
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      defaultOpen,
      element,
      href,
      idString,
      isActive,
      isButton,
      leadingIcon,
      subNavLinks,
      text,
      ...rest
    } = this.props;
    const { isOpen, height, subNavLinks: stateLinks } = this.state;
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
          <React.Fragment>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-MastheadAccordion__summary"
              onClick={this.toggleAccordionOpen}
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
                {text}
              </span>
              <SprkIcon
                additionalClasses={classNames({ 'sprk-c-Icon--open': isOpen })}
                iconName="chevron-down"
              />
            </SprkLink>
            <AnimateHeight duration={300} height={height}>
              <ul className="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details">
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
                        href={
                          InnerTagName === 'a' ? innerHref || '#nogo' : undefined
                        }
                        className={classNames(
                          'sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link',
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
          </React.Fragment>
        )}
        {stateLinks.length <= 0 && (
          <TagName
            className={classNames(
              { 'sprk-c-MastheadAccordion__summary': !isButton },
              {
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
                  additionalClasses="sprk-c-Icon--stroke-current-color sprk-c-Icon--l sprk-u-mrs"
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
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Decides whether the Accordion item should render open by default.
   */
  defaultOpen: PropTypes.bool,
  /**
   * The element to render, could be 'a' or a Component.
   */
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Assigned to the `href` attribute if element is 'a'.
   */
  href: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * 	If true, denotes that the link represents the current page.
   */
  isActive: PropTypes.bool,
  /** Will render the element as a button with correct style. */
  isButton: PropTypes.bool,
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
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
  defaultOpen: false,
  element: 'a',
  isActive: false,
  isButton: false,
  subNavLinks: [],
  href: '#nogo',
};

export default SprkMastheadAccordionItem;
