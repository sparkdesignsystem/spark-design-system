import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TinyDatePicker from 'tiny-date-picker';
import assign from 'lodash/assign';
import SprkInput from '../SprkInput/SprkInput';

class SprkDatePicker extends Component {
  constructor(props) {
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
  }

  componentDidMount() {
    const { datePickerConfig } = this.props;
    TinyDatePicker(
      this.datePickerInputRef.current,
      assign(this.tdpConfig, datePickerConfig),
    );
  }

  // NEED TO FIGURE OUT FORWARDEDREF
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
    return (
      <SprkInput
        variant={variant}
        additionalClasses={additionalClasses}
        analyticsString={analyticsString}
        formatter={formatter}
        idString={idString}
        isDisabled={isDisabled}
        isValid={isValid}
        ariaDescribedBy={ariaDescribedBy}
        value={value}
        id={id}
        forwardedRef={this.datePickerInputRef}
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
   * to add to the outermost container of the component.
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
   * attribute of the input used
   * to create relationships between the
   * input and error container.
   */
  ariaDescribedBy: PropTypes.string,
};

SprkDatePicker.defaultProps = {
  datePickerConfig: {},
};

export default SprkDatePicker;
