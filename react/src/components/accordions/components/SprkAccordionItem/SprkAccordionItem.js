import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkIcon from '../../../icons/SprkIcon';
import SprkLink from '../../../../base/links/SprkLink';

class SprkAccordionItem extends Component {
  constructor(props) {
    super(props);
    // TODO: Remove isDefaultOpen in future issue #1299
    const { isDefaultOpen, isOpen = isDefaultOpen } = this.props;
    this.state = {
      isOpen: isOpen || false,
      height: isOpen ? 'auto' : 0,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    const { onToggle } = this.props;
    e.preventDefault();
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
      height: !prevState.isOpen ? 'auto' : 0,
    }));
    if (onToggle) onToggle(e);
  }

  /* TODO: Remove headingAddClasses, contentAddClasses,
  iconAddClasses in future issue #1299 */
  render() {
    const {
      analyticsString,
      idString,
      children,
      heading,
      headingAddClasses,
      headingAdditionalClasses = headingAddClasses,
      additionalClasses,
      contentAddClasses,
      contentAdditionalClasses = contentAddClasses,
      iconAddClasses,
      iconAdditionalClasses = iconAddClasses,
      id,
      iconNameOpen,
      iconNameClosed,
      leadingIcon,
      leadingIconAdditionalClasses,
      ...other
    } = this.props;
    const { isOpen, height } = this.state;

    const iconClasses = classnames(
      'sprk-c-Icon--toggle sprk-c-Accordion__icon sprk-c-Icon--xl',
      { 'sprk-c-Icon--open': isOpen },
      iconAdditionalClasses,
    );

    const itemClassNames = classnames(
      'sprk-c-Accordion__item',
      { 'sprk-c-Accordion__item--open': isOpen },
      additionalClasses,
    );

    const headingClassNames = classnames(
      'sprk-c-Accordion__heading',
      'sprk-b-TypeDisplaySeven',
      headingAdditionalClasses,
    );

    const leadingIconClasses = classnames(
      'sprk-c-Icon--filled-current-color',
      'sprk-c-Icon--xl',
      'sprk-c-Accordion__icon',
      'sprk-c-Accordion__icon--leading',
      leadingIconAdditionalClasses,
    );

    return (
      <li className={itemClassNames} data-id={idString} {...other}>
        <SprkLink
          variant="unstyled"
          element="button"
          aria-controls={id}
          additionalClasses="sprk-c-Accordion__summary"
          data-analytics={analyticsString}
          onClick={this.toggle}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          {leadingIcon && (
            <SprkIcon
              iconName={leadingIcon}
              additionalClasses={leadingIconClasses}
            />
          )}
          <h3 className={headingClassNames}>{heading}</h3>
          <SprkIcon
            iconName={isOpen ? iconNameOpen : iconNameClosed}
            additionalClasses={iconClasses}
          />
        </SprkLink>

        <AnimateHeight duration={300} height={height}>
          <div
            className={classnames(
              'sprk-c-Accordion__content',
              contentAdditionalClasses,
            )}
            id={id}
          >
            {children}
          </div>
        </AnimateHeight>
      </li>
    );
  }
}

SprkAccordionItem.defaultProps = {
  iconNameOpen: 'chevron-up-circle',
  iconNameClosed: 'chevron-up-circle',
};

SprkAccordionItem.propTypes = {
  /**
   * Children content for the item.
   */
  children: PropTypes.node,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique selector
   * for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * The text for the item heading.
   */
  heading: PropTypes.string.isRequired,
  // TODO remove as part of Issue 1299
  /**
   * Deprecated - use `headingAdditionalClasses` instead. Expects a space
   * separated string of classes to be added to the heading.
   */
  headingAddClasses: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to the heading.
   */
  headingAdditionalClasses: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of
   * the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
  // TODO remove as part of Issue 1299
  /**
   * Deprecated - Use `isOpen` instead.
   * Used to specify whether the item should be open by default.
   */
  isDefaultOpen: PropTypes.bool,
  /**
   * Used to specify whether the item is opened or closed.
   */
  isOpen: PropTypes.bool,
  // TODO remove as part of Issue 1299
  /**
   * Deprecated - use `iconAdditionalClasses` instead. Expects a space
   * separated string of classes to be added to the icon.
   */
  iconAddClasses: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to the icon.
   */
  iconAdditionalClasses: PropTypes.string,
  // TODO remove as part of Issue 1299
  /**
   * Deprecated - use `contentAdditionalClasses` instead. Expects a space
   * separated string of classes to be added to the toggle content.
   */
  contentAddClasses: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to the toggle
   * content.
   */
  contentAdditionalClasses: PropTypes.string,
  /**
   * A unique ID for the accordion item.
   */
  id: PropTypes.string,
  /**
   * A function to be called when the Accordion item is toggled.
   */
  onToggle: PropTypes.func,
  /**
   * The name of the icon to use when the Accordion item is open.
   */
  iconNameOpen: PropTypes.string,
  /**
   * The name of the icon to use when the Accordion item is closed.
   */
  iconNameClosed: PropTypes.string,
  /**
   * The name of the icon to use before
   * the title in the Accordion item.
   * This is optional.
   */
  leadingIcon: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to the leading
   * icon.
   */
  leadingIconAdditionalClasses: PropTypes.string,
};

export default SprkAccordionItem;
