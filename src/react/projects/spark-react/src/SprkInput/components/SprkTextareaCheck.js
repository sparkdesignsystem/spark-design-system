import React, { Component } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

class SprkTextareaCheck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasValue: this.props.value,
    };

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    /*
     * Check if Huge Select has a value when it first mounts.
     * Set presence of value in state.
     */
    if (this.props.variant === 'hugeTextInput') {
      if (this.inputRef.current.value !== '') {
        this.setState({
          hasValue: true,
        });
      }
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
    const handleOnBlur = e => {
      if (e.target.value.length > 0) {
        this.setState({ hasValue: true });
      } else {
        this.setState({ hasValue: false });
      }
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
        htmlFor={id}
        disabled={disabled}
        ref={forwardedRef}
        data-id={idString}
        data-analytics={analyticsString}
        aria-invalid={!valid}
        aria-describedby={errorContainerId}
        value={valid && formatter(value) ? formatter(value) : value}
        onBlur={e => handleOnBlur(e)}
        ref={this.inputRef}
        {...rest}
      >
        {children}
      </Element>
    );
  }
}

SprkTextareaCheck.propTypes = {
  analyticsString: propTypes.string,
  errorContainerId: propTypes.string,
  formatter: propTypes.func,
  type: propTypes.string,
  iconRight: propTypes.bool,
  id: propTypes.string,
  idString: propTypes.string,
  leadingIcon: propTypes.string,
  textIcon: propTypes.bool,
  valid: propTypes.bool,
};

export default SprkTextareaCheck;
