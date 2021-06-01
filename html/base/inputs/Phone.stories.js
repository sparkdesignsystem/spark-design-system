import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Phone',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special
characters (parenthesis and -) which you may
need to remove before submitting the form.
- The \`sprk-b-InputContainer--huge\` class is
available for use on this input. For full
functionality, see guidelines in the
[Huge Text Input](/docs/components-input-huge-text--huge-text-input) section.
-  Requires Additional Engineering:
  - Validation – When input is not valid, do the following
    - Add \`sprk-b-TextInput--error\` class to \`input\` element.
    - Set \`aria-invalid=”true”\` and
    \`area-describedby=”[id-of-error-container]”\` on
    \`input\` element.
    - Hide the error container (div with \`sprk-b-ErrorContainer\` class)
  - Reformatting to phone number pattern (###) ###-#### -
  After valid input, it should reformat to add commas
  and decimals to the hundredth place.
`,
    docs: { iframeHeight: 140 },
  },
};

export const phoneInput = () => `
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
        class="sprk-b-TextInput"
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

phoneInput.story = {
  name: 'Default',
  parameters: {
    jest: ['phoneInput'],
  },
};

export const invalidPhoneInput = () => `
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
        class="sprk-b-TextInput sprk-b-TextArea--error"
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
          class="sprk-c-Icon sprk-b-ErrorIcon"
          viewBox="0 0 64 64"
          aria-hidden="true"
          focusable="false"
        >
          <use xlink:href="#exclamation-filled" />
        </svg>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </div>
    </div>
  `;

invalidPhoneInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['phoneInput'],
  },
};

export const disabledPhoneInput = () => `
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
        class="sprk-b-TextInput"
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

disabledPhoneInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['phoneInput'],
  },
};
