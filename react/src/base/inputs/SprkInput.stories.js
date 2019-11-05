import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import SprkDatePickerInput from './SprkDatePickerInput/SprkDatePickerInput';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import SprkTextInput from './SprkTextInput/SprkTextInput';

export default {
  title: 'Components|Input',
  decorators: [
    withKnobs,
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const textInput = () => (
  <SprkTextInput
    label={text('label', 'Text Input Label')}
    name="text-input-label"
    valid={boolean('valid', true)}
    disabled={boolean('disabled', false)}
    errorMessage="There is an error on this field."
  />
);

textInput.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const hugeTextInput = () => (
  <SprkTextInput
    type="hugeTextInput"
    label={text('label', 'Text Input Label')}
    name="text-input-label"
    valid={boolean('valid', true)}
    disabled={boolean('disabled', false)}
    placeholder="Huge Text Placeholder"
    errorMessage="There is an error on this field."
  />
);

hugeTextInput.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const hugeTextInputWithDefaultValue = () => (
  <SprkTextInput
    type="hugeTextInput"
    label={text('label', 'Text Input Label')}
    name="text-input-label"
    valid={boolean('valid', true)}
    disabled={boolean('disabled', false)}
    placeholder="Huge Text Placeholder"
    errorMessage="There is an error on this field."
    defaultValue="Default Value"
  />
);

hugeTextInputWithDefaultValue.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const checkbox = () => (
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
);

checkbox.story = {
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const radioButton = () => (
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
);

radioButton.story = {
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const selectBox = () => (
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
    label="Select Box Label"
  />
);

selectBox.story = {
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const hugeSelectBox = () => (
  <SprkSelectionInput
    label="Select Box Label"
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
    variant="hugeSelect"
    name="select"
    valid
    erorMessage="There is an error in the field."
    defaultValue=""
  />
);

hugeSelectBox.story = {
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const textarea = () => (
  <SprkTextInput label="Description" name="description" type="textarea" />
);

textarea.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const ssnInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
  />
);

ssnInput.story = {
  name: 'SSN Input',
  parameters: {
    jest: [
      'SprkRevealInput',
    ]
  },
};

export const searchInput = () => (
  <SprkTextInput label="Search" name="Search" placeholder="Search" />
);

searchInput.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  }
};

export const inlineSearchInput = () => (
  <SprkTextInput
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
  />
);

inlineSearchInput.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const monetaryInput = () => (
  <SprkTextInput label="Payment" textIcon name="monetary" placeholder="0.00" />
);

monetaryInput.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const percentageInput = () => (
  <SprkTextInput
    label="Percentage"
    iconRight
    leadingIcon="percent"
    narrowWidth
    name="percentage"
    type="tel"
  />
);

export const passwordInput = () => (
  <SprkRevealInput
    label="Password"
    toggleLabel="Show Password"
    name="password-1"
  />
);

passwordInput.story = {
  parameters: {
    jest: [
      'SprkRevealInput',
    ]
  },
};

export const helperText = () => (
  <SprkTextInput
    label="Text Input"
    name="helper-text-example"
    helperText="This is my helper text."
  />
);

helperText.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const phoneInput = () => (
  <SprkTextInput
    label="Phone Number"
    name="phone"
    placeholder="(000) 000-0000"
    errorMessage="Incorrect phone number."
  />
);

phoneInput.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const dateInput = () => (
  <SprkTextInput
    label="Date"
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
  />
);

dateInput.story = {
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const datePicker = () => (
  <SprkDatePickerInput
    name="date"
    placeholder={text('placeholder', '01/01/2019')}
    errorMessage="Incorrect date."
    label={text('label', 'Date')}
    valid={boolean('valid', true)}
    disabled={boolean('disabled', false)}
  />
);

datePicker.story = {
  parameters: {
    jest: [
      'SprkDatePickerInput',
    ]
  },
};
