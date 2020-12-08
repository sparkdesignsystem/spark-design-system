import { useEffect } from '@storybook/client-api';
import { autocomplete } from './autocomplete';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Autocomplete',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('autocomplete')}
- some additional engineering is required
- Filtering the list
  - make sure to update aria-live when the list updates
  - Highlight the matching text in the search results
  - Displaying a message if a filter returns 0 results
- Selecting an item in the list
- Showing the list
  - set aria-expanded to true on the input
- Hiding the list
  - remove aria-selected from the active list item
  - remove aria-activedescendant from the input
  - set aria-expanded to false on the input

- Applying CSS classes for error states
- data-sprk-autocomplete-no-select
- sprk-c-Autocomplete__results--active
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
            type="text"
            aria-describedby="input--error-container"
            aria-autocomplete="list"
            role="combobox"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
          >
        </div>

        <ul
          class="sprk-c-Autocomplete__results sprk-u-Width-100"
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
            class="sprk-b-TextInput sprk-u-Width-100"
            data-sprk-input="huge"
            id="text-input-huge"
            data-id="text-input-huge"
            type="text"
            aria-describedby="text-input-huge--error-container"
            placeholder="Search for a Fruit"
          >
          <label
            for="text-input-huge"
            class="sprk-b-Label"
          >
            Search for a Fruit
          </label>
      </div>

      <ul
        class="sprk-c-Autocomplete__results sprk-u-Width-100"
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
