import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/SSN',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special characters
(-) which you may need to remove before submitting the form.
- The \`sprk-b-InputContainer--huge\` class is available for
use on this input. For full functionality, see guidelines in the
[Huge Text Input](/docs/components-input-huge-text--huge-text-input)
section.
- Requires Additional Engineering:
  - Show/Hide Functionality - Create a function that toggles
  the input element’s \`type\` attribute between \`text\` and
  \`password\` and connect it to the checkbox.
  - Validation – When input is not valid, do the following
    - Add \`sprk-b-TextInput--error\` class to \`input\` element.
    - Set \`aria-invalid=”true”\` and
    \`area-describedby=”[id-of-error-container]”\` on
    \`input\` element.
    - Hide the error container (div with \`sprk-b-ErrorContainer\` class)
  - Reformatting to SSN pattern (###-##-####) - After valid input,
  it should reformat to having the first three numbers,
  a dash, the next two numbers, a dash, and the last four numbers.
`,
    docs: { iframeHeight: 140 },
  },
};

export const SSNInput = () => `
    <div
      class="sprk-b-InputContainer"
    >
      <label
        for="ssn"
        class="sprk-b-Label"
      >
        Social Security #
      </label>

      <input
        class="sprk-b-TextInput"
        id="ssn"
        data-id="ssn"
        type="password"
        placeholder="000-00-0000"
        aria-describedby="ssn--error-container"
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
          id="ssn-show-ssn"
          type="checkbox"
          data-id="ssn-show-ssn"
        >

        <label
          for="ssn-show-ssn"
          class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
        >
          Show SSN
        </label>
    </div>

      <div
        class="sprk-b-ErrorContainer"
        id="ssn--error-container"
      ></div>
    </div>
  `;

SSNInput.story = {
  name: 'Default',
  parameters: {
    jest: ['ssnInput'],
  },
};

export const invalidSSNInput = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="ssn"
        class="sprk-b-Label"
      >
        Social Security #
      </label>

      <input
        class="sprk-b-TextInput sprk-b-TextInput--error"
        id="ssn"
        data-id="ssn"
        type="password"
        placeholder="000-00-0000"
        aria-invalid="true"
        aria-describedby="ssn--error-container"
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
          id="ssn-show-ssn"
          type="checkbox"
          data-id="ssn-show-ssn"
        >

        <label
          for="ssn-show-ssn"
          class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
        >
          Show SSN
        </label>
      </div>
      <div
        class="sprk-b-ErrorContainer"
        id="ssn--error-container"
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

invalidSSNInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['ssnInput'],
  },
};

export const disabledSSNInput = () => `
    <div
      class="sprk-b-InputContainer"
    >
      <label
        for="ssn"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Social Security #
      </label>

      <input
        class="sprk-b-TextInput"
        id="ssn"
        data-id="ssn"
        type="password"
        placeholder="000-00-0000"
        aria-describedby="ssn--error-container"
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
          id="ssn-show-ssn"
          type="checkbox"
          data-id="ssn-show-ssn"
          disabled
        >

        <label
          for="ssn-show-ssn"
          class="
            sprk-b-Label
            sprk-b-Label--disabled
            sprk-b-Label--inline
            sprk-b-Checkbox__label
          "
        >
          Show SSN
        </label>
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="ssn--error-container"
      ></div>
    </div>
  `;

disabledSSNInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['ssnInput'],
  },
};
