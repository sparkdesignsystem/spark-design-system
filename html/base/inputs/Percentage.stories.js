import '../../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Percentage',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 140 },
  },
};

export const percentageInput = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="percentage"
    >
      <div
        class="
          sprk-b-InputContainer__icon-container
          sprk-b-InputContainer__icon-container--narrow
        "
      >
        <label
          for="percentage"
          class="sprk-b-Label"
        >
          Interest Rate
        </label>

        <svg
          class="
            sprk-c-Icon
            sprk-b-InputContainer__icon
            sprk-b-InputContainer__icon--right
          "
          viewBox="0 0 64 64"
        >
          <use xlink:href="#percent" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-InputContainer__input
            sprk-b-InputContainer__input--has-icon-right
          "
          id="percentage"
          data-id="percentage"
          type="tel"
          aria-describedby="percentage--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="percentage--error-container"
      ></div>
    </div>
  `;

percentageInput.story = {
  name: 'Default',
};

export const invalidPercentageInput = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="percentage"
    >
      <div
        class="
          sprk-b-InputContainer__icon-container
          sprk-b-InputContainer__icon-container--narrow
        "
      >
        <label
          for="percentage"
          class="sprk-b-Label"
        >
          Interest Rate
        </label>

        <svg
          class="
            sprk-c-Icon
            sprk-b-InputContainer__icon
            sprk-b-InputContainer__icon--right
          "
          viewBox="0 0 64 64"
        >
          <use xlink:href="#percent" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--error
            sprk-b-InputContainer__input
            sprk-b-InputContainer__input--has-icon-right
          "
          id="percentage"
          data-id="percentage"
          type="tel"
          aria-invalid="true"
          aria-describedby="percentage--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="percentage--error-container"
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

invalidPercentageInput.story = {
  name: 'Invalid',
};

export const disabledPercentageInput = () => `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="percentage"
    >
      <div
        class="
          sprk-b-InputContainer__icon-container
          sprk-b-InputContainer__icon-container--narrow
        "
      >
        <label
          for="percentage"
          class="sprk-b-Label sprk-b-Label--disabled"
        >
          Interest Rate
        </label>

        <svg
          class="
            sprk-c-Icon
            sprk-b-InputContainer__icon
            sprk-b-InputContainer__icon--right
          "
          viewBox="0 0 64 64"
        >
          <use xlink:href="#percent" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-InputContainer__input
            sprk-b-InputContainer__input--has-icon-right
          "
          id="percentage"
          data-id="percentage"
          type="tel"
          aria-describedby="percentage--error-container"
          disabled
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="percentage--error-container"
      ></div>
    </div>
  `;

disabledPercentageInput.story = {
  name: 'Disabled',
};
