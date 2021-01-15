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

// export const defaultStory = () => (

// );

// defaultStory.story = {
//   name: 'Default',
//   parameters: {
//     jest: [''],
//   },
// };

// export const invalidDatePicker = () => (

// );

// invalidDatePicker.story = {
//   name: 'Invalid',
//   parameters: {
//     jest: [''],
//   },
// };

// export const disabledDatePicker = () => (

// );

// disabledDatePicker.story = {
//   name: 'Disabled',
//   parameters: {
//     jest: [''],
//   },
// };

// export const hugeDatePicker = () => (

// );

// hugeDatePicker.story = {
//   name: 'Huge',
//   parameters: {
//     jest: [''],
//   },
// };

// export const invalidHugeDatePicker = () => (

// );

// invalidHugeDatePicker.story = {
//   name: 'Huge Invalid',
//   parameters: {
//     jest: [''],
//   },
// };

// export const disabledHugeDatePicker = () => (

// );

// disabledHugeDatePicker.story = {
//   name: 'Huge Disabled',
//   parameters: {
//     jest: [''],
//   },
// };

export const legacyDefaultStory = () => (
  <SprkDatePickerInput
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
  />
);

legacyDefaultStory.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const legacyInvalidDatePicker = () => (
  <SprkDatePickerInput
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    valid={false}
  />
);

legacyInvalidDatePicker.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const legacyDisabledDatePicker = () => (
  <SprkDatePickerInput
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    disabled
  />
);

legacyDisabledDatePicker.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const legacyHugeDatePicker = () => (
  <SprkDatePickerInput
    type="hugeTextInput"
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
  />
);

legacyHugeDatePicker.story = {
  name: 'Legacy Huge (Deprecated)',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const legacyInvalidHugeDatePicker = () => (
  <SprkDatePickerInput
    type="hugeTextInput"
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    valid={false}
  />
);

legacyInvalidHugeDatePicker.story = {
  name: 'Legacy Huge Invalid (Deprecated)',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};

export const legacyDisabledHugeDatePicker = () => (
  <SprkDatePickerInput
    type="hugeTextInput"
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    disabled
  />
);

legacyDisabledHugeDatePicker.story = {
  name: 'Legacy Huge Disabled (Deprecated)',
  parameters: {
    jest: ['SprkDatePickerInput'],
  },
};
