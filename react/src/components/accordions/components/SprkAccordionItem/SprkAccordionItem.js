import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkIcon from '../../../icons/SprkIcon';
import SprkLink from '../../../../base/links/SprkLink';

class SprkAccordionItem extends Component {
  constructor(props) {
    super(props);
    const { isDefaultOpen } = this.props;
    this.state = {
      isOpen: isDefaultOpen || false,
      height: isDefaultOpen ? 'auto' : 0,
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

  render() {
    const {
      analyticsString,
      idString,
      children,
      heading,
      headingAddClasses,
      headingAdditionalClasses,
      additionalClasses,
      contentAddClasses,
      contentAdditionalClasses,
      iconAddClasses,
      iconAdditionalClasses,
      isDefaultOpen,
      id,
      ...other
    } = this.props;
    const { isOpen, height } = this.state;

    const iconClasses = classnames(
      'sprk-c-Icon--toggle sprk-c-Accordion__icon sprk-c-Icon--xl',
      { 'sprk-c-Icon--open': isOpen },
      iconAdditionalClasses || iconAddClasses,
    );

    const itemClassNames = classnames(
      'sprk-c-Accordion__item',
      { 'sprk-c-Accordion__item--open': isOpen },
      additionalClasses,
    );

    const headingClassNames = classnames(
      'sprk-c-Accordion__heading',
      'sprk-b-TypeDisplaySeven',
      headingAdditionalClasses || headingAddClasses,
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
          <h3 className={headingClassNames}>{heading}</h3>
          <SprkIcon
            iconName="chevron-up-circle"
            additionalClasses={iconClasses}
          />
        </SprkLink>

        <AnimateHeight duration={300} height={height}>
          <div
            className={classnames(
              'sprk-c-Accordion__content',
              contentAdditionalClasses || contentAddClasses,
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
  isDefaultOpen: false,
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
  // TODO remove as part of Issue XXXX
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
  /**
   * Used to specify whether the item should be open by default.
   */
  isDefaultOpen: PropTypes.bool,
  // TODO remove as part of Issue XXXX
  /**
   * Deprecated - use `iconAdditionalClasses` instead. Expects a space
   * separated string of classes to be added to the icon.
   */
  iconAddClasses: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to the icon.
   */
  iconAdditionalClasses: PropTypes.string,
  // TODO remove as part of Issue XXXX
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
   * An function to be called when the accordion item is toggled.
   */
  onToggle: PropTypes.func,
};

export default SprkAccordionItem;
