import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TinyDatePicker from 'tiny-date-picker';
import assign from 'lodash/assign';
import uniqueId from 'lodash/uniqueId';

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
        value={isValid && formatter ? formatter(value) : value}
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
     * to document.body
     */
    appendTo: PropTypes.node,
    /**
     * Lang can be used to customize the text that is displayed
     * in the calendar. You can use this to display a different language.
     */
    lang: PropTypes.shape({
      days: PropTypes.arrayOf(PropTypes.string),
      months: PropTypes.arrayOf(PropTypes.string),
    }),
    today: PropTypes.string,
    clear: PropTypes.string,
    close: PropTypes.string,
    /**
     * format {Date} -> string is a function which takes a
     * date and returns a string. It can be used to customize
     * the way a date will look in the input after the user has
     * selected it, and is particularly useful if you're targeting
     * a non-US customer.
     */
    format: PropTypes.func,
    /**
     * parse {string|Date} -> Date is the inverse of format.
     * If you specify one, you probably should specify the other
     * the default parse function handles whatever the new Date
     * constructor handles. Note that parse may be passed either a
     * string or a date.
     */
    parse: PropTypes.func,
    /**
     * mode {'dp-modal'|'dp-below'|'dp-permanent'} specifies the
     * way the date picker should display:
     * 'dp-modal' displays the picker as a modal
     * 'dp-below' displays the date picker as a dropdown
     * 'dp-permanent' displays the date picker as a permanent
     * (always showing) calendar.
     */
    mode: PropTypes.oneOf(['dp-modal', 'dp-below', 'dp-permanent']),
    /**
     * highlightedDate specifies what date to highlight when the
     * date picker is displayed and the associated input has no value.
     */
    highlightedDate: PropTypes.string,
    /**
     * min {string|Date} specifies the minimum date
     * that can be selected (inclusive).
     * All earlier dates will be disabled.
     */
    min: PropTypes.string,
    /**
     * max {string|Date} specifies the maximum date
     * that can be selected (inclusive).
     * All later dates will be disabled.
     */
    max: PropTypes.string,
    /**
     * inRange {Date} -> boolean takes a date and returns
     * true or false. If false, the date
     * will be disabled in the date picker.
     */
    inRange: PropTypes.func,
    /**
     * dateClass {Date} -> string takes a date and returns
     * a CSS class name to be associated
     * with that date in the date picker.
     */
    dateClass: PropTypes.func,
    /**
     * dayOffset {number} specifies which day of the week is
     * considered the first. By default,
     * this is 0 (Sunday). Set it to 1 for Monday, 2 for Tuesday, etc.
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
   * Passes in a function that handles the onBlur of the datepicker.
   */
  onBlur: PropTypes.func,
};

SprkDatePicker.defaultProps = {
  datePickerConfig: {},
  formatter: (value) => value,
  isValid: true,
  id: uniqueId('sprk-datepicker-'),
  isDisabled: false,
};

export default SprkDatePicker;
