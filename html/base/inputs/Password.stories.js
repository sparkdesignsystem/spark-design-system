export default {
  title: 'Components/Input/Password',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const passwordInputStory = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="password"
    >
      <label
        for="password"
        class="sprk-b-Label"
      >
        Password
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="password"
        data-id="password-input"
        type="password"
        aria-describedby="password--error-container"
      >

      <div
        class="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          id="password-show-password"
          type="checkbox"
          data-id="password-show-password"
        >

        <label
          for="password-show-password"
          class="sprk-b-Label sprk-b-Label--inline"
        >
          Show Password
        </label>
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="password--error-container"
      ></div>
    </div>
  `;

passwordInputStory.story = {
  name: 'Default',
};

export const invalidPasswordInputStory = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="password"
    >
      <label
        for="password"
        class="sprk-b-Label"
      >
        Password
      </label>

      <input
        class="sprk-b-TextInput sprk-b-TextInput--error sprk-u-Width-100"
        id="password"
        data-id="password-input"
        type="password"
        aria-invalid="true"
        aria-describedby="password--error-container"
      >

      <div
        class="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          id="password-show-password"
          type="checkbox"
          data-id="password-show-password"
        >

        <label
          for="password-show-password"
          class="sprk-b-Label sprk-b-Label--inline"
        >
          Show Password
        </label>
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="password--error-container"
      ></div>
    </div>
  `;

invalidPasswordInputStory.story = {
  name: 'Invalid',
};

export const disabledPasswordInputStory = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="password"
    >
      <label
        for="password"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Password
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="password"
        data-id="password-input"
        type="password"
        aria-describedby="password--error-container"
        disabled
      >

      <div
        class="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          id="password-show-password"
          type="checkbox"
          data-id="password-show-password"
          disabled
        >

        <label
          for="password-show-password"
          class="sprk-b-Label sprk-b-Label--disabled sprk-b-Label--inline"
        >
          Show Password
        </label>
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="password--error-container"
      ></div>
    </div>
  `;

disabledPasswordInputStory.story = {
  name: 'Disabled',
};
