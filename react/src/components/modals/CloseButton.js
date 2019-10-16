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
          additionalClasses="sprk-c-Icon--stroke-current-color"
        />
      </button>
    );
  }
}

CloseButton.propTypes = {
  // function to call when the button is clicked
  clickAction: PropTypes.func,
  // the icon name to render the close icon
  iconName: PropTypes.string,
  // the string rendered for data-analytics
  analyticsString: PropTypes.string,
};

CloseButton.defaultProps = {
  clickAction: noop,
  iconName: 'close',
};

export default CloseButton;
