import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

function ModalMask({ clicked, analyticsString }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // key events are handled by the parent component
    <div
      data-sprk-modal-mask="true"
      onClick={clicked}
      className="sprk-c-ModalMask"
      tabIndex="-1"
      // this component is only visual and has no semantic meaning
      role="presentation"
      data-analytics={analyticsString}
    />
  );
}

ModalMask.propTypes = {
  /**
   * Function to call when mask is clicked
   */
  clicked: PropTypes.func,
  /** The string used for the data-analytics attribute. */
  analyticsString: PropTypes.string,
};

ModalMask.defaultProps = {
  clicked: noop,
};

export default ModalMask;
