import React, { Component } from 'react';
import { SprkButton, SprkTextInput } from '@sparkdesignsystem/spark-core-react';

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
    };
    this.isValidName = this.isValidName.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.testFormValidity = this.testFormValidity.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  componentDidUpdate() {
    this.testFormValidity();
  }

  handleNameChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
      [`${name}Valid`]: this.isValidName(value),
      [`${name}ErrorMessage`]: 'You have entered the wrong name.',
    });
  }

  handleEmailChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
      [`${name}Valid`]: this.isValidEmail(value),
      [`${name}ErrorMessage`]: 'You have entered the wrong email.',
    });
  }

  isValidName(value) {
    return value === 'Rob';
  }

  isValidEmail(value) {
    return value === 'sparkdesignsystem@quickenloans.com';
  }

  testFormValidity() {
    const { isValid, NameValid, EmailValid } = this.state;
    const newValidity = (NameValid && EmailValid);
    if (isValid !== newValidity) {
      this.setState({
        isValid: newValidity,
      });
    }
  }

  render() {
    const {
      name, NameValid, NameErrorMessage, email, EmailValid, EmailErrorMessage, isValid,
    } = this.state;
    return (
      <form>
        <SprkTextInput
          onChange={this.handleNameChange}
          label="Name"
          name="Name"
          value={name}
          valid={NameValid}
          placeholder="Enter your first name"
          errorMessage={NameErrorMessage}
        />
        <SprkTextInput
          onChange={this.handleEmailChange}
          label="Email"
          type="email"
          name="Email"
          value={email}
          valid={EmailValid}
          placeholder="email@example.com"
          errorMessage={EmailErrorMessage}
        />
        <SprkButton type="button" disabled={!isValid}>Submit</SprkButton>
      </form>
    );
  }
}

export default FormExample;
