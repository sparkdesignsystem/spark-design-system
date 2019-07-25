import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SprkTextInputTextArea extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: props.value,
    };
  }

  handleChange(e) {
    this.setState({inputValue: e.target.value})
  }

  render() {
    const {
      id,
      analyticsString,
      idString,
      type,
      valid,
      errorContainerId,
      forwardedRef,
      value,
      ...rest
    } = this.props;
    return (

      <textarea
        className="sprk-b-TextArea sprk-u-Width-100"
        id={id}
        data-analytics={analyticsString}
        data-id={idString}
        type={type}
        aria-invalid={!valid}
        aria-describedby={errorContainerId}
        value={this.state.inputValue}
        onChange={(e) => this.handleChange(e)}
        {...rest}
      />
    );
  }
}

SprkTextInputTextArea.propTypes = {
  analyticsString: PropTypes.string,
  id: PropTypes.string,
  idString: PropTypes.string,
  type: PropTypes.string,
  valid: PropTypes.bool,
  errorContainerId: PropTypes.string,
};

SprkTextInputTextArea.defaultProps = {
  analyticsString: '',
  id: '',
  idString: '',
  type: '',
  valid: true,
  errorContainerId: '',
};

export default SprkTextInputTextArea;
