import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

class SprkModalMask extends Component {
  render() {
    const {
      clicked,
    } = this.props;
    return (
      <div data-sprk-modal-mask="true" onClick={clicked} className="sprk-c-ModalMask" tabIndex="-1" />
    );
  }
}

SprkModalMask.propTypes = {
  // function to call when the mask is clicked
  clicked: PropTypes.func,
};

SprkModalMask.defaultProps = {
  clicked: noop,
};

export default SprkModalMask;
