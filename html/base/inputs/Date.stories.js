export default {
  title: 'Components/Input/Date',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const dateInputStory = () => `
    <div
      class="sprk-b-InputContainer"
    >
      <label
        for="date-input"
        class="sprk-b-Label"
      >
        Date
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="date-input"
        data-id="date-input"
        type="text"
        placeholder="MM/DD/YYYY"
        aria-describedby="date-input--error-container"
      >

      <div
        class="sprk-b-ErrorContainer"
        id="date-input--error-container"
      ></div>
    </div>
  `;

dateInputStory.story = {
  name: 'Default',
};

export const invalidDateInputStory = () => `
    <div
      class="sprk-b-InputContainer"
    >
      <label
        for="date-input"
        class="sprk-b-Label"
      >
        Date
      </label>

      <input
        class="sprk-b-TextInput sprk-b-TextInput--error sprk-u-Width-100"
        id="date-input"
        data-id="date-input"
        type="text"
        placeholder="MM/DD/YYYY"
        aria-invalid="true"
        aria-describedby="date-input--error-container"
      >

      <div
        class="sprk-b-ErrorContainer"
        id="date-input--error-container"
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

invalidDateInputStory.story = {
  name: 'Invalid',
};

export const disabledDateInputStory = () => `
    <div
      class="sprk-b-InputContainer"
    >
      <label
        for="date-input"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Date
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="date-input"
        data-id="date-input"
        type="text"
        placeholder="MM/DD/YYYY"
        aria-describedby="date-input--error-container"
        disabled
      >

      <div
        class="sprk-b-ErrorContainer"
        id="date-input--error-container"
      ></div>
    </div>
  `;

disabledDateInputStory.story = {
  name: 'Disabled',
};
