import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Box',
  decorators: [
    (story) => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('box')}
- By default, Box padding is set to Medium.
- Box has 20 built in padding sizes that are paired
with our [Spacing](/docs/foundations-spacing--inset-spacing)
values. See the Class Modifiers for Box table below for options.
    `,
    docs: { iframeHeight: 130 },
  },
};

export const defaultBox = () => '<div class="sprk-o-Box"></div>';

defaultBox.story = {
  name: 'Default',
};
