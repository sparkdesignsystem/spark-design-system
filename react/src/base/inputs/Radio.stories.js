import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Radio',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkSelectionInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: markdownDocumentationLinkBuilder('input'),
  },
};

export const radioButton = () => (
  <SprkSelectionInput
    groupLabel="Radio Group Label"
    choices={[
      {
        label: 'Radio Item 1',
        name: 'radio[]',
        value: 'item-1',
      },
      {
        label: 'Radio Item 2',
        name: 'radio[]',
        value: 'item-2',
      },
      {
        label: 'Radio Item 3',
        name: 'radio[]',
        value: 'item-2',
      },
    ]}
    variant="radio"
  />
);

radioButton.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};
