import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TinyDatePicker from 'tiny-date-picker';
import assign from 'lodash/assign';

class SprkDatePicker extends Component {
  constructor(props) {
    const { value } = props;
    super(props).datePickerInputRef = React.createRef();
    this.tdpConfig = {
      mode: 'dp-below',
      lang: {
        days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      },
      min: '01/1/2008',
      max: '01/1/2068',
      format: (date) =>
        date
          .toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          })
          .replace(/[^ -~]/g, ''),
    };

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

  componentDidMount() {
    const { datePickerConfig } = this.props;
    TinyDatePicker(
      this.datePickerInputRef.current,
      assign(this.tdpConfig, datePickerConfig),
    );
  }

  render() {
    const {
      datePickerConfig,
      variant,
      additionalClasses,
      analyticsString,
      formatter,
      idString,
      isDisabled,
      isValid,
      ariaDescribedBy,
      value,
      id,
      onBlur,
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
      // Run any custom onBlur functions that were passed in.
      if (onBlur) onBlur(e);
    };

    return (
      <input
        className={classNames('sprk-b-TextInput', additionalClasses, {
          'sprk-b-TextInput--error': !isValid,
          'sprk-b-Input--has-floating-label': hasValue && variant === 'huge',
          'sprk-b-TextInput--has-svg-icon': variant !== 'huge',
        })}
        disabled={isDisabled}
        ref={this.datePickerInputRef}
        aria-describedby={ariaDescribedBy}
        data-id={idString}
        data-analytics={analyticsString}
        aria-invalid={!isValid}
        value={isValid && formatter && hasValue ? formatter(value) : value}
        onBlur={(e) => handleOnBlur(e)}
        id={id}
        {...rest}
      />
    );
  }
}

SprkDatePicker.propTypes = {
  /**
   * Exposes configuration provided
   * by tiny-date-picker, see [github](https://github.com/chrisdavies/tiny-date-picker) for documentation.
   */
  datePickerConfig: PropTypes.shape({
    /**
     * What DOM element the Date Picker will be added to. This defaults
     * to `document.body`.
     */
    appendTo: PropTypes.node,
    /**
     * Lang can be used to display a different language in the calendar.
     */
    lang: PropTypes.shape({
      days: PropTypes.arrayOf(PropTypes.string),
      months: PropTypes.arrayOf(PropTypes.string),
    }),
    today: PropTypes.string,
    clear: PropTypes.string,
    close: PropTypes.string,
    /**
     * Takes a Date and returns a string. Customizes
     * how the date will look in the input after user
     * selects a date. Useful for outputting non-standard date formats.
     */
    format: PropTypes.func,
    /**
     * May be passed either a
     * string or a Date and returns a Date.
     * If `format` is specified, it is recommended
     * that `parse` is also specified.
     */
    parse: PropTypes.func,
    /**
     * Specifies the way the date picker should be displayed.
     * 'dp-modal' displays the picker as a modal.
     * 'dp-below' displays the date picker as a dropdown.
     * 'dp-permanent' displays the date picker as a calendar
     * that is always showing.
     */
    mode: PropTypes.oneOf(['dp-modal', 'dp-below', 'dp-permanent']),
    /**
     * Specifies what date to highlight when the
     * date picker is displayed and the associated input has no value.
     */
    highlightedDate: PropTypes.string,
    /**
     * Specifies the minimum date
     * that can be selected.
     */
    min: PropTypes.string,
    /**
     * Specifies the maximum date
     * that can be selected.
     */
    max: PropTypes.string,
    /**
     * Takes a Date and returns
     * true or false. If false, the date
     * will be disabled in the date picker.
     */
    inRange: PropTypes.func,
    /**
     * Takes a Date and returns
     * a CSS class name to be associated
     * with that date in the date picker.
     */
    dateClass: PropTypes.func,
    /**
     * Specifies which day of the week is
     * considered the first. Sunday is 0, Monday is 1, etc.
     */
    dayOffset: PropTypes.number,
  }),
  /**
   * Determines the style of the input container.
   * Supplying no value will cause
   * the default styles to be used.
   */
  variant: PropTypes.oneOf(['huge']),
  /**
   * A space-separated string of classes
   * to add to the component.
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
   */
  id: PropTypes.string.isRequired,
  /**
   * Assigned to the `aria-describedby`
   * attribute. Used to create
   * relationships between the
   * component and text that describes it,
   * such as helper text or an error field.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Passes in a function that handles the onBlur of the datepicker.
   */
  onBlur: PropTypes.func,
};

SprkDatePicker.defaultProps = {
  datePickerConfig: {},
  formatter: (value) => value,
  isValid: true,
  isDisabled: false,
};

export default SprkDatePicker;
