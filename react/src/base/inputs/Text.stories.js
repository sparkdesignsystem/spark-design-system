import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Input/Text',
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

export const textInput = () => (
  <SprkTextInput
    label="Text Input Label"
    name="text-input-label"
    valid={true}
    disabled={false}
    errorMessage="There is an error on this field."
  />
);

textInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
