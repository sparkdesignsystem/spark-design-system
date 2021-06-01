import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';

const SprkCheckboxItem = (props) => {
  const {
    children,
    variant,
    idString,
    additionalClasses,
    analyticsString,
    checkboxAdditionalClasses,
    labelAdditionalClasses,
    name,
    value,
    isDisabled,
    onChange,
    id,
    ariaDescribedBy,
    isVisibilityToggle,
    forwardedRef,
    ...rest
  } = props;
  const internalId = uniqueId('sprk-checkbox-');
  const onChangeFunc = onChange;

  return (
    <div
      className={classnames(
        'sprk-b-SelectionContainer sprk-b-Checkbox',
        additionalClasses,
        {
          'sprk-b-Checkbox--huge': variant === 'huge',
          'sprk-b-InputContainer__visibility-toggle': isVisibilityToggle,
        },
      )}
      data-analytics={analyticsString}
      data-id={idString}
    >
      <input
        aria-describedby={ariaDescribedBy}
        className={classnames(
          'sprk-b-Checkbox__input',
          checkboxAdditionalClasses,
        )}
        data-id={idString}
        disabled={isDisabled}
        id={id || internalId}
        name={name}
        onChange={onChangeFunc}
        type="checkbox"
        value={value}
        ref={forwardedRef}
        {...rest}
      />
      <label
        className={classnames(
          'sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label',
          labelAdditionalClasses,
          {
            'sprk-b-Label--disabled': isDisabled,
          },
        )}
        htmlFor={id || internalId}
      >
        {children}
      </label>
    </div>
  );
};

SprkCheckboxItem.propTypes = {
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
  /**
   * Assigned to the `aria-describedby`
   * attribute. Used to create
   * relationships between the
   * component and text that describes it,
   * such as helper text or an error field.
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
  labelAdditionalClasses: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the checkbox input of the component.
   */
  checkboxAdditionalClasses: PropTypes.string,
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
  isDisabled: PropTypes.bool,
  /**
   * Passes in a function that handles the onChange of the input.
   */
  onChange: PropTypes.func,
  /**
   * If `true`, the checkbox item will receive styling to make it a
   * visibility toggle. Use this for "Show Password" checkboxes.
   */
  isVisibilityToggle: PropTypes.bool,
  /**
   * Assigned to the `data-id` attribute
   * serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
  /**
   * A ref passed in will be attached to the checkbox
   * element of the rendered component.
   */
  forwardedRef: PropTypes.oneOf([PropTypes.shape(), PropTypes.func]),
};

export default SprkCheckboxItem;
