import { useEffect } from '@storybook/client-api';
import { checkbox } from './checkbox';
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

export const defaultStory = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
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
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['checkbox'],
  }
};

export const invalidCheckbox = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
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
};

invalidCheckbox.story = {
  name: 'Invalid',
  parameters: {
    jest: ['checkbox'],
  }
};

export const disabledCheckbox = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return`
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label sprk-b-Label--disabled">
            Checkbox Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Label--disabled sprk-b-Checkbox__label"
          >
            Checkbox Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Label--disabled sprk-b-Checkbox__label"
          >
            Checkbox Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Label--disabled sprk-b-Checkbox__label"
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
};

disabledCheckbox.story = {
  name: 'Disabled',
  parameters: {
    jest: ['checkbox'],
  }
};
