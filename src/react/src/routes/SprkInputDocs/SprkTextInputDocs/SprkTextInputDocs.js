import React from 'react';
import { SprkTextInput } from '@sparkdesignsystem/spark-react';
import {
  isValidPhone,
  isValidDate,
  formatDate,
  formatPhone,
  isValidMonetary,
  formatMonetary,
} from '@sparkdesignsystem/spark/es5/sparkExports';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

class SprkTextInputDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      phone: '',
      monetary: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMonetaryBlur = this.handleMonetaryBlur.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleMonetaryBlur({ target }) {
    const { value } = target;
    this.setState({
      monetary: isValidMonetary(value) ? formatMonetary(value) : value,
    });
  }

  render() {
    const { date, phone, monetary } = this.state;
    return (
      <React.Fragment>
        <ExampleContainer heading="Text">
          <SprkTextInput
            label="Name"
            name="Name"
            placeholder="Enter your first name"
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Input Disabled">
          <SprkTextInput
            label="Name"
            name="Name"
            disabled
            placeholder="Enter your first name"
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Huge">
          <SprkTextInput
            label="Name"
            name="Name"
            placeholder="Enter your first name"
            type="hugeTextInput"
            defaultValue="Default Value"
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Huge Hidden Label">
          <SprkTextInput
            label="Name"
            name="Name"
            placeholder="Enter your first name"
            type="hugeTextInput"
            hiddenLabel
          />
        </ExampleContainer>
        <ExampleContainer heading="Text with Helper">
          <SprkTextInput
            label="Name"
            name="Name"
            helperText="Optional helper text."
            placeholder="Enter your first name"
          />
        </ExampleContainer>
        <ExampleContainer heading="Textarea">
          <SprkTextInput
            label="Message"
            name="Message"
            type="textarea"
            placeholder="Enter your message..."
          />
        </ExampleContainer>
        <ExampleContainer heading="Search">
          <SprkTextInput label="Search" name="Search" placeholder="Search" />
        </ExampleContainer>
        <ExampleContainer heading="Inline Search">
          <SprkTextInput
            leadingIcon="search"
            hiddenLabel
            name="InlineSearch"
            placeholder="Search"
          />
        </ExampleContainer>
        <ExampleContainer heading="Monetary">
          <SprkTextInput
            label="Money Amount"
            textIcon
            name="monetary"
            valid={isValidMonetary(monetary)}
            value={monetary}
            onChange={this.handleChange}
            onBlur={this.handleMonetaryBlur}
            placeholder="0.00"
            errorMessage="Enter valid monetary amount."
          />
        </ExampleContainer>
        <ExampleContainer heading="Phone Number">
          <SprkTextInput
            label="Phone Number"
            name="phone"
            placeholder="(000) 000-0000"
            valid={isValidPhone(phone)}
            value={
              isValidPhone(phone) && formatPhone(phone)
                ? formatPhone(phone)
                : phone
            }
            onChange={this.handleChange}
            errorMessage="Incorrect phone number."
          />
        </ExampleContainer>
        <ExampleContainer heading="Date (no picker)">
          <SprkTextInput
            formatter={formatDate}
            label="Date"
            name="date"
            placeholder="01/01/2019"
            valid={isValidDate(date)}
            value={date}
            onChange={this.handleChange}
            errorMessage="Incorrect date."
          />
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default SprkTextInputDocs;
