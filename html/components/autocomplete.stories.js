import { useEffect } from '@storybook/client-api';
import { autocomplete } from './autocomplete';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Autocomplete',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('autocomplete')}
- Live demos of the Autocomplete are available on our [demo site](https://spark-testhtml.netlify.app/autocomplete.html).

#### Keyboard Interactions
- The list can be closed by clicking on the document body or by pressing
the Escape key.
- When the list is open, items in the list can be highlighted using the
Up and Down Arrow keys. Note that this highlight is distinct from the
browser focus, which stays in the input.

#### Accessibility
- The component should include an element with \`aria-live="polite"\`. The
  contents of this element should be updated to reflect the number of visible
  items in the list.
- The input should have \`aria-autocomplete="list"\` and \`role="combobox"\`.
  These attributes correctly identify the control to Assistive Technology.
- The input should have \`autocomplete="off"\`, \`autocapitalize="off"\`,
  and \`spellcheck="false"\`. These attributes deactivate default browser
  behavior that can interfere with autocomplete behavior.
- The list should have \`role="listbox"\`.
- When the list is hidden, the text input should have \`aria-expanded="false"\`.
- When the list is visible, the text input should have \`aria-expanded="true"\`.
- When the list is visible and an item is highlighted (with the arrow keys),
  the text input should have \`aria-activedescendant\` set to the \`id\`
  of the active item.
- When a list item is highlighted (with the arrow keys), it should have
  \`aria-selected="true"\`.
- Each selectable list item should have \`role="option"\`.


#### Requires Additional Engineering:
In order to keep the Spark Autocomplete generic enough to use in a wide
  variety of use cases, some of the interactivity of the component is left
  up to implementing teams.

  - Filtering the list
    - Display a message if a filter returns 0 results
    - Highlight the matching text in the search results
    - Update the contents of the associated \`aria-live\` element
  - Showing the list
    - set \`aria-expanded\` to \`true\` on the input
  - Hiding the list
    - remove \`aria-selected\` from the active list item
    - remove \`aria-activedescendant\` from the input
    - set \`aria-expanded\` to false on the input
  - Selecting an item in the list by clicking it or pressing the Enter key.
  - \`data-sprk-autocomplete-no-select\` can be applied to any result item
  that you wish to omit from the arrow key highlighting behavior. For example
  a "No results found" message or an item that is hidden by a filter.
    `,
    docs: { iframeHeight: 400 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    autocomplete();
  }, []);

  return `
    <div data-sprk-autocomplete="container">
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>

      <div class="sprk-b-InputContainer">
        <label
          id="autocomplete-label"
          for="autocomplete-input"
          class="sprk-b-Label"
        >
          Search for a Fruit
        </label>

        <div class="sprk-b-TextInputIconContainer">
          <svg
            class="
              sprk-c-Icon
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--stroke-current-color
            "
            viewBox="0 0 64 64" aria-hidden="true"
          >
            <use xlink:href="#search" />
          </svg>

          <input
            class="
                  sprk-b-TextInput
                  sprk-b-TextInput--has-svg-icon
                  sprk-u-Width-100
                "
            id="autocomplete-input"
            type="text"
            aria-labelledby="autocomplete-label"
            aria-describedby="input--error-container"
            aria-expanded="true"
            aria-autocomplete="list"
            role="combobox"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
          >
        </div>

        <ul
          class="sprk-c-Autocomplete__results sprk-u-Width-100"
          role="listbox"
          aria-labelledby="autocomplete-label"
        >
          <li role="option">Apple</li>
          <li role="option">Apricot</li>
          <li role="option">Avocado</li>
          <li role="option">Banana</li>
          <li role="option">Blackberry</li>
          <li role="option">Blueberry</li>
          <li role="option">Clementine</li>
          <li role="option">Fig</li>
          <li role="option">Grape</li>
          <li role="option">Kumquat</li>
          <li role="option">Lemon</li>
          <li role="option">Papaya</li>
        </ul>

        <div
          class="sprk-b-ErrorContainer"
          id="input--error-container"
        ></div>
      </div>
    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['autocomplete'],
  },
};

export const hugeStory = () => {
  useEffect(() => {
    autocomplete();
  }, []);

  return `
  <div data-sprk-autocomplete="container">
    <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>

    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <div class="sprk-b-TextInputIconContainer">
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          viewBox="0 0 64 64" aria-hidden="true"
        >
          <use xlink:href="#search" />
        </svg>
        <input
          id="text-input-huge"
          type="text"
          class="sprk-b-TextInput sprk-u-Width-100"
          placeholder="Search for a Fruit"
          aria-labelledby="input-label-huge"
          aria-describedby="input--error-container"
          aria-expanded="true"
          aria-autocomplete="list"
          role="combobox"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          data-sprk-input="huge"
        >
        <label
          for="text-input-huge"
          id="input-label-huge"
          class="sprk-b-Label"
        >
          Search for a Fruit
        </label>
      </div>

      <ul
        class="sprk-c-Autocomplete__results sprk-u-Width-100"
        role="listbox"
        aria-labelledby="input-label-huge"
      >
        <li role="option">Apple</li>
        <li role="option">Apricot</li>
        <li role="option">Avocado</li>
        <li role="option">Banana</li>
        <li role="option">Blackberry</li>
        <li role="option">Blueberry</li>
        <li role="option">Clementine</li>
        <li role="option">Fig</li>
        <li role="option">Grape</li>
        <li role="option">Kumquat</li>
        <li role="option">Lemon</li>
        <li role="option">Papaya</li>
      </ul>

      <div
        class="sprk-b-ErrorContainer"
        id="text-input-huge--error-container"
      ></div>
    </div>
  </div>
  `;
};

hugeStory.story = {
  name: 'Huge',
  parameters: {
    jest: ['autocomplete'],
  },
};
