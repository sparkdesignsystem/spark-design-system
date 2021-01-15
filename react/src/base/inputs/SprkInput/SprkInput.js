import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

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
      value,
      ...rest
    } = this.props;
    const { hasValue } = this.state;

    // Adds class for IE and Edge
    const handleOnBlur = (e) => {
      if (e.target.value.length > 0) {
        this.setState({ hasValue: true });
      } else {
        this.setState({ hasValue: false });
      }
    };

    return (
      <input
        className={classNames(
          'sprk-u-Width-100 sprk-b-TextInput',
          additionalClasses,
          {
            'sprk-b-TextInput--error': !isValid,
            'sprk-b-Input--has-floating-label': hasValue && variant === 'huge',
          },
        )}
        disabled={isDisabled}
        ref={forwardedRef}
        data-id={idString}
        data-analytics={analyticsString}
        aria-invalid={!isValid}
        value={isValid && formatter(value) ? formatter(value) : value}
        onBlur={(e) => handleOnBlur(e)}
        {...rest}
      />
    );
  }
}

SprkInput.propTypes = {
  /**
   * Determines the style of the input container.
   * Supplying no value will cause
   * the default styles to be used.
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
  forwardedRef: PropTypes.shape(),
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
   * A custom ID will
   * be added if this is not supplied.
   */
  id: PropTypes.string,
};

SprkInput.defaultProps = {
  formatter: (value) => value,
  forwardedRef: React.createRef(),
  isValid: true,
  id: uniqueId('sprk-'),
  isDisabled: false,
};

export default SprkInput;
