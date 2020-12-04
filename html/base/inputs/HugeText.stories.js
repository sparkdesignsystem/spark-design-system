import { useEffect } from '@storybook/client-api';
import { hugeInput } from './hugeInput';
import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Huge Text',
  decorators: [
    (story) => `<div class="sprk-o-Box">${story()}</div>`,
    (story) => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
- The Input Label must come before the input element.
- A placeholder is required for full functionality.
If you do not want to show a placeholder, include
placeholder=" " (space included) to maintain functionality.
    `,
    docs: { iframeHeight: 140 },
  },
};

export const hugeTextInput = () => {
  useEffect(() => {
    hugeInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        data-sprk-input="huge"
        id="text-input-huge"
        data-id="text-input-huge"
        type="text"
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
      ></div>
    </div>
  `;
};

hugeTextInput.story = {
  name: 'Default',
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
          sprk-b-TextInput--error
          sprk-u-Width-100"
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
  name: 'Invalid',
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
        class="sprk-b-TextInput sprk-u-Width-100"
        data-sprk-input="huge"
        id="text-input-huge"
        data-id="text-input-huge"
        type="text"
        aria-describedby="text-input-huge--error-container"
        placeholder="Placeholder"
        disabled
      >

      <label
        for="text-input-huge"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Text Input Label
      </label>

      <div
        class="sprk-b-ErrorContainer"
        id="text-input-huge--error-container"
      ></div>
    </div>
  `;
};

disabledHugeTextInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['hugeInput'],
  },
};
