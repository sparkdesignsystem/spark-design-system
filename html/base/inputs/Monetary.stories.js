import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Monetary',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 140 },
  },
};

export const monetaryInput = () => `
    <div
      class="sprk-b-InputContainer"
    >
      <div
        class="
          sprk-b-TextInputIconContainer
          sprk-b-TextInputIconContainer--has-text-icon
        "
      >
        <label
          for="monetary"
          class="sprk-b-Label sprk-b-Label--monetary"
        >
          Payment
        </label>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--has-text-icon
            sprk-u-Width-100
          "
          id="monetary"
          data-id="monetary-input"
          type="tel"
          aria-describedby="monetary--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="monetary--error-container"
      ></div>
    </div>
  `;

monetaryInput.story = {
  name: 'Default',
};

export const invalidMonetaryInput = () => `
    <div
      class="sprk-b-InputContainer"
    >
      <div
        class="
          sprk-b-TextInputIconContainer
          sprk-b-TextInputIconContainer--has-text-icon
        "
      >
        <label
          for="monetary"
          class="sprk-b-Label sprk-b-Label--monetary"
        >
          Payment
        </label>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--error
            sprk-b-TextInput--has-text-icon
            sprk-u-Width-100
          "
          id="monetary"
          data-id="monetary-input"
          type="tel"
          aria-invalid="true"
          aria-describedby="monetary--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="monetary--error-container"
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

invalidMonetaryInput.story = {
  name: 'Invalid',
};

export const disabledMonetaryInput = () => `
    <div
      class="sprk-b-InputContainer"
    >
      <div
        class="
          sprk-b-TextInputIconContainer
          sprk-b-TextInputIconContainer--has-text-icon
        "
      >
        <label
          for="monetary"
          class="sprk-b-Label sprk-b-Label--disabled sprk-b-Label--monetary"
        >
          Payment
        </label>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--has-text-icon
            sprk-u-Width-100
          "
          id="monetary"
          data-id="monetary-input"
          type="tel"
          aria-describedby="monetary--error-container"
          disabled
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="monetary--error-container"
      ></div>
    </div>
  `;

disabledMonetaryInput.story = {
  name: 'Disabled',
};
