import React, { Component } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

/**
 * TODO: Remove this component as part of Issue 3775.
 */
class SprkInputElement extends Component {
  constructor(props) {
    const { value } = props;
    const { defaultValue } = props;
    super(props);

    if (value || defaultValue) {
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
      analyticsString,
      children,
      errorContainerId,
      type,
      id,
      formatter,
      forwardedRef,
      iconRight,
      idString,
      leadingIcon,
      value,
      textIcon,
      hiddenLabel,
      disabled,
      valid,
      ...rest
    } = this.props;
    const { hasValue } = this.state;

    const Element = type === 'textarea' ? 'textarea' : 'input';

    // Adds class for IE and Edge
    const handleOnBlur = (e) => {
      if (e.target.value.length > 0) {
        this.setState({ hasValue: true });
      } else {
        this.setState({ hasValue: false });
      }
    };

    return (
      <Element
        className={classNames({
          'sprk-b-TextArea': type === 'textarea',
          'sprk-b-TextInput sprk-b-InputContainer__input': type !== 'textarea',
          'sprk-b-TextInput--label-hidden':
            type === 'hugeTextInput' && hiddenLabel,
          'sprk-b-TextInput--error': type !== 'textarea' && !valid,
          'sprk-b-TextInput--has-svg-icon':
            type !== 'textarea' && leadingIcon.length > 0,
          'sprk-b-TextInput--has-text-icon': type !== 'textarea' && textIcon,
          'sprk-b-Input--has-floating-label':
            hasValue && type === 'hugeTextInput',
          'sprk-b-InputContainer__input--has-icon-right': iconRight,
        })}
        type={type}
        id={id}
        disabled={disabled}
        ref={forwardedRef}
        data-id={idString}
        data-analytics={analyticsString}
        aria-invalid={!valid}
        aria-describedby={errorContainerId}
        value={valid && formatter(value) ? formatter(value) : value}
        onBlur={(e) => handleOnBlur(e)}
        {...rest}
      >
        {children}
      </Element>
    );
  }
}

SprkInputElement.propTypes = {
  /**
   * Assigned to the `data-analytics` attribute serving as a
   * unique selector for outside libraries to capture data.
   */
  analyticsString: propTypes.string,
  /**
   * Configured by parent and assigned to the `aria-describedby` attribute.
   */
  errorContainerId: propTypes.string,
  /**
   * A function supplied will be passed the value of the input
   * and then executed, if the valid prop is true. The value
   * returned will be assigned to the value of the input.
   */
  formatter: propTypes.func,
  /**
   * Determines type of Input.
   */
  type: propTypes.string,
  /**
   * 	Positions the leadingIcon inside of the input to the right.
   */
  iconRight: propTypes.bool,
  /**
   * Configured by parent and assigned to the `id` attribute.
   */
  id: propTypes.string,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: propTypes.string,
  /**
   * The name of the icon, when supplied,
   * will be rendered inside the input element.
   */
  leadingIcon: propTypes.string,
  /**
   * If true, will render the currency icon inside the input element.
   */
  textIcon: propTypes.bool,
  /**
   * Determines whether to render the
   * component in the valid or the error state.
   */
  valid: propTypes.bool,
  children: propTypes.node,
  disabled: propTypes.bool,
  hiddenLabel: propTypes.bool,
  forwardedRef: propTypes.shape(),
  value: propTypes.string,
  defaultValue: propTypes.string,
};

export default SprkInputElement;
