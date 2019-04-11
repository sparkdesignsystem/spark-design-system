import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalFooter extends Component {
  constructor(props){
    super(props);

    this.confirmButtonRef = React.createRef();
    this.focusConfirm = this.focusConfirm.bind(this);
  }

  focusConfirm(){
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
      cancelText
    } = this.props;

    return (
      <footer className="sprk-o-Stack__item">
        <p>&nbsp;</p> {/* vanilla expects a paragraph here */}
        <button className="sprk-c-Button sprk-u-mrm" onClick={confirmClick} ref={this.confirmButtonRef}>
          {confirmText}
        </button>

        <button className="sprk-c-Button sprk-c-Button--tertiary"
                data-sprk-modal-cancel="exampleChoiceModal"
                onClick={cancelClick} >
          {cancelText}
        </button>
      </footer>
    )
  }

}

ModalFooter.propTypes = {
  // classes to add to the class of the rendered element
  confirmClick: PropTypes.func,
  cancelClick: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string
}

ModalFooter.defaultProps = {
  confirmClick: function(){},
  cancelClick: function(){},
  confirmText: 'Confirm',
  cancelText: 'Cancel'
}

export default ModalFooter;