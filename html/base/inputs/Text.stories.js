export default {
  title: 'Components/Input/Text',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const textInput = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="text-input"
        class="sprk-b-Label"
      >
        Text Input Label
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="text-input"
        data-id="text-input"
        type="text"
        value=""
        aria-describedby="text-input--error-container"
      >

      <div
        class="sprk-b-ErrorContainer"
        id="text-input--error-container"
      ></div>
    </div>
  `;

textInput.story = {
  name: 'Default',
};

export const invalidTextInput = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="text-input-error"
        class="sprk-b-Label"
      >
        Text Input Label
      </label>

      <input
        class="sprk-b-TextInput sprk-b-TextInput--error sprk-u-Width-100"
        id="text-input-error"
        data-id="text-input-error"
        type="text"
        value=""
        aria-describedby="text-input-error--error-container"
      >

      <div
        class="sprk-b-ErrorContainer"
        id="text-input-error--error-container"
      >
        <svg
         class="sprk-c-Icon sprk-c-Icon--m sprk-b-ErrorIcon"
         viewBox="0 0 64 64"
        >
          <use xlink:href="#exclamation-filled-small" />
        </svg>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </div>
    </div>
  `;

invalidTextInput.story = {
  name: 'Invalid',
};

export const disabledTextInput = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="text-input-disabled"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Text Input Label
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="text-input-disabled"
        data-id="text-input-disabled"
        type="text"
        value=""
        aria-describedby="text-input-disabled--error-container"
        disabled
      >

      <div
        class="sprk-b-ErrorContainer"
        id="text-input-disabled--error-container"
      ></div>
    </div>
  `;

disabledTextInput.story = {
  name: 'Disabled',
};
