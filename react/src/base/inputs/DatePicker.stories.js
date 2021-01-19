import React from 'react';
import SprkDatePickerInput from './SprkDatePickerInput/SprkDatePickerInput';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
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
  <SprkInputContainer>
    <SprkDatePickerInput
      name="date"
      placeholder="01/01/2019"
      errorMessage="Incorrect date."
      label="Date"
    />
  </SprkInputContainer>
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInputContainer', 'SprkDatePickerInput'],
  },
};

export const invalidDatePicker = () => (
  <SprkInputContainer>
    <SprkDatePickerInput
      name="date"
      placeholder="01/01/2019"
      label="Date"
      valid={false}
    />
    <SprkErrorContainer
      id="invalid-date"
      message="Update this story once error container is done"
    >
      There is an error on this field.
    </SprkErrorContainer>
  </SprkInputContainer>
);

invalidDatePicker.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputContainer'],
  },
};

export const disabledDatePicker = () => (
  <SprkInputContainer>
    <SprkDatePickerInput
      name="date"
      placeholder="01/01/2019"
      errorMessage="Incorrect date."
      label="Date"
      disabled
    />
  </SprkInputContainer>
);

disabledDatePicker.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInputContainer'],
  },
};

export const hugeDatePicker = () => (
  <SprkInputContainer variant="huge">
    <SprkDatePickerInput
      type="hugeTextInput"
      name="date"
      placeholder="01/01/2019"
      label="Date"
    />
  </SprkInputContainer>
);

hugeDatePicker.story = {
  name: 'Huge',
  parameters: {
    jest: ['SprkInputContainer'],
  },
};

export const invalidHugeDatePicker = () => (
  <SprkInputContainer variant="huge">
    <SprkDatePickerInput
      type="hugeTextInput"
      name="date"
      placeholder="01/01/2019"
      label="Date"
      valid={false}
    />
    <SprkErrorContainer
      id="invalid-huge"
      message="Update this story once error container is done"
    >
      There is an error on this field.
    </SprkErrorContainer>
  </SprkInputContainer>
);

invalidHugeDatePicker.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputContainer'],
  },
};

export const disabledHugeDatePicker = () => (
  <SprkInputContainer variant="huge">
    <SprkDatePickerInput
      type="hugeTextInput"
      name="date"
      placeholder="01/01/2019"
      label="Date"
      disabled
    />
  </SprkInputContainer>
);

disabledHugeDatePicker.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['SprkInputContainer'],
  },
};

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
