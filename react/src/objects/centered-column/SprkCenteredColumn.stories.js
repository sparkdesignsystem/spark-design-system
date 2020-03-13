import React from 'react';
import SprkCenteredColumn from './SprkCenteredColumn';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Centered Column',
  component: SprkCenteredColumn,
  decorators: [
    story => <div className="sprk-o-Box sb-decorate">{story()}</div>
  ],
  parameters: {
    jest: ['SprkCenteredColumn'],
    docs: { iframeHeight: 140 },
    info: `${markdownDocumentationLinkBuilder('centered-column')}
- The \`sprk-o-CenteredColumn\` class can be applied to
any parent element that
is being used to contain the application contents within
a maximum width.
    `,
  }
};

export const defaultStory = () => (
  <SprkCenteredColumn idString="foo"></SprkCenteredColumn>
);

defaultStory.story = {
  name: 'Default',
};
