import '../../utilities/polyfills/classListSVG';

export default {
  title: 'Components/Input/Percentage',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const percentageInput = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="percentage"
    >
      <div
        class="
          sprk-b-InputContainer__icon-container
          sprk-b-InputContainer__icon-container--narrow
        "
      >
        <label
          for="percentage"
          class="sprk-b-Label"
        >
          Interest Rate
        </label>

        <svg
          class="
            sprk-c-Icon
            sprk-b-InputContainer__icon
            sprk-b-InputContainer__icon--right
          "
          viewBox="0 0 64 64"
        >
          <use xlink:href="#percent" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-InputContainer__input
            sprk-b-InputContainer__input--has-icon-right
            sprk-u-Width-100
          "
          id="percentage"
          data-id="percentage"
          type="tel"
          aria-describedby="percentage--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="percentage--error-container"
      ></div>
    </div>
  `;

percentageInput.story = {
  name: 'Default',
};
