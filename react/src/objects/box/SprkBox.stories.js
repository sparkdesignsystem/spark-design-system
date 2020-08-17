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

// eslint-disable-next-line react/self-closing-comp
export const defaultBox = () => <SprkBox></SprkBox>;

defaultBox.story = {
  name: 'Default',
};
