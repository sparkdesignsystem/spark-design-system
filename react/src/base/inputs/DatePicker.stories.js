import React from 'react';
import SprkDatePickerInput from './SprkDatePickerInput/SprkDatePickerInput';

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
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
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
