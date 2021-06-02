import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

const SprkTextarea = ({
  additionalClasses,
  analyticsString,
  forwardedRef,
  idString,
  isDisabled,
  id,
  value,
  formatter,
  onChange,
  ariaDescribedBy,
  isValid,
  ...rest
}) => {
  return (
    <textarea
      className={classNames('sprk-b-TextArea', additionalClasses, {
        'sprk-b-TextArea--error': !isValid,
      })}
      id={id}
      disabled={isDisabled}
      ref={forwardedRef}
      data-id={idString}
      value={isValid && formatter ? formatter(value) : value}
      onChange={onChange}
      data-analytics={analyticsString}
      aria-invalid={!isValid}
      aria-describedby={ariaDescribedBy}
      {...rest}
    />
  );
};

SprkTextarea.propTypes = {
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
  /**
   * A ref passed in will be attached to the textarea
   * element of the rendered component.
   */
  forwardedRef: PropTypes.oneOfType([PropTypes.shape(), PropTypes.func]),
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
   * Assigned to the `id` attribute
   * of the rendered textarea element.
   * A custom ID will
   * be added if this is not supplied.
   */
  id: PropTypes.string,
  /**
   * Assigned to the `aria-describedby`
   * attribute. Used to create
   * relationships between the
   * component and text that describes it,
   * such as helper text or an error field.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Will render the component in it's disabled state.
   */
  isDisabled: PropTypes.bool,
  /**
   * A function supplied will be passed the value of the
   * textarea and then executed, if the valid prop is true. The value
   * returned will be assigned to the value of the textarea.
   */
  formatter: PropTypes.func,
  /**
   * Assigned to the `value` attribute
   * of the rendered input element.
   */
  value: PropTypes.string,
  /**
   * A function that handles the
   * onChange of the textarea.
   */
  onChange: PropTypes.func,
};

SprkTextarea.defaultProps = {
  forwardedRef: React.createRef(),
  isValid: true,
  id: uniqueId('sprk-textarea-'),
};

export default SprkTextarea;
