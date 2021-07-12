import { useEffect } from '@storybook/client-api';
import { hugeInput } from './hugeInput';
import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Text',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 140 },
  },
};

export const textInput = () => `
  <div class="sprk-b-InputContainer">
    <label
      for="text-input"
      class="sprk-b-Label"
    >
      Text Input Label
    </label>

    <input
      class="sprk-b-TextInput"
      id="text-input"
      data-id="text-input"
      type="text"
    >
  </div>
`;

textInput.story = {
  name: 'Default',
};

export const invalidTextInput = () => `
  <div class="sprk-b-InputContainer">
    <label
      for="text-input"
      class="sprk-b-Label"
    >
      Text Input Label
    </label>

    <input
      class="sprk-b-TextInput sprk-b-TextInput--error"
      id="text-input"
      data-id="text-input"
      type="text"
      aria-invalid="true"
      aria-describedby="text-input--error-container"
    >

    <div
      class="sprk-b-ErrorContainer"
      id="text-input--error-container"
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

invalidTextInput.story = {
  name: 'Invalid',
};

export const disabledTextInput = () => `
  <div class="sprk-b-InputContainer">
    <label
      for="text-input"
      class="sprk-b-Label sprk-b-Label--disabled"
    >
      Text Input Label
    </label>

    <input
      class="sprk-b-TextInput"
      id="text-input"
      data-id="text-input"
      type="text"
      disabled
    >
  </div>
`;

disabledTextInput.story = {
  name: 'Disabled',
};

export const hugeTextInput = () => {
  useEffect(() => {
    hugeInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <input
        class="sprk-b-TextInput"
        data-sprk-input="huge"
        id="text-input-huge"
        data-id="text-input-huge"
        type="text"
        placeholder="Placeholder"
      >

      <label
        for="text-input-huge"
        class="sprk-b-Label"
      >
        Text Input Label
      </label>
    </div>
  `;
};

hugeTextInput.story = {
  name: 'Huge',
  parameters: {
    jest: ['hugeInput'],
  },
};

export const invalidHugeTextInput = () => {
  useEffect(() => {
    hugeInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <input
        class="
          sprk-b-TextInput
          sprk-b-TextInput--error"
        data-sprk-input="huge"
        id="text-input-huge"
        data-id="text-input-huge"
        type="text"
        aria-invalid="true"
        aria-describedby="text-input-huge--error-container"
        placeholder="Placeholder"
      >

      <label
        for="text-input-huge"
        class="sprk-b-Label"
      >
        Text Input Label
      </label>

      <div
        class="sprk-b-ErrorContainer"
        id="text-input-huge--error-container"
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

invalidHugeTextInput.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['hugeInput'],
  },
};

export const disabledHugeTextInput = () => {
  useEffect(() => {
    hugeInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <input
        class="sprk-b-TextInput"
        data-sprk-input="huge"
        id="text-input-huge"
        data-id="text-input-huge"
        type="text"
        placeholder="Placeholder"
        disabled
      >

      <label
        for="text-input-huge"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Text Input Label
      </label>
    </div>
  `;
};

disabledHugeTextInput.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['hugeInput'],
  },
};
