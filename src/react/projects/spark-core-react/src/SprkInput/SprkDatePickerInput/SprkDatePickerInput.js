import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TinyDatePicker from 'tiny-date-picker';
import SprkTextInput from '../SprkTextInput/SprkTextInput';

class SprkDatePickerInput extends Component {
  constructor(props) {
    super(props);
    this.datePickerInputRef = React.createRef();
    this.tdpConfig = {
      mode: 'dp-below',
      lang: {
        days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      },
      min: '01/1/2008',
      max: '01/1/2068',
      format: date => date
        .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
        .replace(/[^ -~]/g, ''),
    };
  }

  componentDidMount() {
    const { datePickerConfig } = this.props;
    TinyDatePicker(
      this.datePickerInputRef.current,
      Object.assign(this.tdpConfig, datePickerConfig),
    );
  }

  render() {
    const { datePickerConfig, ...rest } = this.props;
    return <SprkTextInput forwardedRef={this.datePickerInputRef} {...rest} />;
  }
}

SprkDatePickerInput.propTypes = {
  datePickerConfig: PropTypes.shape(),
};

SprkDatePickerInput.defaultProps = {
  datePickerConfig: {},
};

export default SprkDatePickerInput;
