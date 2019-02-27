import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkIcon from '../SprkIcon/SprkIcon';

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
          ref={ref => { ref && ref.focus()}}
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
  // classes to add to the class of the rendered element
  clickAction: PropTypes.func,
}

CloseButton.defaultProps = {
  clickAction: function(){},
}

export default CloseButton;