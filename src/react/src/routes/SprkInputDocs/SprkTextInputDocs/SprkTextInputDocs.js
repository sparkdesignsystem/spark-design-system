import React from 'react';
import { SprkTextInput } from '@sparkdesignsystem/spark-core-react';
import {
  isValidPhone, formatPhone, isValidMonetary, formatMonetary,
} from '@sparkdesignsystem/spark-core/es5/sparkCoreExports';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

class SprkTextInputDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      monetary: formatMonetary(value),
    });
  }

  render() {
    const { phone, monetary } = this.state;
    return (
      <React.Fragment>
        <ExampleContainer heading="Text">
          <SprkTextInput
            label="Name"
            name="Name"
            placeholder="Enter your first name"
          />
        </ExampleContainer>
        <ExampleContainer heading="Search">
          <SprkTextInput
            label="Search"
            name="Search"
            placeholder="Search"
          />
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
          />
        </ExampleContainer>
        <ExampleContainer heading="Phone Number">
          <SprkTextInput
            label="Phone Number"
            name="phone"
            placeholder="(000) 000-0000"
            valid={isValidPhone(phone)}
            value={isValidPhone(phone) && formatPhone(phone) ? formatPhone(phone) : phone}
            onChange={this.handleChange}
            errorMessage="Incorrect phone number."
          />
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default SprkTextInputDocs;
