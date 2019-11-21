import React from 'react';
import SprkDivider from './SprkDivider';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Divider',
  component: SprkDivider,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkDivider'],
    info: markdownLinkBuilder('divider'),
  },
};

export const asASpanElement = () => <SprkDivider idString="divider-1" element="span" />;

asASpanElement.story = {
  name: 'As a <span>',
};

export const asAHrElement = () => <SprkDivider idString="divider-2" element="hr" />;

asAHrElement.story = {
  name: 'As an <hr>',
};
