import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
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
  <>
    <SprkLabel isHidden>Text Input Label</SprkLabel>
    <SprkInput
      additionalClasses="sprk-b-TextInput--has-svg-icon"
      type="search"
      placeholder="Search"
    />
  </>
);

searchInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const invalidSearchInput = () => (
  <>
    <SprkLabel isHidden>Text Input Label</SprkLabel>
    <SprkInput
      additionalClasses="sprk-b-TextInput--has-svg-icon"
      type="search"
      placeholder="Search"
      isValid={false}
    />
  </>
);

invalidSearchInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const disabledSearchInput = () => (
  <>
    <SprkLabel isHidden isDisabled>
      Text Input Label
    </SprkLabel>
    <SprkInput
      additionalClasses="sprk-b-TextInput--has-svg-icon"
      type="search"
      placeholder="Search"
      isDisabled
    />
  </>
);

disabledSearchInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
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
