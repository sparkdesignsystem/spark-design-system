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
      <div aria-live="polite"></div>

      <div class="sprk-b-InputContainer">
        <label
          for="autocomplete-input"
          class="sprk-b-Label sprk-b-Label--with-icon sprk-u-ScreenReaderText"
        >
          Search
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
            aria-describedby="input--error-container"
          >
        </div>

        <ul
          class="sprk-c-Autocomplete__results"
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
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['autocomplete'],
  },
};
