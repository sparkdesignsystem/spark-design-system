import React from 'react';
import SprkDivider from './SprkDivider';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Divider',
  component: SprkDivider,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkDivider'],
    info: `${markdownDocumentationLinkBuilder('divider')}`,
  },
};

export const defaultStory = () => <SprkDivider idString="divider-1" element="span" />;

defaultStory.story = {
  name: 'Default',
};
