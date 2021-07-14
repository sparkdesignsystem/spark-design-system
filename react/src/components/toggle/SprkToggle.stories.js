import React from 'react';
import SprkToggle from './SprkToggle';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Toggle',
  component: SprkToggle,
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  parameters: {
    jest: ['SprkToggle'],
    info: `${markdownDocumentationLinkBuilder('toggle')}`,
  },
};

export const defaultStory = () => (
  <SprkToggle triggerText="My Disclaimer" analyticsString="toggle-1">
    <p className="sprk-b-TypeBodyFour">
      This is an example of disclaimer content. The
      aria-expanded=&quot;true&quot; attribute will be viewable in the DOM on
      the toggle link when this content is shown. When this content is hidden
      the aria-expanded attribute will have the value of false. This helps
      accessibility devices in understanding that the link is a control for
      expandable content.
    </p>
  </SprkToggle>
);

defaultStory.story = {
  name: 'Default',
};
