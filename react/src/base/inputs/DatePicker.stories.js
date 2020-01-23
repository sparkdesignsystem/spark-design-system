import React from 'react';
import SprkDatePickerInput from './SprkDatePickerInput/SprkDatePickerInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date Picker',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkDatePickerInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: `${markdownDocumentationLinkBuilder('input')}`,
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
    jest: [
      'SprkDatePickerInput',
    ]
  },
};

export const invalidDatePicker = () => (
  <SprkDatePickerInput
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    valid={false}
    errorMessage="There is an error on this field"
  />
);

invalidDatePicker.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkDatePickerInput',
    ]
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
    jest: [
      'SprkDatePickerInput',
    ]
  },
};
