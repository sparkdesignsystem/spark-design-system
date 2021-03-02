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
    };

    return (
      <input
        className={classNames('sprk-b-TextInput', additionalClasses, {
          'sprk-b-TextInput--error': !isValid,
          'sprk-b-Input--has-floating-label': hasValue && variant === 'huge',
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
    appendTo: PropTypes.node,
    lang: PropTypes.shape({
      days: PropTypes.arrayOf(PropTypes.string),
      months: PropTypes.arrayOf(PropTypes.string),
    }),
    today: PropTypes.string,
    clear: PropTypes.string,
    close: PropTypes.string,
    format: PropTypes.func,
    parse: PropTypes.func,
    mode: PropTypes.oneOf(['dp-modal', 'dp-below', 'dp-permanent']),
    highlightedDate: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    inRange: PropTypes.func,
    dateClass: PropTypes.func,
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
};

SprkDatePicker.defaultProps = {
  datePickerConfig: {},
  formatter: (value) => value,
  isValid: true,
  id: uniqueId('sprk-'),
  isDisabled: false,
};

export default SprkDatePicker;
