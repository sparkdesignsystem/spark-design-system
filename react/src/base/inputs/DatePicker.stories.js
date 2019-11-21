import React from 'react';
import SprkDatePickerInput from './SprkDatePickerInput/SprkDatePickerInput';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

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
    info: markdownLinkBuilder('input'),
  },
};

export const datePicker = () => (
  <SprkDatePickerInput
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
    label="Date"
    valid={true}
    disabled={false}
  />
);

datePicker.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkDatePickerInput',
    ]
  },
};
