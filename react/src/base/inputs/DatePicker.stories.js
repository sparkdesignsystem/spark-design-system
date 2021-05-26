import React from 'react';
import SprkDatePicker from './SprkDatePicker/SprkDatePicker';
import SprkDatePickerInput from './SprkDatePickerInput/SprkDatePickerInput';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date Picker',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkDatePicker,
  parameters: {
    jest: ['SprkDatePicker'],
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special characters
(/) which you may need to remove before submitting the form.
- The Date Picker makes use of a 3rd party library called
Tiny Date Picker. See the datePickerConfig object in the
props table below for available customization options.
- Requires Additional Engineering:
  - Validation - The \`isValid\` prop controls this
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
    <div className="sprk-b-InputContainer__icon-container">
      <SprkLabel htmlFor="datepicker-1">Date</SprkLabel>
      <SprkIcon
        iconName="calendar"
        additionalClasses="
          sprk-c-Icon--stroke-current-color
          sprk-b-InputContainer__icon"
        aria-hidden="true"
      />
      <SprkDatePicker id="datepicker-1" placeholder="MM/DD/YYYY" />
    </div>
  </SprkInputContainer>
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInputContainer', 'SprkDatePicker', 'SprkLabel', 'SprkIcon'],
  },
};

export const invalidDatePicker = () => (
  <SprkInputContainer>
    <div className="sprk-b-InputContainer__icon-container">
      <SprkLabel htmlFor="datepicker-2">Date</SprkLabel>
      <SprkIcon
        iconName="calendar"
        additionalClasses="
          sprk-c-Icon--stroke-current-color sprk-b-InputContainer__icon"
        aria-hidden="true"
      />
      <SprkDatePicker
        id="datepicker-2"
        isValid={false}
        placeholder="MM/DD/YYYY"
        ariaDescribedBy="invalid-date"
      />
    </div>
    <SprkFieldError id="invalid-date">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidDatePicker.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkInputContainer',
      'SprkDatePicker',
      'SprkLabel',
      'SprkIcon',
      'SprkFieldError',
    ],
  },
};

export const disabledDatePicker = () => (
  <SprkInputContainer>
    <div className="sprk-b-InputContainer__icon-container">
      <SprkLabel htmlFor="datepicker-3" isDisabled>
        Date
      </SprkLabel>
      <SprkIcon
        iconName="calendar"
        additionalClasses="
          sprk-c-Icon--stroke-current-color sprk-b-InputContainer__icon"
        aria-hidden="true"
      />
      <SprkDatePicker id="datepicker-3" isDisabled placeholder="MM/DD/YYYY" />
    </div>
  </SprkInputContainer>
);

disabledDatePicker.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInputContainer', 'SprkDatePicker', 'SprkLabel', 'SprkIcon'],
  },
};

export const hugeDatePicker = () => (
  <SprkInputContainer variant="huge">
    <SprkDatePicker
      id="huge-datepicker-1"
      variant="huge"
      placeholder="MM/DD/YYYY"
    />
    <SprkLabel htmlFor="huge-datepicker-1">Date</SprkLabel>
  </SprkInputContainer>
);

hugeDatePicker.story = {
  name: 'Huge',
  parameters: {
    jest: ['SprkInputContainer', 'SprkDatePicker', 'SprkLabel'],
  },
};

export const invalidHugeDatePicker = () => (
  <SprkInputContainer variant="huge">
    <SprkDatePicker
      id="huge-datepicker-2"
      variant="huge"
      placeholder="MM/DD/YYYY"
      isValid={false}
      ariaDescribedBy="invalid-huge"
    />
    <SprkLabel htmlFor="huge-datepicker-2">Date</SprkLabel>
    <SprkFieldError id="invalid-huge">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidHugeDatePicker.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: [
      'SprkFieldError',
      'SprkInputContainer',
      'SprkDatePicker',
      'SprkLabel',
      'SprkIcon',
    ],
  },
};

export const disabledHugeDatePicker = () => (
  <SprkInputContainer variant="huge">
    <SprkDatePicker
      id="huge-datepicker-3"
      variant="huge"
      placeholder="MM/DD/YYYY"
      isDisabled
    />
    <SprkLabel htmlFor="huge-datepicker-3" isDisabled>
      Date
    </SprkLabel>
  </SprkInputContainer>
);

disabledHugeDatePicker.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['SprkInputContainer', 'SprkDatePicker', 'SprkLabel'],
  },
};

export const legacyDefaultStory = () => (
  <SprkDatePickerInput
    name="date"
    placeholder="MM/DD/YYYY"
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
    placeholder="MM/DD/YYYY"
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
    placeholder="MM/DD/YYYY"
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
    placeholder="MM/DD/YYYY"
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
    placeholder="MM/DD/YYYY"
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
    placeholder="MM/DD/YYYY"
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
