import React from 'react';

import SprkTabs from './SprkTabs';
import SprkTabsPanel from './components/SprkTabsPanel/SprkTabsPanel';

export default {
  title: 'Components|Tabs',
  component: SprkTabs,
  parameters: {
    jest: [
      'SprkTabs',
      'SprkTabsPanel',
      'SprkTabsButton',
    ],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/tabs)
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
