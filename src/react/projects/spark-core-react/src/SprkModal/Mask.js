import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

class SprkModalMask extends Component {
  render() {
    const {
      clicked,
      ...rest
    } = this.props;
    return (
      <div data-sprk-modal-mask="true" onClick={clicked} className="sprk-c-ModalMask" tabIndex="-1"></div>
    )
  }
}

SprkModalMask.propTypes = {
  clicked: PropTypes.func
}

SprkModalMask.defaultProps = {
  clicked: noop
}

export default SprkModalMask;