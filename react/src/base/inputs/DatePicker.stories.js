import React from 'react';
import SprkDatePickerInput from './SprkDatePickerInput/SprkDatePickerInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date Picker',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkDatePickerInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special characters
(/) which you may need to remove before submitting the form.
- The Date Picker makes use of a 3rd party library called
Tiny Date Picker. See the datePickerConfig object in the
props table below for available customization options. 
- Requires Additional Engineering: 
  - Validation - The \`valid\` prop controls this
  input’s validation state. This boolean is determined
  by your own validation logic. Validation happens before 
  reformatting. 
  - Reformatting to date pattern MM/DD/YYYY - After valid
  input, it should reformat to add commas and decimals to
  the hundredth place. Reformat user input with the \`formatter\`
  prop. This prop receives a function that takes the current
  value and returns the reformatted value. 
`,
  },
};

export const defaultStory = () => (
  <SprkDatePickerInput
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
  />
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const invalidDatePicker = () => (
  <SprkDatePickerInput
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    valid={false}
  />
);

invalidDatePicker.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const disabledDatePicker = () => (
  <SprkDatePickerInput
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    disabled
  />
);

disabledDatePicker.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const hugeDatePicker = () => (
  <SprkDatePickerInput
    type="hugeTextInput"
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
  />
);

hugeDatePicker.story = {
  name: 'Huge',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const invalidHugeDatePicker = () => (
  <SprkDatePickerInput
    type="hugeTextInput"
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    valid={false}
  />
);

invalidHugeDatePicker.story = {
  name: 'Invalid Huge',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const disabledHugeDatePicker = () => (
  <SprkDatePickerInput
    type="hugeTextInput"
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    disabled
  />
);

disabledHugeDatePicker.story = {
  name: 'Disabled Huge',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};
