import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TinyDatePicker from 'tiny-date-picker';
import assign from 'lodash/assign';
import SprkTextInput from '../SprkTextInput/SprkTextInput';

/**
 * TODO: Remove this component as part of Issue 3768.
 */

class SprkDatePickerInput extends Component {
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

  render() {
    const { datePickerConfig, ...rest } = this.props;
    return <SprkTextInput forwardedRef={this.datePickerInputRef} {...rest} />;
  }
}

SprkDatePickerInput.propTypes = {
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
    hilightedDate: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    inRange: PropTypes.func,
    dateClass: PropTypes.func,
    dayOffset: PropTypes.number,
  }),
};

SprkDatePickerInput.defaultProps = {
  datePickerConfig: {},
};

export default SprkDatePickerInput;
