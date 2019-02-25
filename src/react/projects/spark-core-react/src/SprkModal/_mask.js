import React, { Component } from 'react';

class SprkModalMask extends Component {
  render() {
    return (
      <div data-sprk-modal-mask="true" className="sprk-c-ModalMask" tabIndex="-1"></div>
      // sprk-u-Display--none
    )
  }
}

export default SprkModalMask;