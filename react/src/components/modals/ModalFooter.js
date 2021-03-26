import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import SprkButton from '../buttons/SprkButton';
import SprkStackItem from '../../objects/stack/components/SprkStackItem/SprkStackItem';

class ModalFooter extends Component {
  constructor(props) {
    super(props);

    this.confirmButtonRef = React.createRef();
    this.focusConfirm = this.focusConfirm.bind(this);
  }

  focusConfirm() {
    // Apply focus to the confirm button.
    // The button should receive focus when the
    // modal becomes visible (not necessarily when it renders or updates), and
    // only in the default variant.
    this.confirmButtonRef.current.focus();
  }

  render() {
    const {
      confirmClick,
      cancelClick,
      confirmText,
      cancelText,
      cancelAnalyticsString,
      confirmAnalyticsString,
    } = this.props;

    return (
      <footer
        className="
          sprk-o-Stack__item
          sprk-c-Modal__footer
          sprk-o-Stack
          sprk-o-Stack--split@xxs
          sprk-o-Stack--end-row
          sprk-o-Stack--medium"
      >
        {/* vanilla expects a paragraph here */}
        <p>&nbsp;</p>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@xxs">
          <SprkButton
            variant="tertiary"
            onClick={cancelClick}
            type="button"
            analyticsString={cancelAnalyticsString}
          >
            {cancelText}
          </SprkButton>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@xxs">
          <SprkButton
            onClick={confirmClick}
            type="button"
            forwardedRef={this.confirmButtonRef}
            analyticsString={confirmAnalyticsString}
          >
            {confirmText}
          </SprkButton>
        </SprkStackItem>
      </footer>
    );
  }
}

ModalFooter.propTypes = {
  /**
   * The function that runs when confirm choice is clicked.
   */
  confirmClick: PropTypes.func,
  /**
   * The function that runs when cancel choice, the mask, or Esc is pressed.
   */
  cancelClick: PropTypes.func,
  /** Text to render on the confirmation button. */
  confirmText: PropTypes.string,
  /** Text to render on the cancel button. */
  cancelText: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving
   * as a unique selector for outside libraries to capture data.
   */
  confirmAnalyticsString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving
   * as a unique selector for outside libraries to capture data.
   */
  cancelAnalyticsString: PropTypes.string,
};

ModalFooter.defaultProps = {
  confirmClick: noop,
  cancelClick: noop,
  confirmText: 'Confirm',
  cancelText: 'Cancel',
};

export default ModalFooter;
