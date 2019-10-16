import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class ModalFooter extends Component {
  constructor(props) {
    super(props);

    this.confirmButtonRef = React.createRef();
    this.focusConfirm = this.focusConfirm.bind(this);
  }

  focusConfirm() {
    // Apply focus to the confirm button. The button should receive focus when the
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
      <footer className="sprk-o-Stack__item">
        {/* vanilla expects a paragraph here */}
        <p>&nbsp;</p>
        <button
          className="sprk-c-Button sprk-u-mrm"
          onClick={confirmClick}
          type="button"
          ref={this.confirmButtonRef}
          data-analytics={confirmAnalyticsString}
        >
          {confirmText}
        </button>

        <button
          className="sprk-c-Button sprk-c-Button--tertiary"
          data-sprk-modal-cancel="exampleChoiceModal"
          onClick={cancelClick}
          type="button"
          data-analytics={cancelAnalyticsString}
        >
          {cancelText}
        </button>
      </footer>
    );
  }
}

ModalFooter.propTypes = {
  // classes to add to the class of the rendered element
  confirmClick: PropTypes.func,
  cancelClick: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  // the string to pass to the confirm button for data-analytics
  confirmAnalyticsString: PropTypes.string,
  // the string to pass to the cancel button for data-analytics
  cancelAnalyticsString: PropTypes.string,
};

ModalFooter.defaultProps = {
  confirmClick: noop,
  cancelClick: noop,
  confirmText: 'Confirm',
  cancelText: 'Cancel',
};

export default ModalFooter;
