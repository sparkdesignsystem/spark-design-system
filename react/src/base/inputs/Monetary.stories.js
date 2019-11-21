import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Input/Monetary',
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

export const monetaryInput = () => (
  <SprkTextInput label="Payment" textIcon name="monetary" placeholder="0.00" />
);

monetaryInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
