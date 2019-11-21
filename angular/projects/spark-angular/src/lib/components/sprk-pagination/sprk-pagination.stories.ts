import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkPaginationModule } from './sprk-pagination.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkPaginationComponent } from './sprk-pagination.component';
import { markdownLinkBuilder } from '../../../../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Pagination',
  component: SprkPaginationComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: markdownLinkBuilder('pagination'),
    docs: { iframeHeight: 70 },
  },
};

const modules = {
  imports: [
    SprkPaginationModule,
    RouterModule.forRoot([{
      path: 'iframe.html',
      component: SprkPaginationComponent,
    }]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-pagination
      [totalItems]="3"
      [itemsPerPage]="1"
      idString="pagination-1"
    >
    </sprk-pagination>
  `,
});

defaultStory.story = {
  name: 'Default',
};

export const long = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-pagination
      [currentPage]="11"
      [totalItems]="22"
      [itemsPerPage]="1"
      idString="pagination-2"
    >
    </sprk-pagination>
  `,
});

export const pager = () => ({
  moduleMetadata: modules,
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
