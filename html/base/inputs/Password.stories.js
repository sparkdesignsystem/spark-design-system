import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Password',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
- The \`sprk-b-InputContainer--huge\` class is
available for use on this input. For full
functionality, see guidelines in the
[Huge Text Input](/docs/components-input-huge-text--huge-text-input) section.
- Requires Additional Engineering:
  - Show/Hide Functionality - Create a function that toggles
  the input element’s \`type\` attribute between \`text\` and
  \`password\` and connect it to the checkbox.
    `,
    docs: { iframeHeight: 140 },
  },
};

export const passwordInput = () => `
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
          sprk-b-Checkbox
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          class="sprk-b-Checkbox__input"
          id="password-show-password"
          type="checkbox"
          data-id="password-show-password"
        >

        <label
          for="password-show-password"
          class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
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

passwordInput.story = {
  name: 'Default',
  parameters: {
    jest: ['passwordInput'],
  },
};

export const invalidPasswordInput = () => `
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
          sprk-b-Checkbox
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          class="sprk-b-Checkbox__input"
          id="password-show-password"
          type="checkbox"
          data-id="password-show-password"
        >

        <label
          for="password-show-password"
          class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
        >
          Show Password
        </label>
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="password--error-container"
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

invalidPasswordInput.story = {
  name: 'Invalid',
};

export const disabledPasswordInput = () => `
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
          sprk-b-Checkbox
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          class="sprk-b-Checkbox__input"
          id="password-show-password"
          type="checkbox"
          data-id="password-show-password"
          disabled
        >

        <label
          for="password-show-password"
          class="
            sprk-b-Label
            sprk-b-Label--disabled
            sprk-b-Label--inline
            sprk-b-Checkbox__label
          "
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

disabledPasswordInput.story = {
  name: 'Disabled',
};
