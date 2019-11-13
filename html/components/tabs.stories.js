import { useEffect } from '@storybook/client-api';
import { tabs } from './tabs';

export default {
  title: 'Components|Tabs',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/tabs)
    `,
  },
};

export const defaultTabs = () => {
  useEffect(() => {
    tabs();
  }, []);

  return `
<div
  class="sprk-c-Tabs"
  aria-orientation="horizontal"
  data-sprk-navigation="tabs"
  data-id="tabs-1"
>
  <div class="sprk-c-Tabs__buttons" role="tablist">
    <button
     class="sprk-c-Tabs__button sprk-c-Tabs__button--active"
     role="tab"
     aria-controls="target-1"
     aria-selected="true"
     id="tab-1"
     type="button"
     data-id="tab-1"
    >
      Tab 1
    </button>

    <button
     class="sprk-c-Tabs__button"
     role="tab"
     aria-controls="target-2"
     aria-selected="false"
     id="tab-2"
     type="button"
     data-id="tab-2"
    >
      Tab 2
    </button>

    <button
     class="sprk-c-Tabs__button"
     role="tab"
     aria-controls="target-3"
     aria-selected="false"
     id="tab-3"
     type="button"
     data-id="tab-3"
    >
      Tab 3
    </button>
  </div>

  <div
   class="sprk-c-Tabs__content"
   id="target-1"
   role="tabpanel"
   tabindex="0"
   aria-labelledby="tab-1"
  >
    <p class="sprk-b-TypeBodyTwo">Tab 1 Content Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla euismod nisi
    est, vel consequat ante consectetur in. Ut interdum dictum est at ornare.
    Nam nec dapibus nibh. Integer venenatis ex eu mi euismod, non ultricies
    lacus venenatis.</p>
  </div>
  <div
   class="sprk-c-Tabs__content sprk-u-HideWhenJs"
   id="target-2"
   role="tabpanel"
   tabindex="0"
   aria-labelledby="tab-2"
  >
    <p class="sprk-b-TypeBodyTwo">Tab 2 Content Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla euismod nisi
    est, vel consequat ante consectetur in. Ut interdum dictum est at ornare.
    Nam nec dapibus nibh.</p>
  </div>
  <div
   class="sprk-c-Tabs__content sprk-u-HideWhenJs"
   id="target-3"
   role="tabpanel"
   tabindex="0"
   aria-labelledby="tab-3"
  >
    <p class="sprk-b-TypeBodyTwo">Tab 3 Content Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla euismod nisi
    est, Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
  </div>
</div>`;
};

defaultTabs.story = {
  name: 'Default',
};
