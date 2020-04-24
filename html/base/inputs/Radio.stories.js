import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { useEffect } from '@storybook/client-api';
import { radioInput } from './radioInput';

export default {
  title: 'Components/Input/Radio',
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
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Radio Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio"
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-1"
            data-id="radio-1"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
          >

          <label
            for="radio-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
          >
            Radio Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio"
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-2"
            data-id="radio-2"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
          >

          <label
            for="radio-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
          >
            Radio Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio"
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-3"
            data-id="radio-3"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
          >
          <label
            for="radio-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
          >
            Radio Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      ></div>
    </div>
  `
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['radioInput'],
  }
};

export const invalidRadioButton = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Radio Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio"
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-1"
            data-id="radio-1"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
          >

          <label
            for="radio-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
          >
            Radio Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio"
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-2"
            data-id="radio-2"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
          >

          <label
            for="radio-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
          >
            Radio Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio"
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-3"
            data-id="radio-3"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
          >
          <label
            for="radio-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
          >
            Radio Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
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
  `
};

invalidRadioButton.story = {
  name: 'Invalid',
  parameters: {
    jest: ['radioInput'],
  }
};

export const disabledRadioButton = () => {
  useEffect(() => {
  }, []);

  return`
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label sprk-b-Label--disabled">
            Radio Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio"
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-1"
            data-id="radio-1"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
            disabled
          >

          <label
            for="radio-1"
            class="sprk-b-Label sprk-b-Label--disabled sprk-b-Label--inline sprk-b-Radio__label"
          >
            Radio Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio"
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-2"
            data-id="radio-2"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
            disabled
          >

          <label
            for="radio-2"
            class="sprk-b-Label sprk-b-Label--disabled sprk-b-Label--inline sprk-b-Radio__label"
          >
            Radio Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio"
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-3"
            data-id="radio-3"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
            disabled
          >
          <label
            for="radio-3"
            class="sprk-b-Label sprk-b-Label--disabled sprk-b-Label--inline sprk-b-Radio__label"
          >
            Radio Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      ></div>
    </div>
  `
};

disabledRadioButton.story = {
  name: 'Disabled',
  parameters: {
    jest: ['radioInput'],
  }
};
