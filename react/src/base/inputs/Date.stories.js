import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

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
    info: markdownLinkBuilder('input'),
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
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
