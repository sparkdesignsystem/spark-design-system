import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// import formatPhone from '../vanilla/phoneInput';
// import isValidMonetary from '../vanilla/monetaryInput';
// import formatDate from '../vanilla/dateInput';
// import isValidDate from '../vanilla/dateInput';
// import isValidPhone from '../vanilla/phoneInput';
// import formatSSN from '../vanilla/ssnInput';
// import isValidSSN from '../vanilla/ssnInput';
import SprkDatePickerInput from './SprkDatePickerInput';
import SprkSelectionInput from './SprkSelectionInput';
import SprkRevealInput from './SprkRevealInput';
import SprkTextInput from './SprkTextInput';

const stories = storiesOf('Base|Inputs', module);

stories.addDecorator(withKnobs);

stories.add('Text Input', () => (
  <SprkTextInput
    label={boolean('label', 'Text Input Label')}
    name="text-input-label"
    valid={boolean('valid', true)}
    disabled={boolean('disabled', false)}
    errorMessage="There is an error on this field."
  />
))
  .add('Huge Text Input', () => (
    <SprkTextInput
      type="hugeTextInput"
      label="Text Input Label"
      name="text-input-label"
    />
  ))
  .add('Checkboxes', () => (
    <SprkSelectionInput
      groupLabel="Checkbox Input"
      choices={[
        {
          label: 'Checkbox Item 1',
          name: 'check[]',
          value: 'item-1',
        },
        {
          label: 'Checkbox Item 2',
          name: 'check[]',
          value: 'item-2',
        },
        {
          label: 'Checkbox Item 3',
          name: 'check[]',
          value: 'item-2',
        },
      ]}
      variant="checkbox"
    />
  ))
  .add('Radio Buttons', () => (
    <SprkSelectionInput
      groupLabel="Radio Group Label"
      choices={[
        {
          label: 'Radio Item 1',
          name: 'radio[]',
          value: 'item-1',
        },
        {
          label: 'Radio Item 2',
          name: 'radio[]',
          value: 'item-2',
        },
        {
          label: 'Radio Item 3',
          name: 'radio[]',
          value: 'item-2',
        },
      ]}
      variant="radio"
    />
  ))
  .add('Select', () => (
    <SprkSelectionInput
      choices={[
        {
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
        {
          label: 'Option 3',
          value: 'option-3',
        },
        {
          label: 'Grouped Options',
          options: [
            {
              label: 'Grouped Option 1',
              value: 'grouped-option-1',
            },
            {
              label: 'Grouped Option 2',
              value: 'grouped-option-2',
            },
            {
              label: 'Grouped Option 3',
              value: 'grouped-option-3',
            },
          ],
        },
      ]}
      name="name"
      variant="select"
    />
  ))
  .add('Textarea', () => (
    <SprkTextInput
      label="Description"
      name="description"
      type="textarea"
    />
  ))
  .add('SSN Input', () => (
    <SprkRevealInput
      label="Social Security Number"
      toggleLabel="Show SSN"
      name="ssn"
    />
  ))
  .add('Search Input', () => (
    <SprkTextInput
      label="Search"
      name="Search"
      placeholder="Search"
    />
  ))
  .add('Inline Search Input', () => (
    <SprkTextInput
      leadingIcon="search"
      hiddenLabel
      name="InlineSearch"
      placeholder="Search"
    />
  ))
  .add('Monetary Input', () => (
    <SprkTextInput
      label="Payment"
      textIcon
      name="monetary"
      placeholder="0.00"
    />
  ))
  .add('Password Input', () => (
    <SprkRevealInput
      label="Password"
      toggleLabel="Show Password"
      name="password-1"
    />
  ))
  .add('Helper Text', () => (
    <SprkRevealInput
      label="Password"
      toggleLabel="Show Password"
      name="password-1"
    />
  ))
  .add('Phone Number Input', () => (
    <SprkTextInput
      label="Phone Number"
      name="phone"
      placeholder="(000) 000-0000"
      errorMessage="Incorrect phone number."
    />
  ))
  .add('Date Input', () => (
    <SprkTextInput
      label="Date"
      name="date"
      placeholder="01/01/2019"
      errorMessage="Incorrect date."
    />
  ))
  .add('Date Picker', () => (
    <SprkDatePickerInput
      name="date"
      placeholder={text('placeholder', '01/01/2019')}
      errorMessage="Incorrect date."
      label={text('label', 'Date')}
      valid={boolean('valid', true)}
      disabled={boolean('disabled', false)}
    />
  ));
