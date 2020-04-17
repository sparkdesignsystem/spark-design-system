import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Checkbox',
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

export const checkbox = () => `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>

        <div class="sprk-b-SelectionContainer sprk-b-Checkbox-1">
          <input
            class="sprk-b-Checkbox__input-1"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label-1"
          >
            Checkbox Item 1
          </label>
        </div>

        <div class="sprk-b-SelectionContainer sprk-b-Checkbox-2">
          <label for="checkbox-2" class="">
            <input
              class="sprk-b-Checkbox__input-2"
              id="checkbox-2"
              data-id="checkbox-2"
              type="checkbox" 
              aria-describedby="checkbox--error-container"
            />
            <span class="sprk-b-Checkbox__label-2">Default checkbox state</span>
          </label>
        </div>

        <div class="sprk-b-SelectionContainer sprk-b-Checkbox-3">
          <input
            class="sprk-b-Checkbox__input-3"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label-3"
          >
            Checkbox Item 3
          </label>
        </div>
        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-4"
            data-id="checkbox-4"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-4"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Checkbox Item 4
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
      </div>
    </div>
  `;

checkbox.story = {
  name: 'Default',
};

export const invalidCheckbox = () => `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>

        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Checkbox Item 1
          </label>
        </div>

        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Checkbox Item 2
          </label>
        </div>

        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
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

invalidCheckbox.story = {
  name: 'Invalid',
};

export const disabledCheckbox = () => `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label sprk-b-Label--disabled">
            Checkbox Group Label
          </label>
        </legend>

        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Label--disabled"
          >
            Checkbox Item 1
          </label>
        </div>

        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Label--disabled"
          >
            Checkbox Item 2
          </label>
        </div>

        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Label--disabled"
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
      </div>
    </div>
  `;

disabledCheckbox.story = {
  name: 'Disabled',
};
