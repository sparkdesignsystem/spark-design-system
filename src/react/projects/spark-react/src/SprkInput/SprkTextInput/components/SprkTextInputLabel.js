import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SprkTextInputLabel extends Component {

  render() {
    const {
      leadingIcon,
      hiddenLabel,
      id,
      label
    } = this.props;

    return (
      <label
        htmlFor={id}
        className={classNames('sprk-b-Label', {
          // TODO: Huge input with icon
          'sprk-b-Label--with-icon': leadingIcon.length > 0,
          'sprk-u-ScreenReaderText': hiddenLabel,
        })}
      >
        {label}
      </label>
    );
  }
}

SprkTextInputLabel.propTypes = {
  hiddenLabel: PropTypes.bool,
  leadingIcon: PropTypes.string,
  label: PropTypes.string,
};

SprkTextInputLabel.defaultProps = {
  hiddenLabel: false,
  leadingIcon: '',
  label: 'Text Input Label',
};

export default SprkTextInputLabel;
