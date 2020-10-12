import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkIcon from '../icons/SprkIcon';
import 'focus-visible';

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
    this.setState((prevState) => ({
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
      titleText,
      titleAddClasses,
      titleAdditionalClasses,
      iconAddClasses,
      iconAdditionalClasses,
      toggleIconName,
      contentId,
      contentAdditionalClasses,
      ...other
    } = this.props;
    const { isOpen, height } = this.state;

    const uniqueIdentifier = contentId || uniqueId('sprk_toggle_content_');

    const containerClasses = classnames('sprk-c-Toggle', additionalClasses);

    const titleClasses = classnames(
      'sprk-c-Toggle__trigger sprk-b-TypeBodyThree sprk-u-TextCrop--none',
      titleAddClasses,
    );

    const iconClasses = classnames(
      'sprk-c-Icon--xl sprk-c-Icon--toggle sprk-u-mrs',
      { 'sprk-c-Icon--open': isOpen },
      iconAddClasses,
    );

    const contentClasses = classnames(
      'sprk-c-Toggle__content',
      contentAdditionalClasses,
    );

    return (
      <div data-id={idString} {...other} className={containerClasses}>
        <button
          className={titleClasses}
          data-analytics={analyticsString}
          onClick={this.toggleOpen}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls={uniqueIdentifier}
          type="button"
        >
          <SprkIcon iconName={toggleIconName} additionalClasses={iconClasses} />
          {titleText || title}
        </button>
        <AnimateHeight
          duration={300}
          height={height}
          className={contentClasses}
          id={uniqueIdentifier}
        >
          <div>{children}</div>
        </AnimateHeight>
      </div>
    );
  }
}

SprkToggle.defaultProps = {
  toggleIconName: 'chevron-down-circle',
};

SprkToggle.propTypes = {
  /**
   * 	The name of the icon other than the default to use for the toggle.
   */
  toggleIconName: PropTypes.string,
  /**
   * Deprecated - use titleText instead.
   * The title text for the toggle.
   */
  title: PropTypes.string,
  /**
   * Deprecated - use titleText instead.
   * The title text for the toggle.
   */
  titleText: PropTypes.string.isRequired,
  /** The content that will show up when the toggle opens. */
  children: PropTypes.node.isRequired,
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as
   * a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /** Determines if the toggle is open upon loading on the page. */
  isDefaultOpen: PropTypes.bool,
  /**
   * A space-separated string of classes to add to the
   * outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /** Deprecated - Use `titleAdditionalClasses` instead.
   * Additional classes for the title text. */
  titleAddClasses: PropTypes.string,
  /** Additional classes for the title text. */
  titleAdditionalClasses: PropTypes.string,
  /** Deprecated - Use `iconAdditionalClasses` instead.
   * Additional classes for the toggle icon. */
  iconAddClasses: PropTypes.string,
  /** Additional classes for the toggle icon. */
  iconAdditionalClasses: PropTypes.string,
  /** Additional classes for the content. */
  contentAdditionalClasses: PropTypes.string,
  /**
   * A string that is used to set the `id` on the content
   * and the `aria-controls` for the toggle trigger button.
   */
  contentId: PropTypes.string,
};

export default SprkToggle;
