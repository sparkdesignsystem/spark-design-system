// @ts-ignore
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { SprkPaginationModule } from './sprk-pagination.module';
import { SprkPaginationComponent } from './sprk-pagination.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Pagination',
  component: SprkPaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [SprkPaginationModule],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">${story}</div>`,
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      iframeHeight: 70,
      description: {
        component: `
${markdownDocumentationLinkBuilder('pagination')}
- The goToPage event includes the newly selected page
in a property called “page”, while the goBack and
goForward events include this value in a property called
“newPage”. This is further documented in
[Issue 1730](https://github.com/sparkdesignsystem/spark-design-system/issues/1730).
`,
      },
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-pagination
      [totalItems]="3"
      [itemsPerPage]="1"
      idString="pagination-1"
    >
    </sprk-pagination>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-pagination.component'],
};

export const pager = () => ({
  template: `
    <sprk-pagination
      paginationType="pager"
      [totalItems]="40"
      [itemsPerPage]="10"
      idString="pagination-3"
    >
    </sprk-pagination>
  `,
});

pager.parameters = {
  jest: ['sprk-pagination.component'],
};
