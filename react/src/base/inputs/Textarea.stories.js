import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkTextarea from './SprkTextarea/SprkTextarea';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
import SprkLabel from './SprkLabel/SprkLabel';
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
  <>
    <SprkLabel htmlFor="sprk-textarea">Description</SprkLabel>
    <SprkTextarea id="sprk-textarea" additionalClasses="sprk-u-Width-100" />
  </>
);

textarea.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkTextarea', 'SprkLabel'],
  },
};

export const invalidTextarea = () => (
  <>
    <SprkLabel htmlFor="sprk-textarea-invalid">Description</SprkLabel>
    <SprkTextarea
      id="sprk-textarea-invalid"
      additionalClasses="sprk-u-Width-100"
      isValid={false}
    />
    <SprkErrorContainer
      id="invalid-error"
      message="Update once error container is done to remove message prop"
    >
      There is an error on this field.
    </SprkErrorContainer>
  </>
);

invalidTextarea.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkTextarea', 'SprkErrorContainer'],
  },
};

// Had to comment out because it breaks SB left uncommented
export const disabledTextarea = () => (
  <>
    <SprkLabel isDisabled htmlFor="sprk-textarea">
      Description
    </SprkLabel>
    <SprkTextarea
      id="sprk-textarea"
      additionalClasses="sprk-u-Width-100"
      isDisabled
    />
  </>
);

disabledTextarea.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkTextarea', 'SprkLabel'],
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
