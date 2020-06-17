import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';

const SprkCheckbox = (props) => {
  const {
    children,
    variant,
    idString,
    additionalClasses,
    analyticsString,
    additionalCheckboxClasses,
    additionalLabelClasses,
    name,
    value,
    disabled,
    onChangeFunc,
    id,
    ariaDescribedBy,
    ...rest
  } = props;
  const internalId = uniqueId('sprk-checkbox-');
  return (
    <div
      className={classnames(
        'sprk-b-SelectionContainer sprk-b-Checkbox',
        additionalClasses,
        {
          'sprk-b-Checkbox--huge': variant === 'huge',
        },
      )}
      data-analytics={analyticsString}
      data-id={idString}
      data-sprk-input="checkbox"
    >
      <input
        aria-describedby={ariaDescribedBy}
        className={classnames(
          'sprk-b-Checkbox__input',
          additionalCheckboxClasses,
        )}
        data-id={idString}
        disabled={disabled}
        id={id || internalId}
        name={name}
        onChange={onChangeFunc}
        type="checkbox"
        value={value}
        {...rest}
      />
      <label
        className={classnames(
          'sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label',
          additionalLabelClasses,
          {
            'sprk-b-Label--disabled': disabled,
          },
        )}
        htmlFor={id || internalId}
      >
        {children}
      </label>
    </div>
  );
};

SprkCheckbox.propTypes = {
  children: PropTypes.node,
  /**
   * Determines the style of checkbox.
   * Supplying no value will cause the default styles to be used.
   */
  variant: PropTypes.oneOf(['huge']),
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Assigned to the `aria-describedby` attribute of the input used
   * to create relationships between the input and error container.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Assigned to the `id` attribute of the input that will connect
   * relationships between the label and input.
   */
  id: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the checkbox label of the component.
   */
  additionalLabelClasses: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the checkbox input of the component.
   */
  additionalCheckboxClasses: PropTypes.string,
  /**
   * 	Text that appears below the input,
   * intended to provide more information to a user.
   */
  helperText: PropTypes.string,
  /**
   * The error message that will display
   * while in its error state.
   */
  errorMessage: PropTypes.string,
  /**
   * Assigned to the `name` attribute
   * of the rendered input element.
   */
  name: PropTypes.string,
  /**
   * 	Assigned to the `value` attribute
   *  of the rendered input element.
   */
  value: PropTypes.string,
  /**
   * Will render the component in its disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * Passes in a function that handles the onChange of the input.
   */
  onChangeFunc: PropTypes.func,
};

export default SprkCheckbox;
