import { useEffect } from '@storybook/client-api';
import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { radioInput } from './radioInput';

export default {
  title: 'Components/Input/Radio',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
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
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
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
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['radioInput'],
  },
};

export const defaultHelperText = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
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
      <p class="sprk-b-HelperText">
        Optional helper text, used to clarify the field&#x27;s intent.
      </p>
      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      >
      </div>
    </div>
  `;
};

defaultHelperText.story = {
  name: 'Default Helper Text',
  parameters: {
    jest: ['radio'],
  },
};

export const invalidRadioButton = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
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
};

invalidRadioButton.story = {
  name: 'Invalid',
  parameters: {
    jest: ['radioInput'],
  },
};

export const disabledRadioButton = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label sprk-b-Label--disabled">
          Radio Group Label
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
            class="
              sprk-b-Label
              sprk-b-Label--disabled
              sprk-b-Label--inline
              sprk-b-Radio__label"
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
            class="
              sprk-b-Label
              sprk-b-Label--disabled
              sprk-b-Label--inline
              sprk-b-Radio__label"
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
            class="
              sprk-b-Label
              sprk-b-Label--disabled
              sprk-b-Label--inline
              sprk-b-Radio__label"
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
  `;
};

disabledRadioButton.story = {
  name: 'Disabled',
  parameters: {
    jest: ['radioInput'],
  },
};

export const huge = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Radio sprk-b-Radio--huge"
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
          class="sprk-b-SelectionContainer sprk-b-Radio sprk-b-Radio--huge"
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
          class="sprk-b-SelectionContainer sprk-b-Radio sprk-b-Radio--huge"
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
  `;
};

huge.story = {
  name: 'Huge',
  parameters: {
    jest: ['radioInput'],
    docs: { iframeHeight: 300 },
  },
};

export const hugeHelperText = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
        </legend>
        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Radio
            sprk-b-Radio--huge
          "
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
          class="
            sprk-b-SelectionContainer
            sprk-b-Radio
            sprk-b-Radio--huge
          "
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
          class="
            sprk-b-SelectionContainer
            sprk-b-Radio
            sprk-b-Radio--huge
          "
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
      <p class="sprk-b-HelperText">
        Optional helper text, used to clarify the field&#x27;s intent.
      </p>
      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      >
      </div>
    </div>
  `;
};

hugeHelperText.story = {
  name: 'Huge Helper Text',
  parameters: {
    jest: ['radioInput'],
  },
};

export const hugeInvalid = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
        </legend>
        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Radio
            sprk-b-Radio--huge
          "
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
          class="
            sprk-b-SelectionContainer
            sprk-b-Radio
            sprk-b-Radio--huge
          "
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
          class="
            sprk-b-SelectionContainer
            sprk-b-Radio
            sprk-b-Radio--huge
          "
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
};

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['radioInput'],
  },
};

export const hugeDisabled = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label sprk-b-Label--disabled">
          Radio Group Label
        </legend>
        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Radio
            sprk-b-Radio--huge
          "
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-1"
            data-id="radio-1"
            type="radio"
            aria-describedby="radio--error-container"
            disabled
          >
          <label
            for="radio-1"
            class="
              sprk-b-Label
              sprk-b-Label--inline
              sprk-b-Label--disabled sprk-b-Radio__label
            "
          >
            Radio Item 1
          </label>
        </div>
        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Radio
            sprk-b-Radio--huge
          "
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-2"
            data-id="radio-2"
            type="radio"
            aria-describedby="radio--error-container"
            disabled
          >
          <label
            for="radio-2"
            class="
              sprk-b-Label
              sprk-b-Label--inline
              sprk-b-Label--disabled sprk-b-Radio__label
            "
          >
            Radio Item 2
          </label>
        </div>
        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Radio
            sprk-b-Radio--huge
          "
          data-sprk-input="radio"
        >
          <input
            class="sprk-b-Radio__input"
            id="radio-3"
            data-id="radio-3"
            type="radio"
            aria-describedby="radio--error-container"
            disabled
          >
          <label
            for="radio-3"
            class="
              sprk-b-Label
              sprk-b-Label--inline
              sprk-b-Label--disabled sprk-b-Radio__label
            "
          >
            Radio Item 3
          </label>
        </div>
      </fieldset>
      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      >
      </div>
    </div>
  `;
};

hugeDisabled.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['radioInput'],
  },
};

export const hugeLayoutTwo = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
        </legend>

        <div class="sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
          <div
            class="
              sprk-b-SelectionContainer
              sprk-b-Radio
              sprk-b-Radio--huge
              sprk-o-Stack__item
              sprk-o-Stack__item--flex@s
            "
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
            class="
              sprk-b-SelectionContainer
              sprk-b-Radio
              sprk-b-Radio--huge
              sprk-o-Stack__item
              sprk-o-Stack__item--flex@s
            "
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
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      ></div>
    </div>
  `;
};

hugeLayoutTwo.story = {
  name: 'Huge Layout - Two',
  parameters: {
    jest: ['radioInput'],
    docs: { iframeHeight: 250 },
  },
};

export const hugeLayoutFour = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
        </legend>

        <div class="sprk-o-Stack sprk-o-Stack--medium">
          <div class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@s">
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
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
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
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
          </div>

          <div class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@s">
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
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
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
              data-sprk-input="radio"
            >
              <input
                class="sprk-b-Radio__input"
                id="radio-4"
                data-id="radio-4"
                type="radio"
                name="radio"
                aria-describedby="radio--error-container"
              >

              <label
                for="radio-4"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
              >
                Radio Item 4
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      ></div>
    </div>
  `;
};

hugeLayoutFour.story = {
  name: 'Huge Layout - Four',
  parameters: {
    jest: ['radioInput'],
    docs: { iframeHeight: 420 },
  },
};

export const hugeLayoutFive = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
        </legend>
        <div class="sprk-o-Stack sprk-o-Stack--medium">
          <div class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@s">
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
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
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
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
          </div>

          <div class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@s">
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
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
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
              data-sprk-input="radio"
            >
              <input
                class="sprk-b-Radio__input"
                id="radio-4"
                data-id="radio-4"
                type="radio"
                name="radio"
                aria-describedby="radio--error-container"
              >

              <label
                for="radio-4"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
              >
                Radio Item 4
              </label>
            </div>
          </div>

          <div class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@s
            sprk-o-Stack--center-row
            "
          >
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--half@s
              "
              data-sprk-input="radio"
            >
              <input
                class="sprk-b-Radio__input"
                id="radio-5"
                data-id="radio-5"
                type="radio"
                name="radio"
                aria-describedby="radio--error-container"
              >

              <label
                for="radio-5"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
              >
                Radio Item 5
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      ></div>
    </div>
  `;
};

hugeLayoutFive.story = {
  name: 'Huge Layout - Five',
  parameters: {
    jest: ['radioInput'],
  },
};

export const hugeLayoutSix = () => {
  useEffect(() => {
    radioInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend sprk-b-Label">
          Radio Group Label
        </legend>

        <div class="sprk-o-Stack sprk-o-Stack--medium">
          <div class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@s">
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
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
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
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
          </div>

          <div class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@s">
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
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
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
              data-sprk-input="radio"
            >
              <input
                class="sprk-b-Radio__input"
                id="radio-4"
                data-id="radio-4"
                type="radio"
                name="radio"
                aria-describedby="radio--error-container"
              >

              <label
                for="radio-4"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
              >
                Radio Item 4
              </label>
            </div>
          </div>

          <div class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@s">
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
              data-sprk-input="radio"
            >
              <input
                class="sprk-b-Radio__input"
                id="radio-5"
                data-id="radio-5"
                type="radio"
                name="radio"
                aria-describedby="radio--error-container"
              >

              <label
                for="radio-5"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
              >
                Radio Item 5
              </label>
            </div>
            <div
              class="
                sprk-b-SelectionContainer
                sprk-b-Radio
                sprk-b-Radio--huge
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
              "
              data-sprk-input="radio"
            >
              <input
                class="sprk-b-Radio__input"
                id="radio-6"
                data-id="radio-6"
                type="radio"
                name="radio"
                aria-describedby="radio--error-container"
              >

              <label
                for="radio-6"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label"
              >
                Radio Item 6
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      ></div>
    </div>
  `;
};

hugeLayoutSix.story = {
  name: 'Huge Layout - Six',
  parameters: {
    jest: ['radioInput'],
  },
};
