export default {
  title: 'Components/Input/Textarea',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const textarea = () => (
  `
    <div class="sprk-b-InputContainer">
      <label
        for="textarea"
        class="sprk-b-Label"
      >
        Description
      </label>

      <textarea
        class="sprk-b-TextArea sprk-u-Width-100"
        id="textarea"
        data-id="textarea"
        aria-describedby="textarea--error-container"
      ></textarea>

      <div
        class="sprk-b-ErrorContainer"
        id="textarea--error-container"
      ></div>
    </div>
  `
);

textarea.story = {
  name: 'Default',
};

export const invalidTextarea = () => (
  `
    <div class="sprk-b-InputContainer">
      <label
        for="textarea-error"
        class="sprk-b-Label"
      >
        Description
      </label>

      <textarea
        class="sprk-b-TextArea sprk-b-TextArea--error sprk-u-Width-100"
        id="textarea-error"
        data-id="textarea-error"
        aria-describedby="textarea-error--error-container"
        aria-invalid="true"
      ></textarea>

      <div
        class="sprk-b-ErrorContainer"
        id="textarea-error--error-container"
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
  `
);

invalidTextarea.story = {
  name: 'Invalid',
};

export const disabledTextarea = () => (
  `
    <div class="sprk-b-InputContainer">
      <label
        for="textarea-disabled"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Description
      </label>

      <textarea
        class="sprk-b-TextArea sprk-u-Width-100"
        id="textarea-disabled"
        data-id="textarea-disabled"
        aria-describedby="textarea-disabled--error-container"
        disabled
      ></textarea>

      <div
        class="sprk-b-ErrorContainer"
        id="textarea--error-container"
      ></div>
    </div>
  `
);

disabledTextarea.story = {
  name: 'Disabled',
};
