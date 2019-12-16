import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';

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
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const searchInput = () => (
  <SprkTextInput
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
  />
);

searchInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const invalidSearchInput = () => (
  <SprkTextInput
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidSearchInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const disabledSearchInput = () => (
  <SprkTextInput
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
    disabled
  />
);

disabledSearchInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
