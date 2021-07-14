// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkCenteredColumnDirective } from './sprk-centered-column.directive';
import { SprkCenteredColumnModule } from './sprk-centered-column.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Centered Column',
  component: SprkCenteredColumnDirective,
  decorators: [
    moduleMetadata({
      imports: [SprkCenteredColumnModule],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box sb-decorate">${story}</div>`,
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      iframeHeight: 140,
      description: {
        component: `${markdownDocumentationLinkBuilder('centered-column')}
- The \`sprk-o-CenteredColumn\` class can be applied to
any parent element that
is being used to contain the application contents within
a maximum width.
    `,
      },
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <div sprkCenteredColumn idString="centered-column">
    </div>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-centered-column.directive'],
};
