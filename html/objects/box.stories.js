import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Box',
  decorators: [
    story => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('box')}
    `,
    docs: { iframeHeight: 130 },
  },
};

export const defaultBox = () => ('<div class="sprk-o-Box"></div>');

defaultBox.story = {
  name: 'Default',
};
