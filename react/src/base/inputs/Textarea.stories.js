import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Textarea',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkTextInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const textarea = () => (
  <SprkTextInput label="Description" name="description" type="textarea" />
);

textarea.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const invalidTextarea = () => (
  <SprkTextInput
    label="Description"
    name="description"
    type="textarea"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidTextarea.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const disabledTextarea = () => (
  <SprkTextInput
    label="Description"
    name="description"
    type="textarea"
    disabled
  />
);

disabledTextarea.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
