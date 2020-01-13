import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Link',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    docs: { iframeHeight: 80 },
    info: `
${markdownDocumentationLinkBuilder('link')}
- Spark Link styles are for text-based links.
Images that are links should not use Spark classes.
- The \`data-id\` property is provided as a hook for
automated tools. If you have multiple instances
of the same variant of a component on the same page,
make sure each instance has a unique \`data-id\` property
("link-1", "link-2", "link-3", etc).
`,
  },
};

export const defaultStory = () => (
  `
    <a
      class="sprk-b-Link"
      href="#"
      data-id="link-1"
      data-analytics="object.action.event"
    >
      Simple Link
    </a>
  `
);

defaultStory.story = {
  name: 'Default',
};

export const simple = () => (
  `
    <a
      class="sprk-b-Link sprk-b-Link--simple"
      href="#"
      data-id="link-2"
      data-analytics="object.action.event"
    >
      Simple Link
    </a>
  `
);

export const iconWithTextLink = () => (
  `
    <a
      class="sprk-b-Link sprk-b-Link--has-icon sprk-b-Link--simple"
      href="#nogo"
      data-id="link-3"
      data-analytics="object.action.event"
    >
      <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs sprk-c-Icon--stroke-current-color" viewBox="0 0 100 100">
        <use xlink:href="#communication" />
      </svg>

      Message Us
    </a>
  `
);

export const disabled = () => (
  `
    <a
      class="sprk-b-Link sprk-b-Link--disabled"
      href="#nogo"
      data-id="link-4"
      data-analytics="object.action.event"
    >
      Disabled
    </a>
  `
);