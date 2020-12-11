import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/List',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('list')}
    `,
    docs: { iframeHeight: 140 },
  },
};

export const unordered = () =>
  `
    <ul
      class="sprk-b-List"
      data-id="unordered-list-1"
    >
      <li data-id="list-item-1">Unordered List Item</li>
      <li data-id="list-item-2">Unordered List Item</li>
      <li data-id="list-item-3">Unordered List Item</li>
    </ul>
  `;

export const ordered = () =>
  `
    <ol
      class="sprk-b-List"
      data-id="ordered-list-1"
    >
      <li data-id="list-item-4">Ordered List Item</li>
      <li data-id="list-item-5">Ordered List Item</li>
      <li data-id="list-item-6">Ordered List Item</li>
    </ol>
  `;

export const indented = () =>
  `
    <ul
      class="sprk-b-List sprk-b-List--indented"
      data-id="unordered-list-2"
    >
      <li data-id="list-item-7">Indented Item</li>
      <li data-id="list-item-8">Indented Item</li>
      <li data-id="list-item-9">Indented Item</li>
    </ul>
  `;

export const bare = () =>
  `
    <ul
      class="sprk-b-List sprk-b-List--bare"
      data-id="unordered-list-3"
    >
      <li data-id="list-item-10">Bare List Item</li>
      <li data-id="list-item-11">Bare List Item</li>
      <li data-id="list-item-12">Bare List Item</li>
    </ul>
  `;
