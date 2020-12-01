import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Divider',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('divider')}
    `,
    docs: { iframeHeight: 60 },
  },
};

export const defaultStory = () => `
  <span
    class="sprk-c-Divider"
    data-id="divider-1"
  ></span>
`;

defaultStory.story = {
  name: 'Default',
};
