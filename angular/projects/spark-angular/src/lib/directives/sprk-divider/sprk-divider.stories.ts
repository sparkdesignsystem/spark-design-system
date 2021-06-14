import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkDividerDirective } from './sprk-divider.directive';
import { SprkDividerDirectiveModule } from './sprk-divider.module';
import { SprkDividerModule } from '../../components/sprk-divider/sprk-divider.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Divider',
  component: SprkDividerDirective,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    docs: {
      iframeHeight: 60,
      description: {
        component: `${markdownDocumentationLinkBuilder('divider')}`,
      },
    },
  },
};

const modules = {
  imports: [SprkDividerDirectiveModule, SprkDividerModule],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <div sprkDivider idString="divider-1"></div>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-divider-column.directive'],
};

export const deprecated = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-divider idString="divider-2"></sprk-divider>
  `,
});

deprecated.storyName = 'Component (Deprecated)';

deprecated.parameters = {
  jest: ['sprk-divider-column.directive'],
};
