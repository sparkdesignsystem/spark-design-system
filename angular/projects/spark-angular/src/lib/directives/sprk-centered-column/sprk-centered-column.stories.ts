import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkCenteredColumnDirective } from './sprk-centered-column.directive';
import { SprkCenteredColumnModule } from './sprk-centered-column.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Centered Column',
  component: SprkCenteredColumnDirective,
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box sb-decorate">${storyContent}<div>`,
    ),
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

const modules = {
  imports: [SprkCenteredColumnModule],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <div sprkCenteredColumn idString="centered-column">
    </div>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-centered-column.directive'],
};
