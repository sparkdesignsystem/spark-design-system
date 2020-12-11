import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Centered Column',
  decorators: [
    (story) => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
  parameters: {
    docs: { iframeHeight: 140 },
    info: `${markdownDocumentationLinkBuilder('centered-column')}
- The \`sprk-o-CenteredColumn\` class can be applied to
any parent element that
is being used to contain the application contents within
a maximum width.
    `,
  },
};

export const defaultStory = () => '<div class="sprk-o-CenteredColumn"></div>';

defaultStory.story = {
  name: 'Default',
};
