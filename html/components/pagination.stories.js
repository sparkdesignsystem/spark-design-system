import { useEffect } from '@storybook/client-api';
import { pagination } from './pagination';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Pagination',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    docs: { iframeHeight: 70 },
    info: `
${markdownDocumentationLinkBuilder('pagination')}
- The outer container must include the \`data-sprk-pagination\`
attribute and each page \`<li>\` must include the
\`data-sprk-pagination=”item”\` attribute. This is used
to automatically set the \`aria-label\` on those elements.
- In order to use this component, you will need to write
JavaScript handlers for the following functionality:
    - When a page is clicked:
        - Set its \`aria-current\` attribute to “true” and
        set \`aria-current\` to “false” on all other pages.
        - Add the \`sprk-c-Pagination__link--current\`
        class and remove it from other page numbers.
        - If the current page is the first page, disable
        the “previous” Icon chevron.
        - If the current page is the last page, disable
        the “next” Icon chevron.
        - If there are more than 3 pages in the control,
        insert an \`<li>\` containing an ellipsis (…) between
        the first and current links and between the current and last links.
    - Developers will also need to implement the JavaScript
    that uses the currently selected page to determine
    which paged data to show to the user.
`,
  },
};

export const defaultStory = () => {
  useEffect(() => {
    pagination();
  }, []);

  return `
  <nav
    aria-label="Pagination Navigation"
    data-sprk-pagination="default"
    data-id="pagination-1"
  >
    <ul
      class="
        sprk-c-Pagination 
        sprk-o-HorizontalList 
        sprk-o-HorizontalList--spacing-medium
      ">
      <li>
        <a
          class="
            sprk-c-Pagination__icon 
            sprk-b-Link 
            sprk-b-Link--disabled 
            sprk-b-Link--plain
          "
          href="#nogo"
          data-sprk-pagination="prev">
          <span class="sprk-u-ScreenReaderText">Prev</span>
          <svg
            class="
              sprk-c-Icon 
              sprk-c-Icon--filled-current-color 
              sprk-c-Icon--stroke-current-color
            "
            viewBox="0 0 64 64"
          >
            <use xlink:href="#chevron-left"></use>
          </svg>
        </a>
      </li>

      <li>
        <a
          class="
            sprk-c-Pagination__link 
            sprk-c-Pagination__link--current 
            sprk-b-Link
          "
          href="#nogo"
          data-sprk-pagination="item"
          aria-current="true">
          1
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__link sprk-b-Link"
          href="#nogo"
          data-sprk-pagination="item">
          2
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__link sprk-b-Link"
          href="#nogo"
          data-sprk-pagination="item">
          3
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__icon sprk-b-Link sprk-b-Link--plain"
          href="#nogo"
          data-sprk-pagination="next">
          <span class="sprk-u-ScreenReaderText">Next</span>
          <svg
            class="
              sprk-c-Icon 
              sprk-c-Icon--filled-current-color 
              sprk-c-Icon--stroke-current-color
            "
            viewBox="0 0 64 64"
          >
            <use xlink:href="#chevron-right"></use>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['pagination'],
  },
};

export const pager = () => {
  useEffect(() => {
    pagination();
  }, []);

  return `
  <nav aria-label="Pagination Navigation" data-id="pagination-3">
    <ul
      class="
        sprk-c-Pagination 
        sprk-o-HorizontalList 
        sprk-o-HorizontalList--spacing-large
      ">
      <li>
        <a
          class="sprk-c-Pagination__icon sprk-b-Link sprk-b-Link--plain"
          href="#nogo"
        >
          <svg
            class="
              sprk-c-Icon 
              sprk-c-Icon--filled-current-color 
              sprk-c-Icon--stroke-current-color
            "
            viewBox="0 0 64 64"
          >
            <use xlink:href="#chevron-left"></use>
          </svg>
          <span class="sprk-u-ScreenReaderText">Prev</span>
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__icon sprk-b-Link sprk-b-Link--plain"
          href="#nogo"
        >
          <svg
            class="
              sprk-c-Icon 
              sprk-c-Icon--filled-current-color 
              sprk-c-Icon--stroke-current-color
            "
            viewBox="0 0 64 64"
          >
            <use xlink:href="#chevron-right"></use>
          </svg>
          <span class="sprk-u-ScreenReaderText">Next</span>
        </a>
      </li>
    </ul>
  </nav>
  `;
};

pager.story = {
  parameters: {
    jest: ['pagination'],
  },
};
