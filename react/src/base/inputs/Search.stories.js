import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Search',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: markdownDocumentationLinkBuilder('input'),
  },
};

export const searchInput = () => (
  <SprkTextInput label="Search" name="Search" placeholder="Search" />
);

searchInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  }
};

export const inlineSearchInput = () => (
  <SprkTextInput
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
  />
);

inlineSearchInput.story = {
  name: 'Inline',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
