import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import SprkIcon from '../icons/SprkIcon';

class CloseButton extends Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
    this.focusButton = this.focusButton.bind(this);
  }

  focusButton() {
    // Apply focus to the button element. The button should receive focus
    // when the modal becomes visible (not necessarily when it
    // renders or updates), and only in the info variant.

    this.buttonRef.current.focus();
  }

  render() {
    const { clickAction, iconName, analyticsString } = this.props;

    return (
      <button
        className="sprk-c-Modal__icon"
        type="button"
        aria-label="Click to close this modal"
        onClick={clickAction}
        ref={this.buttonRef}
        data-analytics={analyticsString}
      >
        <SprkIcon
          icontype="close"
          iconName={iconName}
          additionalClasses="
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color"
        />
      </button>
    );
  }
}

CloseButton.propTypes = {
  /**
   * Function to call when button is clicked
   */
  clickAction: PropTypes.func,
  /**
   * The icon name to represent the close action
   */
  iconName: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
};

CloseButton.defaultProps = {
  clickAction: noop,
  iconName: 'close',
};

export default CloseButton;
