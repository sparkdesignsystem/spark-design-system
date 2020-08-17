import React from 'react';
import SprkBox from './SprkBox';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Box',
  component: SprkBox,
  decorators: [
    (story) => <div className="sprk-o-Box sb-decorate">{story()}</div>,
  ],
  parameters: {
    jest: ['SprkBox'],
    info: `${markdownDocumentationLinkBuilder('box')}`,
    docs: { iframeHeight: 130 },
  },
};

export const defaultBox = () => <SprkBox />;

defaultBox.story = {
  name: 'Default',
};
