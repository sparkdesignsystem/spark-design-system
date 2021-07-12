import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SprkInput extends Component {
  constructor(props) {
    const { value } = props;
    super(props);

    if (value) {
      this.state = {
        hasValue: true,
      };
    } else {
      this.state = {
        hasValue: false,
      };
    }
  }

  render() {
    const {
      variant,
      additionalClasses,
      analyticsString,
      formatter,
      forwardedRef,
      idString,
      isDisabled,
      isValid,
      ariaDescribedBy,
      value,
      id,
      onBlur,
      ...rest
    } = this.props;
    const { hasValue } = this.state;

    // Adds class for IE and Edge
    const handleOnBlur = (e) => {
      // Check to see if the value has changed.
      if (e.target.value.length > 0) {
        this.setState({ hasValue: true });
      } else {
        this.setState({ hasValue: false });
      }
      // Run any custom onBlur functions that were passed in.
      if (onBlur) onBlur(e);
    };

    return (
      <input
        className={classNames('sprk-b-TextInput', additionalClasses, {
          'sprk-b-TextInput--error': !isValid,
          'sprk-b-Input--has-floating-label': hasValue && variant === 'huge',
        })}
        disabled={isDisabled}
        ref={forwardedRef}
        aria-describedby={ariaDescribedBy}
        data-id={idString}
        data-analytics={analyticsString}
        aria-invalid={!isValid}
        value={isValid && formatter && hasValue ? formatter(value) : value}
        onBlur={(e) => handleOnBlur(e)}
        id={id}
        {...rest}
      />
    );
  }
}

SprkInput.propTypes = {
  /**
   * Determines the variant of the input.
   * Supplying no value will cause
   * the default input to be used.
   */
  variant: PropTypes.oneOf(['huge']),
  /**
   * A space-separated string of classes
   * to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as
   * a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * A function supplied will be passed the value of the
   * input and then executed, if the valid prop is true. The value
   * returned will be assigned to the value of the input.
   */
  formatter: PropTypes.func,
  /**
   * Assigned to the `data-id` attribute serving as a
   * unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Determines whether to render the
   * component in the valid or the error state.
   */
  isValid: PropTypes.bool,
  /**
   * A ref passed in will be attached to the
   * input element of the rendered component.
   */
  forwardedRef: PropTypes.oneOfType([PropTypes.shape(), PropTypes.func]),
  /**
   * Will render the component in it's disabled state.
   */
  isDisabled: PropTypes.bool,
  /**
   * 	Assigned to the `value` attribute
   *  of the rendered input element.
   */
  value: PropTypes.string,
  /**
   * Assigned to the `id` attribute
   * of the rendered input element.
   */
  id: PropTypes.string.isRequired,
  /**
   * Assigned to the `aria-describedby`
   * attribute. Used to create
   * relationships between the
   * component and text that describes it,
   * such as helper text or an error field.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Passes in a function that handles the onBlur of the input.
   */
  onBlur: PropTypes.func,
};

SprkInput.defaultProps = {
  formatter: (value) => value,
  forwardedRef: React.createRef(),
  isValid: true,
  isDisabled: false,
};

export default SprkInput;
