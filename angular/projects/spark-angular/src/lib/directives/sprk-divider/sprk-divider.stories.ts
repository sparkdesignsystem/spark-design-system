import { SprkDividerDirective } from './sprk-divider.directive';
import { SprkDividerDirectiveModule } from './sprk-divider.module';
import { SprkDividerModule } from '../../components/sprk-divider/sprk-divider.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
export default {
  title: 'Components/Divider',
  component: SprkDividerDirective,
  decorators: [
    moduleMetadata({
      imports: [SprkDividerDirectiveModule, SprkDividerModule],
    }),
  ],
  parameters: {
    docs: {
      iframeHeight: 60,
      description: {
        component: `${markdownDocumentationLinkBuilder('divider')}`,
      },
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <div sprkDivider idString="divider-1"></div>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-divider.directive'],
};

export const deprecated = () => ({
  template: `
    <sprk-divider idString="divider-2"></sprk-divider>
  `,
});

deprecated.storyName = 'Component (Deprecated)';

deprecated.parameters = {
  jest: ['sprk-divider.directive'],
};
