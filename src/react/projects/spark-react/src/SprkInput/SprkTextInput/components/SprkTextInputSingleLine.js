import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SprkTextInputSingleLine extends Component {
  render() {
    const {
      valid,
      leadingIcon,
      textIcon,
      type,
      hiddenLabel,
      id,
      analyticsString,
      idString,
      forwardedRef,
      errorContainerId,
      ...rest
    } = this.props;

    return (
      <input
        className={classNames('sprk-b-TextInput sprk-u-Width-100', {
          'sprk-b-TextInput--error': !valid,
          'sprk-b-TextInput--has-svg-icon': leadingIcon.length > 0,
          'sprk-b-TextInput--has-text-icon': textIcon,
          'sprk-b-TextInput--huge': type === 'hugeTextInput',
          'sprk-b-TextInput--label-hidden': type === 'hugeTextInput' && hiddenLabel
        })}
        id={id}
        data-analytics={analyticsString}
        data-id={idString}
        ref={forwardedRef}
        type={type}
        aria-invalid={!valid}
        aria-describedby={errorContainerId}
        {...rest}
      />
    );
  }
}

SprkTextInputSingleLine.propTypes = {
  valid: PropTypes.bool,
  leadingIcon: PropTypes.string,
  textIcon: PropTypes.bool,
  type: PropTypes.string,
  hiddenLabel: PropTypes.bool,
  id: PropTypes.string,
  analyticsString: PropTypes.string,
  idString: PropTypes.string,
};

SprkTextInputSingleLine.defaultProps = {
  valid: true,
  leadingIcon: '',
  textIcon: false,
  type: '',
  hiddenLabel: false,
  id: '',
  analyticsString: '',
  idString: '',
};

export default SprkTextInputSingleLine;
