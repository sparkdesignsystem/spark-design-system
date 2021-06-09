import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Monetary',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field may contain special characters (,)
which you may need to remove before submitting the form.
- Requires Additional Engineering:
  - Validation – When input is not valid, do the following
    - Add \`sprk-b-TextInput--error\` class to \`input\` element.
    - Set \`aria-invalid=”true”\` and
    \`area-describedby=”[id-of-error-container]”\` on
    \`input\` element.
    - Hide the error container (\`div\`
    with \`sprk-b-ErrorContainer\` class)
  - Reformatting to monetary pattern (##.##) - On
  blur, it should reformat to add commas and
  decimals to the hundredth place.
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
          "
          id="monetary"
          data-id="monetary-input"
          type="tel"
          placeholder="0.00"
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
  parameters: {
    jest: ['monetaryInput'],
  },
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
          "
          id="monetary"
          data-id="monetary-input"
          type="tel"
          placeholder="0.00"
          aria-invalid="true"
          aria-describedby="monetary--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="monetary--error-container"
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
          "
          id="monetary"
          data-id="monetary-input"
          type="tel"
          placeholder="0.00"
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
