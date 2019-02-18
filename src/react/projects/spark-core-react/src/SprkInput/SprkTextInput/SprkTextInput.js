import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';

class SprkTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      errorContainerId: uniqueId(),
    };
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      errorMessage,
      formatter,
      idString,
      label,
      type,
      valid,
      value,
      ...rest
    } = this.props;
    const {
      id, errorContainerId,
    } = this.state;

    return (
      <div className={classNames('sprk-b-InputContainer', additionalClasses)}>
        <label htmlFor={id} className="sprk-b-Label">
          { label }
        </label>
        <input
          className={classNames('sprk-b-TextInput sprk-u-Width-100', { 'sprk-b-TextInput--error': !valid })}
          id={id}
          data-analytics={analyticsString}
          data-id={idString}
          type={type}
          aria-invalid={!valid}
          aria-describedby={errorContainerId}
          value={valid && formatter(value) ? formatter(value) : value}
          {...rest}
        />
        { !valid && <SprkErrorContainer id={errorContainerId} message={errorMessage} /> }
      </div>
    );
  }
}

SprkTextInput.propTypes = {
  additionalClasses: PropTypes.string,
  analyticsString: PropTypes.string,
  formatter: PropTypes.func,
  idString: PropTypes.string,
  label: PropTypes.string,
  valid: PropTypes.bool,
};

SprkTextInput.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  formatter: value => value,
  idString: '',
  label: 'Text Input Label',
  valid: true,
};

export default SprkTextInput;
