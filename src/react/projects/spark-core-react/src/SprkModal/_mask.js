import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SprkModalMask extends Component {
  render() {
    const {
      clicked,
      ...rest
    } = this.props;
    return (
      <div data-sprk-modal-mask="true" onClick={clicked} className="sprk-c-ModalMask" tabIndex="-1"></div>
      // sprk-u-Display--none
    )
  }
}

SprkModalMask.propTypes = {
  // classes to add to the class of the rendered element
  clicked: PropTypes.func
}

SprkModalMask.defaultProps = {
  clicked: function(){}
}

export default SprkModalMask;