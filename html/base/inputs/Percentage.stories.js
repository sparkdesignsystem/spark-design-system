import '../../utilities/polyfills/classListSVG';
import { useEffect } from '@storybook/client-api';
import { tooltip } from '../../components/tooltip';
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

export const percentageInput = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `
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
          Interest Rate<span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
        <button
          type="button"
          data-sprk-tooltip="trigger"
          class="sprk-c-Tooltip__trigger"
          aria-labelledby="tooltip_1"
          type="button"
        >
          <svg
            class="sprk-c-Icon sprk-c-Icon--filled"
            aria-hidden="true"
          >
            <use xlink:href="#question-filled" />
          </svg>
        </button>
        <span
          data-sprk-tooltip="content"
          class="sprk-c-Tooltip"
          aria-hidden="true"
          id="tooltip_1"
          role="tooltip"
        >
          Use Tooltips to provide info that is not vital to completing the task.
          Keep the text short and stick to what’s hasdfasdfelpful and relevdfdfasdfasdfa asdfasdfdfasdfasdfant.
        </span>
      </span>
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
            sprk-u-Width-100
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
};

percentageInput.story = {
  name: 'Default',
};

export const invalidPercentageInput = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `
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
          Interest Rate<span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
        <button
          type="button"
          data-sprk-tooltip="trigger"
          class="sprk-c-Tooltip__trigger"
          aria-labelledby="tooltip_1"
          type="button"
        >
          <svg
            class="sprk-c-Icon sprk-c-Icon--filled"
            aria-hidden="true"
          >
            <use xlink:href="#question-filled" />
          </svg>
        </button>
        <span
          data-sprk-tooltip="content"
          class="sprk-c-Tooltip"
          aria-hidden="true"
          id="tooltip_1"
          role="tooltip"
        >
          Use Tooltips to provide info that is not vital to completing the task.
          Keep the text short and stick to what’s helpful and relevant.
        </span>
      </span>
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
            sprk-u-Width-100
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
};

invalidPercentageInput.story = {
  name: 'Invalid',
};

export const disabledPercentageInput = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `
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
          Interest Rate<span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
        <button
          type="button"
          data-sprk-tooltip="trigger"
          class="sprk-c-Tooltip__trigger"
          aria-labelledby="tooltip_1"
          type="button"
        >
          <svg
            class="sprk-c-Icon sprk-c-Icon--filled"
            aria-hidden="true"
          >
            <use xlink:href="#question-filled" />
          </svg>
        </button>
        <span
          data-sprk-tooltip="content"
          class="sprk-c-Tooltip"
          aria-hidden="true"
          id="tooltip_1"
          role="tooltip"
        >
          Use Tooltips to provide info that is not vital to completing the task.
          Keep the text short and stick to what’s helpful and relevant.
        </span>
      </span>
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
            sprk-u-Width-100
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
};

disabledPercentageInput.story = {
  name: 'Disabled',
};
