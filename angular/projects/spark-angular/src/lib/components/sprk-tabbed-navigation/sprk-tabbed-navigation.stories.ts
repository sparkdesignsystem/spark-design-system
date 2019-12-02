import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkTabbedNavigationModule } from './sprk-tabbed-navigation.module';
import {
  SprkTabbedNavigationPanelModule
} from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.module';
import {
  SprkTabbedNavigationTabModule
} from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.module';
import { SprkTabbedNavigationComponent } from './sprk-tabbed-navigation.component';
import {
  SprkTabbedNavigationPanelDirective
 } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';
import {
  SprkTabbedNavigationTabDirective
} from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';

export default {
  title: 'Components/Tabs',
  component: SprkTabbedNavigationComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box sprk-u-JavaScript">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    subcomponents: {
      SprkTabbedNavigationPanelDirective,
      SprkTabbedNavigationTabDirective,
    },
    info: `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/tabs)
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
};
