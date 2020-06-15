import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';

class SprkCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
    };
  }

  render() {
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
      ...rest
    } = this.props;
    const { id } = this.state;
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
      >
        <input
          className={classnames(
            'sprk-b-Checkbox__input',
            additionalCheckboxClasses,
          )}
          disabled={disabled}
          id={id}
          type="checkbox"
          aria-describedby={`errorcontainer-${id}`}
          name={name}
          value={value}
          onChange={onChangeFunc}
          {...rest}
        />
        <label
          htmlFor={id}
          className={classnames(
            'sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label',
            additionalLabelClasses,
            {
              'sprk-b-Label--disabled': disabled,
            },
          )}
        >
          {children}
        </label>
      </div>
    );
  }
}

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
   * Determines whether to render
   * the component in the valid or the error state.
   */
  valid: PropTypes.bool,
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
