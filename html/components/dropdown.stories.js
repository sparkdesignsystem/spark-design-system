import { useEffect } from '@storybook/client-api';
import { dropdowns } from './dropdown';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Dropdown',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('dropdown')}
- The Dropdown should have the \`aria-haspopup="true"\`
attribute. This tells screen readers that the
element has a popup menu.
    `,
    docs: { iframeHeight: 200 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    dropdowns();
  }, []);

  return `
    <a
      class="sprk-c-Dropdown__trigger sprk-b-Link sprk-b-Link--plain"
      href="#nogo"
      data-sprk-dropdown-trigger="dropdown01"
      aria-haspopup="listbox"
      aria-label="Dropdown example description"
    >
      <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mls" viewBox="0 0 100 100">
        <use xlink:href="#settings" />
      </svg>
    </a>

    <div
      class="sprk-c-Dropdown sprk-u-Display--none"
      data-sprk-dropdown="dropdown01"
      data-id="dropdown-1"
    >
      <div class="sprk-c-Dropdown__header">
        <h2 class="sprk-c-Dropdown__title">My Choices</h2>
      </div>

      <ul
        class="sprk-c-Dropdown__links"
        role="listbox"
        aria-label="Dropdown example description"
      >
        <li
          class="sprk-c-Dropdown__item"
          role="option"
        >
          <a class="sprk-c-Dropdown__link" href="#nogo">
            Choice 1
          </a>
        </li>

        <li
          class="sprk-c-Dropdown__item"
          role="option"
        >
          <a class="sprk-c-Dropdown__link" href="#nogo">
            Choice 2
          </a>
        </li>
      </ul>
    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['dropdown'],
  },
};

export const informational = () => {
  useEffect(() => {
    dropdowns();
  }, []);

  return `
    <a
      class="sprk-c-Dropdown__trigger sprk-b-Link sprk-b-Link--plain sprk-u-mrs"
      href="#nogo"
      data-sprk-dropdown-trigger="dropdown02"
      aria-haspopup="listbox"
      aria-label="Dropdown example description"
      data-analytics="object.action.event">
        <span
          data-sprk-dropdown-trigger-text-container=""
          >Make a selection...</span>
        <svg
          class="
            sprk-c-Icon 
            sprk-c-Icon--filled-current-color 
            sprk-c-Icon--stroke-current-color 
            sprk-u-mls
          "
          viewBox="0 0 100 100">
          <use xlink:href="#chevron-down" />
        </svg>
    </a>

    <div
      class="sprk-c-Dropdown sprk-u-Display--none"
      data-sprk-dropdown="dropdown02"
      data-id="dropdown-2"
    >
      <div class="sprk-c-Dropdown__header">
        <h2 class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo">
          My Choices
        </h2>
      </div>

      <ul
        class="sprk-c-Dropdown__links"
        role="listbox"
        aria-label="Dropdown example description"
      >
        <li
          class="sprk-c-Dropdown__item"
          role="option"
        >
          <a
            class="sprk-c-Dropdown__link"
            href="#nogo"
            aria-label="Choice Title 1"
            data-sprk-dropdown-choice="Choice Title 1"
          >
            <p class="sprk-b-TypeBodyOne">
              Choice Title 1
            </p>

            <p class="sprk-b-TypeBodyTwo">
              Information about this choice
            </p>

            <p class="sprk-b-TypeBodyTwo">
              Additional information
            </p>
          </a>
        </li>

        <li
          class="sprk-c-Dropdown__item"
          data-sprk-dropdown-choice="Choice Title 2"
          aria-label="Choice Title 2"
          role="option"
        >
          <a class="sprk-c-Dropdown__link" href="#nogo">
            <p class="sprk-b-TypeBodyOne">Choice Title 2</p>
            <p class="sprk-b-TypeBodyTwo">Information about this choice</p>
            <p class="sprk-b-TypeBodyTwo">Additional information</p>
          </a>
        </li>
      </ul>

      <div
        class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
      >
        <a class="sprk-c-Button sprk-c-Button--secondary" href="#nogo">
          Go Elsewhere
        </a>
      </div>
    </div>
  `;
};

informational.story = {
  name: 'Informational',
  parameters: {
    jest: ['dropdown'],
  },
};
