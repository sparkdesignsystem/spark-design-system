import { useEffect } from '@storybook/client-api';
import { autocomplete } from './autocomplete';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Autocomplete',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('autocomplete')}
- autocompletes complete automatically
    `,
    docs: { iframeHeight: 200 },
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
          <li>Apple</li>
          <li>Apricot</li>
          <li>Avocado</li>
          <li>Banana</li>
          <li>Blackberry</li>
          <li>Blueberry</li>
          <li>Clementine</li>
          <li>Fig</li>
          <li>Grape</li>
          <li>Kumquat</li>
          <li>Lemon</li>
          <li>Papaya</li>
        </ul>

        <div
          class="sprk-b-ErrorContainer"
          id="input--error-container"
        ></div>
      </div>
    </div>
    <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">1</button>
    <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">2</button>
    <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">3</button>
    <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">4</button>
    <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">5</button>
    <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">6</button>
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
        <li>Apple</li>
        <li>Apricot</li>
        <li>Avocado</li>
        <li>Banana</li>
        <li>Blackberry</li>
        <li>Blueberry</li>
        <li>Clementine</li>
        <li>Fig</li>
        <li>Grape</li>
        <li>Kumquat</li>
        <li>Lemon</li>
        <li>Papaya</li>
      </ul>

      <div
        class="sprk-b-ErrorContainer"
        id="text-input-huge--error-container"
      ></div>
    </div>
  </div>
  <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">1</button>
  <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">2</button>
  <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">3</button>
  <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">4</button>
  <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">5</button>
  <button class="sprk-c-Button sprk-u-Display--block sprk-u-mbm">6</button>
  `;
};

hugeStory.story = {
  name: 'Huge',
  parameters: {
    jest: ['autocomplete'],
  },
};
