import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/SSN',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('components', 'input')}
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
        class="sprk-b-TextInput sprk-u-Width-100"
        id="ssn"
        data-id="ssn"
        type="password"
        placeholder="000-00-0000"
        aria-describedby="ssn--error-container"
      >

      <div
        class="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          id="ssn-show-ssn"
          type="checkbox"
          data-id="ssn-show-ssn"
        >

        <label
          for="ssn-show-ssn"
          class="sprk-b-Label sprk-b-Label--inline"
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
        class="sprk-b-TextInput sprk-b-TextInput--error sprk-u-Width-100"
        id="ssn"
        data-id="ssn"
        type="password"
        placeholder="000-00-0000"
        aria-invalid="true"
        aria-describedby="ssn--error-container"
      >

      <div
        class="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          id="ssn-show-ssn"
          type="checkbox"
          data-id="ssn-show-ssn"
        >

        <label
          for="ssn-show-ssn"
          class="sprk-b-Label sprk-b-Label--inline"
        >
          Show SSN
        </label>
      </div>
      <div
        class="sprk-b-ErrorContainer"
        id="ssn--error-container"
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

invalidSSNInput.story = {
  name: 'Invalid',
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
        class="sprk-b-TextInput sprk-u-Width-100"
        id="ssn"
        data-id="ssn"
        type="password"
        placeholder="000-00-0000"
        aria-describedby="ssn--error-container"
        disabled
      >

      <div
        class="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          id="ssn-show-ssn"
          type="checkbox"
          data-id="ssn-show-ssn"
          disabled
        >

        <label
          for="ssn-show-ssn"
          class="sprk-b-Label sprk-b-Label--disabled sprk-b-Label--inline"
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
};
