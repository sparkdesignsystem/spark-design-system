import React from 'react';
import SprkTabs from './SprkTabs';
import SprkTabsPanel from './components/SprkTabsPanel/SprkTabsPanel';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import SprkTabsButton from './components/SprkTabsButton/SprkTabsButton';

export default {
  title: 'Components/Tabs',
  component: SprkTabs,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    subcomponents: {
      SprkTabsButton,
      SprkTabsPanel,
    },
    jest: [
      'SprkTabs',
      'SprkTabsPanel',
      'SprkTabsButton',
    ],
    info: `
${markdownDocumentationLinkBuilder('components', 'tabs')}
- The Tabs component makes use of the
\`sprk-u-JavaScript\` class to provide a graceful
degradation experience in environments where JavaScript
is not enabled. If \`sprk-u-JavaScript\` is not found
on the \`<html>\` element of the page, the content of
all Tabs panels will be visible. If \`sprk-u-JavaScript\`
is present, only one content panel will be visible at a time. 
`,
  },

};

export const defaultStory = () => (
  <SprkTabs idString="tabs-1">
    <SprkTabsPanel
      isDefaultActive
      tabBtnChildren="Tab 1"
      tabBtnAnalyticsString="tab-1"
      tabBtnDataId="tab-1"
    >
      <p>
        Tab 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus
        ipsum. Nulla euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at
        ornare. Nam nec dapibus nibh. Integer venenatis ex eu mi euismod, non ultricies l acus
        venenatis.
      </p>
    </SprkTabsPanel>
    <SprkTabsPanel tabBtnChildren="Tab 2" tabBtnAnalyticsString="tab-2" tabBtnDataId="tab-2">
      <p>
        Tab 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus
        ipsum. Nulla euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at
        ornare. Nam nec dapibus nibh. Integer venenatis ex eu mi euismod, non ultricies l acus
        venenatis.
      </p>
    </SprkTabsPanel>
    <SprkTabsPanel tabBtnChildren="Tab 3" tabBtnAnalyticsString="tab-3" tabBtnDataId="tab-3">
      <p>
        Tab 3 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus
        ipsum. Nulla euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at
        ornare. Nam nec dapibus nibh. Integer venenatis ex eu mi euismod, non ultricies l acus
        venenatis.
      </p>
    </SprkTabsPanel>
  </SprkTabs>
);

defaultStory.story = {
  name: 'Default',
};
