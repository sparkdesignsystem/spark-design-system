import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: `${markdownDocumentationLinkBuilder('components', 'input')}`,
  },
};

export const dateInput = () => (
  <SprkTextInput
    label="Date"
    name="date"
    placeholder="01/01/2019"
  />
);

dateInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const invalidDateInput = () => (
  <SprkTextInput
    label="Date"
    name="date"
    placeholder="01/01/2019"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidDateInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const disabledDateInput = () => (
  <SprkTextInput
    label="Date"
    name="date"
    placeholder="01/01/2019"
    disabled
  />
);

disabledDateInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
