import React from 'react';
import SprkTooltip from './SprkTooltip';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Tooltip',
  component: SprkTooltip,
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  parameters: {
    jest: ['SprkTooltip'],
    info: `${markdownDocumentationLinkBuilder('tooltip')}`,
  },
};

export const defaultStory = () => (
  <SprkTooltip iconAdditionalClasses="sprk-c-Icon--filled">
    Use Tooltips to provide info that is not vital to completing the task. Keep
    the text short and stick to what is helpful and relevant.
  </SprkTooltip>
);

defaultStory.story = {
  name: 'Default',
};
