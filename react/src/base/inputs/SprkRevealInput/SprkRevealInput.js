import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import SprkTextInput from '../SprkTextInput/SprkTextInput';

class SprkRevealInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealControlId: uniqueId(),
      isRevealed: false,
    };
    this.toggleReveal = this.toggleReveal.bind(this);
  }

  toggleReveal() {
    this.setState(prevState => ({
      isRevealed: !prevState.isRevealed,
    }));
  }

  render() {
    const { isRevealed, revealControlId } = this.state;
    const { toggleLabel, ...rest } = this.props;
    return (
      <SprkTextInput type={isRevealed ? 'text' : 'password'} {...rest}>
        <div
          className="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle"
        >
          <input
            id={revealControlId}
            type="checkbox"
            onClick={this.toggleReveal}
          />
          <label
            htmlFor={revealControlId}
            className="sprk-b-Label sprk-b-Label--inline"
          >
            {toggleLabel}
          </label>
        </div>
      </SprkTextInput>
    );
  }
}

SprkRevealInput.propTypes = {
  additionalClasses: PropTypes.string,
  analyticsString: PropTypes.string,
  formatter: PropTypes.func,
  helperText: PropTypes.string,
  hiddenLabel: PropTypes.bool,
  idString: PropTypes.string,
  label: PropTypes.string,
  leadingIcon: PropTypes.string,
  textIcon: PropTypes.bool,
  toggleLabel: PropTypes.string,
  valid: PropTypes.bool,
};

SprkRevealInput.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  formatter: value => value,
  helperText: '',
  hiddenLabel: false,
  idString: '',
  label: 'Text Input Label',
  leadingIcon: '',
  textIcon: false,
  toggleLabel: 'Show Value',
  valid: true,
};

export default SprkRevealInput;
