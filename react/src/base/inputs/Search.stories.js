import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
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
  <SprkInput type="search" placeholder="Search" />
);

searchInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const invalidSearchInput = () => (
  <SprkInput type="search" placeholder="Search" isValid={false} />
);

invalidSearchInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const disabledSearchInput = () => (
  <SprkInput type="search" placeholder="Search" isDisabled />
);

disabledSearchInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput'],
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
