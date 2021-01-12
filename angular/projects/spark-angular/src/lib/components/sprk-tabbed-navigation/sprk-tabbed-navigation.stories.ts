import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkTabbedNavigationModule } from './sprk-tabbed-navigation.module';
import { SprkTabbedNavigationPanelModule } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.module';
import { SprkTabbedNavigationTabModule } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.module';
import { SprkTabbedNavigationComponent } from './sprk-tabbed-navigation.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkTabbedNavigationPanelDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';
import { SprkTabbedNavigationTabDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';

export default {
  title: 'Components/Tabs (Deprecated)',
  component: SprkTabbedNavigationComponent,
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box sprk-u-JavaScript">${storyContent}<div>`,
    ),
  ],
  parameters: {
    subcomponents: {
      SprkTabbedNavigationPanelDirective,
      SprkTabbedNavigationTabDirective,
    },
    info: `
${markdownDocumentationLinkBuilder('tabs')}
- The \`sprk-tabbed-navigation\` component has been deprecated. Please use
[sprk-tabs](https://angular.sparkdesignsystem.com/?path=/story/components-tabs--default-story)
instead.
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
  imports: [
    SprkTabbedNavigationModule,
    SprkTabbedNavigationPanelModule,
    SprkTabbedNavigationTabModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-tabbed-navigation idString="tabs-1">
      <button
        sprkTabbedNavigationTab
        analyticsString="Tab: 1"
        data-id="tab-1"
      >
        Tab 1
      </button>
      <button
        sprkTabbedNavigationTab
        data-id="tab-2"
        [defaultActive]=true
      >
        Tab 2
      </button>
      <button
        sprkTabbedNavigationTab
        data-id="tab-3"
      >
        Tab 3
      </button>
      <div sprkTabbedNavigationPanel>
        <p>Tab 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla
        euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh.
        Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
      </div>
      <div [defaultActive]=true sprkTabbedNavigationPanel>
        <p>Tab 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla
        euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh.
        Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
      </div>
      <div sprkTabbedNavigationPanel>
        <p>Tab 3 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla
        euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh.
        Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
      </div>
    </sprk-tabbed-navigation>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-tabbed-navigation.component',
      'sprk-tabbed-navigation-panel.directive',
      'sprk-tabbed-navigation-tab.directive',
    ],
  },
};
