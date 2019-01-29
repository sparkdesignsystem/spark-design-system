import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkHighlightBoard extends Component {

  render() {
    const {
      additionalClasses,
      idString,
      ...other
    } = this.props;

    const classNames = classnames(
      'sprk-c-HighlightBoard',
      additionalClasses, {
      },
    );

    return (
      <div className={classNames} data-id={idString} {...other}>

      </div>
    );
  }
}

SprkHighlightBoard.propTypes = {
  // The variant that determines the class names
  variant: PropTypes.oneOf(['info', 'success', 'fail']),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the highlight board
  additionalClasses: PropTypes.string
};

export default SprkHighlightBoard;
