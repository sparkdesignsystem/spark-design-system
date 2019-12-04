export default {
  title: 'Components/Input/Phone',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const phoneInputStory = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="phone"
    >
      <label
        for="phone-input"
        class="sprk-b-Label"
      >
        Phone Number
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="phone-input"
        data-id="phone-input"
        type="tel"
        placeholder="(000) 000-0000"
        aria-describedby="phone-input--error-container"
      >
      <div
        class="sprk-b-ErrorContainer"
        id="phone-input--error-container"
      ></div>
    </div>
  `;

phoneInputStory.story = {
  name: 'Default',
};

export const invalidPhoneInputStory = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="phone"
    >
      <label
        for="phone-input"
        class="sprk-b-Label"
      >
        Phone Number
      </label>

      <input
        class="sprk-b-TextInput sprk-b-TextArea--error sprk-u-Width-100"
        id="phone-input"
        data-id="phone-input"
        type="tel"
        placeholder="(000) 000-0000"
        aria-invalid="true"
        aria-describedby="phone-input--error-container"
      >
      <div
        class="sprk-b-ErrorContainer"
        id="phone-input--error-container"
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

invalidPhoneInputStory.story = {
  name: 'Invalid',
};

export const disabledPhoneInputStory = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="phone"
    >
      <label
        for="phone-input"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Phone Number
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="phone-input"
        data-id="phone-input"
        type="tel"
        placeholder="(000) 000-0000"
        aria-describedby="phone-input--error-container"
        disabled
      >
      <div
        class="sprk-b-ErrorContainer"
        id="phone-input--error-container"
      ></div>
    </div>
  `;

disabledPhoneInputStory.story = {
  name: 'Disabled',
};
