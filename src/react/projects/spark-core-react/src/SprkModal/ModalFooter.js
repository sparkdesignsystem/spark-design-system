import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalFooter extends Component {

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
        <button className="sprk-c-Button sprk-u-mrm" onClick={confirmClick}>
          {confirmText}
        </button>

          <button  className="sprk-c-Button sprk-c-Button--tertiary" 
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