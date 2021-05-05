import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special characters (/)
which you may need to remove before submitting the form.
- The \`sprk-b-InputContainer--huge\` class is available
for use on this input. For full functionality,
see guidelines in the
[Huge Text Input](/docs/components-input-huge-text--huge-text-input) section.
- Requires Additional Engineering:
  - Validation – When input is not valid, do the following
    - Add \`sprk-b-TextInput--error\` class to \`input\` element.
    - Set \`aria-invalid=”true”\` and
    \`area-describedby=”[id-of-error-container]”\` on \`input\`
    element.
    - Hide the error container (div with \`sprk-b-ErrorContainer\` class)
  - Reformatting to date pattern MM/DD/YYYY - After valid
  input, it should reformat to a two digit number month,
  followed by a forward slash, two digit number day, followed
  by another forward slash, and four digit number year.
`,
    docs: { iframeHeight: 140 },
  },
};

export const dateInput = () => `
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

dateInput.story = {
  name: 'Default',
  parameters: {
    jest: ['dateInput'],
  },
};

export const invalidDateInput = () => `
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

invalidDateInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['dateInput'],
  },
};

export const disabledDateInput = () => `
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

disabledDateInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['dateInput'],
  },
};
