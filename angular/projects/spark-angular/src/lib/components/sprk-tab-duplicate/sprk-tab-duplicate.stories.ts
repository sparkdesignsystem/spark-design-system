import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkTabDuplicateComponent } from './sprk-tab-duplicate.component';
import { SprkTabDuplicateModule } from './sprk-tab-duplicate.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/TabDuplicate',
  component: SprkTabDuplicateComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box sprk-u-JavaScript">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    subcomponents: {
      SprkTabDuplicateComponent,
    },
    info: `${markdownDocumentationLinkBuilder('table')}`,
    docs: { iframeHeight: 380 },
  },
};

const modules = {
  imports: [
    SprkTabDuplicateModule
  ],
};

export const columnComparison = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-tab-duplicate>
    </sprk-tab-duplicate>
  `,
});

columnComparison.story = {
  parameters: {
    jest: [
      'sprk-table.component',
      'sprk-table-head.directive',
    ],
  },
};
