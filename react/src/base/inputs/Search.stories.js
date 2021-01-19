import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Search',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const searchInput = () => (
  <SprkInputContainer>
    <SprkLabel isHidden>Text Input Label</SprkLabel>
    <SprkInput
      additionalClasses="sprk-b-TextInput--has-svg-icon"
      type="search"
      placeholder="Search"
    />
  </SprkInputContainer>
);

searchInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidSearchInput = () => (
  <SprkInputContainer>
    <SprkLabel isHidden>Text Input Label</SprkLabel>
    <SprkInput
      additionalClasses="sprk-b-TextInput--has-svg-icon"
      type="search"
      placeholder="Search"
      isValid={false}
    />
    <SprkErrorContainer
      id="invalid-search"
      message="Update this story once error container is done"
    >
      There is an error on this field.
    </SprkErrorContainer>
  </SprkInputContainer>
);

invalidSearchInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkInput',
      'SprkLabel',
      'SprkInputContainer',
      'SprkErrorContainer',
    ],
  },
};

export const disabledSearchInput = () => (
  <SprkInputContainer>
    <SprkLabel isHidden isDisabled>
      Text Input Label
    </SprkLabel>
    <SprkInput
      additionalClasses="sprk-b-TextInput--has-svg-icon"
      type="search"
      placeholder="Search"
      isDisabled
    />
  </SprkInputContainer>
);

disabledSearchInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const legacySearchInput = () => (
  <SprkTextInput
    type="search"
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
  />
);

legacySearchInput.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidSearchInput = () => (
  <SprkTextInput
    type="search"
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidSearchInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyDisabledSearchInput = () => (
  <SprkTextInput
    type="search"
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
    disabled
  />
);

legacyDisabledSearchInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
