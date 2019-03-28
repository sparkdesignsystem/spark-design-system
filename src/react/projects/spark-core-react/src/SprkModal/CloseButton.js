import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkIcon from '../SprkIcon/SprkIcon';
import { noop } from 'lodash';

class CloseButton extends Component {

  render() {
    const {
      clickAction
    } = this.props;

    return (
      <button
          className="sprk-c-Modal__icon"
          type="button"
          aria-label="Close Modal"
          onClick={clickAction}


          // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
          // I don't think this line is even working. Rewrite it or delete it.
          // This button should be getting focus in the info variant, not the
          // choice variant (and it should not exist in the wait variant)

          // ref={ref => { ref && ref.focus()}}
        >
          <SprkIcon
            icontype="close"
            iconName="close"
            additionalClasses="sprk-c-Icon--stroke-current-color"
          ></SprkIcon>
        </button>
    )
  }

}

CloseButton.propTypes = {
  // function to call when the button is clicked
  clickAction: PropTypes.func,
}

CloseButton.defaultProps = {
  clickAction: noop,
}

export default CloseButton;