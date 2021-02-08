import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import SprkTextInput from '../SprkTextInput/SprkTextInput';

/**
 * TODO: Remove this component as part of Issue #3780.
 */
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
    this.setState((prevState) => ({
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
          sprk-b-Checkbox
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle"
        >
          <input
            className="sprk-b-Checkbox__input"
            id={revealControlId}
            type="checkbox"
            onClick={this.toggleReveal}
          />
          <label
            htmlFor={revealControlId}
            className="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            {toggleLabel}
          </label>
        </div>
      </SprkTextInput>
    );
  }
}

SprkRevealInput.propTypes = {
  /**
   * A space-separated string of classes to add to
   * the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving
   * as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * A function supplied will be passed
   * the value of the input and then executed,
   * if the valid prop is true. The value
   * returned will be assigned to the value of the input.
   */
  formatter: PropTypes.func,
  /**
   * Text that appears below the input,
   * intended to provide more information to a user.
   */
  helperText: PropTypes.string,
  /**
   * 	If true, will visually hide the label,
   *  using the value of the label prop as screen reader only text.
   */
  hiddenLabel: PropTypes.bool,
  /**
   * Assigned to the `data-id` attribute serving as a
   * unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * The text to render inside the label element.
   */
  label: PropTypes.string,
  /**
   * The name of the icon, when supplied,
   * will be rendered inside the input element.
   */
  leadingIcon: PropTypes.string,
  /**
   * If true, will render the
   * currency icon inside the input element.
   */
  textIcon: PropTypes.bool,
  /**
   * The text explaining the checkbox
   * that toggles the visibility of the input's content.
   */
  toggleLabel: PropTypes.string,
  /**
   * Determines whether to render the
   * component in the valid or the error state.
   */
  valid: PropTypes.bool,
};

SprkRevealInput.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  formatter: (value) => value,
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
