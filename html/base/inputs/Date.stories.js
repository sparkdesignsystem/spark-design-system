import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date',
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

invalidDateInput.story = {
  name: 'Invalid',
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
};
