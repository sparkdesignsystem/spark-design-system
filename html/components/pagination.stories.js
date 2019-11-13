import { useEffect } from '@storybook/client-api';
import { pagination } from './pagination';

export default {
  title: 'Components|Pagination',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/pagination)
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
      class="sprk-c-Pagination sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium"
    >
      <li>
        <a
          class="sprk-c-Pagination__icon sprk-b-Link sprk-b-Link--disabled sprk-b-Link--plain"
          href="#"
          data-sprk-pagination="prev">
          <span class="sprk-u-ScreenReaderText">Prev</span>
          <svg
            class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
            viewBox="0 0 64 64"
          >
            <use xlink:href="#chevron-left"></use>
          </svg>
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__link sprk-c-Pagination__link--current sprk-b-Link"
          href="#"
          data-sprk-pagination="item"
          aria-current="true">
          1
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__link sprk-b-Link"
          href="#"
          data-sprk-pagination="item">
          2
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__link sprk-b-Link"
          href="#"
          data-sprk-pagination="item">
          3
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__icon sprk-b-Link sprk-b-Link--plain"
          href="#"
          data-sprk-pagination="next">
          <span class="sprk-u-ScreenReaderText">Next</span>
          <svg
            class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
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
};

export const long = () => {
  useEffect(() => {
    pagination();
  }, []);

  return `
  <nav
    aria-label="Pagination Navigation"
    data-sprk-pagination="long"
    data-id="pagination-2"
  >
    <ul
      class="sprk-c-Pagination sprk-o-HorizontalList sprk-o-HorizontalList--spacing-small"
    >
      <li>
        <a
          class="sprk-c-Pagination__icon sprk-b-Link sprk-b-Link--plain"
          href="#"
          data-sprk-pagination="prev">
          <span class="sprk-u-ScreenReaderText">Prev</span>
          <svg
            class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
            viewBox="0 0 64 64"
          >
            <use xlink:href="#chevron-left"></use>
          </svg>
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__link sprk-b-Link"
          href="#"
          data-sprk-pagination="item">
          1
        </a>
      </li>

      <li
        class="sprk-u-pas"
        data-sprk-pagination="dots">
        ...
      </li>

      <li>
        <a
          class="sprk-c-Pagination__link sprk-c-Pagination__link--current sprk-b-Link"
          href="#"
          aria-current="true"
          data-sprk-pagination="item">
          11
        </a>
      </li>

      <li
        class="sprk-u-pas"
        data-sprk-pagination="dots">
        ...
      </li>

      <li>
        <a
          class="sprk-c-Pagination__link sprk-b-Link"
          href="#"
          data-sprk-pagination="item">
          22
        </a>
      </li>

      <li>
        <a
          class="sprk-c-Pagination__icon sprk-b-Link sprk-b-Link--plain"
          href="#"
          data-sprk-pagination="next">
          <svg
            class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
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

export const pager = () => {
  useEffect(() => {
    pagination();
  }, []);

  return `
  <nav aria-label="Pagination Navigation" data-id="pagination-3">
    <ul
      class="sprk-c-Pagination sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large"
    >
      <li>
        <a
          class="sprk-c-Pagination__icon sprk-b-Link sprk-b-Link--plain"
          href=""
        >
          <svg
            class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
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
          href=""
        >
          <svg
            class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
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
