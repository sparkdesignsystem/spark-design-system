import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkIcon from '../icons/SprkIcon';
import SprkLink from '../../base/links/SprkLink';

class SprkToggle extends Component {
  constructor(props) {
    super(props);
    const { isDefaultOpen } = this.props;
    this.state = {
      isOpen: isDefaultOpen || false,
      height: isDefaultOpen ? 'auto' : 0,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      height: !prevState.isOpen ? 'auto' : 0,
    }));
  }

  render() {
    const {
      children,
      idString,
      additionalClasses,
      analyticsString,
      title,
      titleAddClasses,
      iconAddClasses,
      toggleIconName,
      ...other
    } = this.props;
    const { isOpen, height } = this.state;

    const titleClassNames = classnames(
      'sprk-b-TypeBodyThree sprk-b-Link sprk-b-Link--has-icon sprk-b-Link--simple',
      titleAddClasses,
    );

    const iconClasses = classnames(
      'sprk-c-Icon--l sprk-c-Icon--toggle sprk-u-mrs',
      { 'sprk-c-Icon--open': isOpen },
      iconAddClasses,
    );

    return (
      <div data-id={idString} {...other} className={additionalClasses}>
        <SprkLink
          additionalClasses={titleClassNames}
          data-analytics={analyticsString}
          onClick={this.toggleOpen}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <SprkIcon iconName={toggleIconName} additionalClasses={iconClasses} />
          {title}
        </SprkLink>
        <AnimateHeight duration={300} height={height}>
          <div>{children}</div>
        </AnimateHeight>
      </div>
    );
  }
}

SprkToggle.defaultProps = {
  toggleIconName: 'chevron-down-circle-two-color',
};

SprkToggle.propTypes = {
  /**
   * 	The name of the icon other than the default to use for the toggle.
   */
  toggleIconName: PropTypes.string,
  /**
   * The title text for the toggle.
   */
  title: PropTypes.string.isRequired,
  /** The content that will show up when the toggle opens. */
  children: PropTypes.node.isRequired,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Value assigned to the
   * `data-analytics` attribute.
   * Intended for an outside
   * library to capture data.
  */
  analyticsString: PropTypes.string,
  /** A string of additional classes for the Tabs component. */
  additionalClasses: PropTypes.string,
  /** Additional classes for the title text. */
  titleAddClasses: PropTypes.string,
  /** Additional classes for the toggle icon. */
  iconAddClasses: PropTypes.string,
};

export default SprkToggle;
