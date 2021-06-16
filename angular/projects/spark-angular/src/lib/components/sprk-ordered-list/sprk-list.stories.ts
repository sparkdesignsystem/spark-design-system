// @ts-ignore prettier-ignore
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { SprkOrderedListModule } from './sprk-ordered-list.module';
import { SprkUnorderedListModule } from '../sprk-unordered-list/sprk-unordered-list.module';
import { SprkOrderedListComponent } from '../sprk-ordered-list/sprk-ordered-list.component';
import { SprkListItemModule } from '../sprk-list-item/sprk-list-item.module';
import { SprkUnorderedListComponent } from '../sprk-unordered-list/sprk-unordered-list.component';
import { SprkListItemComponent } from '../sprk-list-item/sprk-list-item.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/List',
  component: SprkUnorderedListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SprkOrderedListModule,
        SprkUnorderedListModule,
        SprkListItemModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box sprk-u-mlm">${story}</div>`,
    ),
  ],
  parameters: {
    subcomponents: {
      SprkOrderedListComponent,
      SprkUnorderedListComponent,
      SprkListItemComponent,
    },
    docs: {
      description: {
        component: `
${markdownDocumentationLinkBuilder('list')}
    `,
      },
      source: {
        type: 'code',
      },
      iframeHeight: 100,
    },
  },
} as Meta;

export const unordered = () => ({
  template: `
    <sprk-unordered-list idString="unordered-list-1">
      <sprk-list-item idString="list-item-1">
        Unordered List Item
      </sprk-list-item>
      <sprk-list-item idString="list-item-2">
        Unordered List Item
      </sprk-list-item>
      <sprk-list-item idString="list-item-3">
        Unordered List Item
      </sprk-list-item>
    </sprk-unordered-list>
  `,
});

unordered.parameters = {
  jest: ['sprk-unordered-list', 'sprk-list-item'],
};

export const ordered = () => ({
  template: `
    <sprk-ordered-list idString="ordered-list-1">
      <sprk-list-item idString="list-item-4">
        Ordered List Item
      </sprk-list-item>
      <sprk-list-item idString="list-item-5">
        Ordered List Item
      </sprk-list-item>
      <sprk-list-item idString="list-item-6">
        Ordered List Item
      </sprk-list-item>
    </sprk-ordered-list>
  `,
});

ordered.parameters = {
  jest: ['sprk-ordered-list', 'sprk-list-item'],
};

export const indented = () => ({
  template: `
    <sprk-unordered-list
      listType="indented"
      idString="unordered-list-2"
    >
      <sprk-list-item idString="list-item-7">
        Indented Item
      </sprk-list-item>
      <sprk-list-item idString="list-item-8">
        Indented Item
      </sprk-list-item>
      <sprk-list-item idString="list-item-9">
        Indented Item
      </sprk-list-item>
    </sprk-unordered-list>
  `,
});

indented.parameters = {
  jest: ['sprk-unordered-list', 'sprk-list-item'],
};

export const bare = () => ({
  template: `
    <sprk-unordered-list
      listType="bare"
      idString="unordered-list-2"
    >
      <sprk-list-item idString="list-item-10">
        Bare List Item
      </sprk-list-item>
      <sprk-list-item idString="list-item-11">
        Bare List Item
      </sprk-list-item>
      <sprk-list-item idString="list-item-12">
        Bare List Item
      </sprk-list-item>
    </sprk-unordered-list>
  `,
});

bare.parameters = {
  jest: ['sprk-unordered-list', 'sprk-list-item'],
};
