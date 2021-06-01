import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';

const SprkRadioItem = (props) => {
  const {
    children,
    variant,
    idString,
    additionalClasses,
    analyticsString,
    radioAdditionalClasses,
    labelAdditionalClasses,
    name,
    value,
    isDisabled,
    onChange,
    id,
    ariaDescribedBy,
    forwardedRef,
    ...rest
  } = props;
  const internalId = uniqueId('sprk-radio-');
  const onChangeFunc = onChange;
  return (
    <div
      className={classnames(
        'sprk-b-SelectionContainer sprk-b-Radio',
        additionalClasses,
        {
          'sprk-b-Radio--huge': variant === 'huge',
        },
      )}
      data-analytics={analyticsString}
      data-id={idString}
    >
      <input
        aria-describedby={ariaDescribedBy}
        className={classnames('sprk-b-Radio__input', radioAdditionalClasses)}
        data-id={idString}
        disabled={isDisabled}
        id={id || internalId}
        name={name}
        onChange={onChangeFunc}
        type="radio"
        value={value}
        ref={forwardedRef}
        {...rest}
      />
      <label
        className={classnames(
          'sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label',
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

SprkRadioItem.propTypes = {
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * Determines the style of radio.
   * Supplying no value will cause the default styles to be used.
   */
  variant: PropTypes.oneOf(['huge']),
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
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
   * to add to the radio label of the component.
   */
  labelAdditionalClasses: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the radio input of the component.
   */
  radioAdditionalClasses: PropTypes.string,
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
   * A ref passed in will be attached to the radio
   * element of the rendered component.
   */
  forwardedRef: PropTypes.shape(),
};

export default SprkRadioItem;
