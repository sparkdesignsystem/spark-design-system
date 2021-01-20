import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkTabsModule } from './sprk-tabs.module';
import { SprkTabsPanelModule } from '../../directives/sprk-tabs/sprk-tabs-panel/sprk-tabs-panel.module';
import { SprkTabsButtonModule } from '../../directives/sprk-tabs/sprk-tabs-button/sprk-tabs-button.module';
import { SprkTabsComponent } from './sprk-tabs.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkTabsPanelDirective } from '../../directives/sprk-tabs/sprk-tabs-panel/sprk-tabs-panel.directive';
import { SprkTabsButtonDirective } from '../../directives/sprk-tabs/sprk-tabs-button/sprk-tabs-button.directive';
import { SprkTabbedNavigationModule } from '../sprk-tabbed-navigation/sprk-tabbed-navigation.module';
import { SprkTabbedNavigationPanelModule } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.module';
import { SprkTabbedNavigationTabModule } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.module';

export default {
  title: 'Components/Tabs',
  component: SprkTabsComponent,
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box sprk-u-JavaScript">${storyContent}<div>`,
    ),
  ],
  parameters: {
    subcomponents: {
      SprkTabsPanelDirective,
      SprkTabsButtonDirective,
    },
    info: `
${markdownDocumentationLinkBuilder('tabs')}
- The Tabs component makes use of the
\`sprk-u-JavaScript\` class to provide a graceful
degradation experience in environments where JavaScript
is not enabled. If \`sprk-u-JavaScript\` is not found on
the \`<html>\` element of the page, The content of all
Tabs panels will be visible. If \`sprk-u-JavaScript\` is present,
only one content panel will be visible at a time.
`,
    docs: { iframeHeight: 300 },
  },
};

const modules = {
  imports: [SprkTabsModule, SprkTabsPanelModule, SprkTabsButtonModule],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-tabs idString="tabs-1">
      <button
        sprkTabsButton
        analyticsString="Tab: 1"
        idString="tab-1"
      >
        Tab 1
      </button>
      <button
        sprkTabsButton
        idString="tab-2"
        [isDefaultActive]="true"
      >
        Tab 2
      </button>
      <button
        sprkTabsButton
        idString="tab-3"
      >
        Tab 3
      </button>
      <div sprkTabsPanel>
        <p sprkText variant="bodyTwo">Tab 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div [isDefaultActive]="true" sprkTabsPanel>
        <p sprkText variant="bodyTwo">Tab 2 Content Sed quis rhoncus ipsum. Nulla euismod nisi est, vel
        consequat ante consectetur in.</p>
      </div>
      <div sprkTabsPanel>
        <p sprkText variant="bodyTwo">Tab 3 Content Ut interdum dictum est at ornare. Nam nec dapibus nibh.
        Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
      </div>
    </sprk-tabs>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-tabs.component',
      'sprk-tabs-panel.directive',
      'sprk-tabs-button.directive',
    ],
  },
};

const modules_deprecated = {
  imports: [
    SprkTabbedNavigationModule,
    SprkTabbedNavigationPanelModule,
    SprkTabbedNavigationTabModule,
  ],
};

export const deprecated = () => ({
  moduleMetadata: modules_deprecated,
  template: `
    <sprk-tabbed-navigation idString="tabs-1">
      <button
        sprkTabbedNavigationTab
        analyticsString="Tab: 1"
        idString="tab-1"
      >
        Tab 1
      </button>
      <button
        sprkTabbedNavigationTab
        idString="tab-2"
        [defaultActive]="true"
      >
        Tab 2
      </button>
      <button
        sprkTabbedNavigationTab
        idString="tab-3"
      >
        Tab 3
      </button>
      <div sprkTabbedNavigationPanel>
        <p sprkText variant="bodyTwo">Tab 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla
        euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh.
        Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
      </div>
      <div [defaultActive]="true" sprkTabbedNavigationPanel>
        <p sprkText variant="bodyTwo">Tab 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla
        euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh.
        Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
      </div>
      <div sprkTabbedNavigationPanel>
        <p sprkText variant="bodyTwo">Tab 3 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla
        euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh.
        Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
      </div>
    </sprk-tabbed-navigation>
  `,
});

deprecated.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: [
      'sprk-tabbed-navigation.component',
      'sprk-tabbed-navigation-panel.directive',
      'sprk-tabbed-navigation-tab.directive',
    ],
  },
};
