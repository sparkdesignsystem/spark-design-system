import { useEffect } from '@storybook/client-api';
import { tabs } from './tabs';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Tabs',
  decorators: [
    (story) => `<div class="sprk-o-Box sprk-u-JavaScript">${story()}</div>`,
  ],
  parameters: {
    docs: { iframeHeight: 300 },
    info: `
${markdownDocumentationLinkBuilder('tabs')}
For this component to function properly, the
HTML must be structured correctly:

- The outer container must have the
\`data-sprk-navigation=”tabs”\` attribute.
- The buttons container must have the \`role=tablist\`
attribute in order to correctly identify this control
to screen readers.
- Tabs buttons must have the following attributes:
    - \`role=tab\` to identify this control to screen readers.
    - \`aria-controls={id}\` to link the tab button
    with the associated tab content.
    - \`aria-selected=true\` when selected.
    - \`tabindex=0\` to place the control in the tab order
- Content panels must have the following attributes:
    - \`role=tabpanel\` to identify this control for screen readers.
    - \`aria-labelledby\` to link the content with the associated button.
    - \`tabindex=0\` to place the control in the tab order.
- The Tabs component makes use of the
\`sprk-u-JavaScript\` class to provide a graceful
degradation experience in environments where JavaScript
is not enabled. If \`sprk-u-JavaScript\` is not found on
the \`<html>\` element of the page, the content of all Tabs
panels will be visible. If \`sprk-u-JavaScript\` is present,
only one content panel will be visible at a time.
`,
  },
};

export const defaultStory = () => {
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

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['tabs'],
  },
};
