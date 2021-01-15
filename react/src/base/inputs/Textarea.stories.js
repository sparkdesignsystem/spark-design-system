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
  
);

textarea.story = {
  name: 'Default',
  parameters: {
    jest: [''],
  },
};

export const invalidTextarea = () => (

);

invalidTextarea.story = {
  name: 'Invalid',
  parameters: {
    jest: [''],
  },
};

export const disabledTextarea = () => (

);

disabledTextarea.story = {
  name: 'Disabled',
  parameters: {
    jest: [''],
  },
};

export const legacyTextarea = () => (
  <SprkTextInput label="Description" name="description" type="textarea" />
);

legacyTextarea.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidTextarea = () => (
  <SprkTextInput
    label="Description"
    name="description"
    type="textarea"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidTextarea.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyDisabledTextarea = () => (
  <SprkTextInput
    label="Description"
    name="description"
    type="textarea"
    disabled
  />
);

legacyDisabledTextarea.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
