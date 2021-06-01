import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';
import SprkInputIconCheck from '../components/SprkInputIconCheck/SprkInputIconCheck';
import SprkLabelLocationCheck from '../components/SprkLabelLocationCheck/SprkLabelLocationCheck';
import SprkInputElement from '../components/SprkInputElement/SprkInputElement';

/**
 * TODO: Remove this component as part of Issue #3782.
 */
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
      children,
      errorMessage,
      formatter,
      forwardedRef,
      helperText,
      hiddenLabel,
      iconRight,
      idString,
      label,
      disabled,
      leadingIcon,
      narrowWidth,
      textIcon,
      type,
      valid,
      value,
      ariaDescribedBy,
      ...rest
    } = this.props;
    const { id, errorContainerId } = this.state;

    return (
      <div
        className={classNames('sprk-b-InputContainer', additionalClasses, {
          'sprk-b-InputContainer--huge': type === 'hugeTextInput',
        })}
      >
        <SprkInputIconCheck
          leadingIcon={leadingIcon}
          textIcon={textIcon}
          narrowWidth={narrowWidth}
          iconRight={iconRight}
        >
          <SprkLabelLocationCheck
            type={type}
            label={label}
            leadingIcon={leadingIcon}
            hiddenLabel={hiddenLabel}
            id={id}
            disabled={disabled}
          >
            <SprkInputElement
              id={id}
              analyticsString={analyticsString}
              idString={idString}
              forwardedRef={forwardedRef}
              type={type}
              formatter={formatter}
              errorContainerId={valid ? undefined : errorContainerId}
              hiddenLabel={hiddenLabel}
              valid={valid}
              leadingIcon={leadingIcon}
              textIcon={textIcon}
              value={value}
              iconRight={iconRight}
              disabled={disabled}
              ariaDescribedBy={ariaDescribedBy}
              {...rest}
            />
          </SprkLabelLocationCheck>
        </SprkInputIconCheck>
        {children}
        {helperText.length > 0 && (
          <div className="sprk-b-HelperText">{helperText}</div>
        )}
        {!valid && (
          <SprkErrorContainer id={errorContainerId} message={errorMessage} />
        )}
      </div>
    );
  }
}

SprkTextInput.propTypes = {
  /**
   * A space-separated string of classes to add
   * to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a
   * unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * The error message that will display
   * while in its error state.
   */
  errorMessage: PropTypes.string,
  /**
   * A function supplied will be passed the value of the input
   * and then executed, if the valid prop is true. The value returned
   * will be assigned to the value of the input.
   */
  formatter: PropTypes.func,
  /**
   * A ref passed in will be attached to the input
   * element of the rendered component.
   */
  forwardedRef: PropTypes.oneOf(PropTypes.shape(), PropTypes.func),
  /**
   * 	Text that appears below the input, intended
   * to provide more information to a user.
   */
  helperText: PropTypes.string,
  /**
   * If true, will visually hide the label,
   * using the value of the label prop as screen reader only text.
   */
  hiddenLabel: PropTypes.bool,
  /**
   * 	Positions the leadingIcon inside of the input to the right.
   */
  iconRight: PropTypes.bool,
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
   * Sets the max width of the input
   * for smaller values like percentages, age, etc.
   */
  narrowWidth: PropTypes.bool,
  /**
   * The name of the icon to render inside the input element.
   */
  leadingIcon: PropTypes.string,
  /**
   * If true, will render the currency icon inside the input element.
   */
  textIcon: PropTypes.bool,
  /**
   * Determines whether to render the
   * component in the valid or the error state.
   */
  valid: PropTypes.bool,
  /**
   * 	If true, will render the component in the disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * Assigned to the `aria-describedby`
   * attribute. Used to create
   * relationships between the
   * component and text that describes it,
   * such as helper text or an error field.
   */
  ariaDescribedBy: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

SprkTextInput.defaultProps = {
  formatter: (value) => value,
  forwardedRef: React.createRef(),
  helperText: '',
  label: 'Text Input Label',
  leadingIcon: '',
  valid: true,
};

export default SprkTextInput;
