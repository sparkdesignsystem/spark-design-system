import '../../utilities/polyfills/classListSVG';

export default {
  title: 'Components/Input/Search',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const searchInput = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="search-input"
        class="sprk-b-Label"
      >
        Search
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="search-input"
        data-id="search-input"
        type="search"
        role="search"
        aria-describedby="search--error-container"
      >

      <div
        class="sprk-b-ErrorContainer"
        id="search--error-container"
      ></div>
    </div>
  `;

searchInput.story = {
  name: 'Default',
};

export const inlineSearchInput = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="search-inline"
        class="sprk-b-Label sprk-b-Label--with-icon sprk-u-ScreenReaderText"
      >
        Inline Search
      </label>

      <div class="sprk-b-TextInputIconContainer">
        <svg
          class="sprk-c-Icon sprk-c-Icon--m sprk-c-Icon--stroke-current-color"
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
          id="search-inline"
          data-id="search-inline"
          type="text"
          placeholder="Search"
          aria-describedby="search-inline--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="search-inline--error-container"
      ></div>
    </div>
  `;

inlineSearchInput.story = {
  name: 'Inline',
};
