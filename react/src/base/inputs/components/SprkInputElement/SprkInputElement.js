import React, { Component } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

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
      ariaDescribedBy,
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

    const getAriaDescribedBy = () => {
      if (errorContainerId && ariaDescribedBy) {
        return `${errorContainerId} ${ariaDescribedBy}`;
      }

      if (ariaDescribedBy) return ariaDescribedBy;

      if (errorContainerId) return errorContainerId;

      return undefined;
    };

    return (
      <Element
        className={classNames('sprk-u-Width-100', {
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
        aria-describedby={getAriaDescribedBy()}
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
   * Assigned to the `data-analytics` attribute serving as a unique selector
   * for outside libraries to capture data.
   */
  analyticsString: propTypes.string,
  /**
   * Configured by parent and included in the `aria-describedby` attribute.
   */
  errorContainerId: propTypes.string,
  /**
   * A function supplied will be passed the value of the input and then
   * executed, if the valid prop is true. The value returned will be
   * assigned to the value of the input.
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
   * Assigned to the `data-id` attribute serving as a unique selector for
   * automated tools.
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
  /**
   * A space-separated string of valid HTML Ids to add to the aria-describedby
   * attribute on the Input.
   */
  ariaDescribedBy: propTypes.string,
};

export default SprkInputElement;
