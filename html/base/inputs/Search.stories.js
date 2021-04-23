import '../../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Search',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 140 },
  },
};

export const searchInput = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="search-input"
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
          viewBox="0 0 64 64"
          aria-hidden="true"
          focusable="false"
        >
          <use xlink:href="#search" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--has-svg-icon
            sprk-u-Width-100
          "
          id="search-input"
          data-id="search-input"
          type="search"
          placeholder="Search"
          aria-describedby="search--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="search--error-container"
      ></div>
    </div>
  `;

searchInput.story = {
  name: 'Default',
};

export const invalidSearchInput = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="search-input"
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
          viewBox="0 0 64 64"
        >
          <use xlink:href="#search" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextArea--error
            sprk-b-TextInput--has-svg-icon
            sprk-u-Width-100
          "
          id="search-input"
          data-id="search-input"
          type="search"
          placeholder="Search"
          aria-invalid="true"
          aria-describedby="search--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="search--error-container"
      >
        <svg
          class="sprk-c-Icon sprk-b-ErrorIcon"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#exclamation-filled" />
        </svg>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </div>
    </div>
  `;

invalidSearchInput.story = {
  name: 'Invalid',
};

export const disabledSearchInput = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="search-input"
        class="
          sprk-b-Label
          sprk-b-Label--disabled
          sprk-b-Label--with-icon
          sprk-u-ScreenReaderText"
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
          viewBox="0 0 64 64"
        >
          <use xlink:href="#search" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--has-svg-icon
            sprk-u-Width-100
          "
          id="search-input"
          data-id="search-input"
          type="search"
          placeholder="Search"
          aria-describedby="search--error-container"
          disabled
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="search--error-container"
      ></div>
    </div>
  `;

disabledSearchInput.story = {
  name: 'Disabled',
};
