import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Textarea',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 250 },
  },
};

export const textarea = () =>
  `
    <div class="sprk-b-InputContainer">
      <label
        for="textarea"
        class="sprk-b-Label"
      >
        Description
      </label>

      <textarea
        class="sprk-b-TextArea sprk-u-Width-100"
        id="textarea"
        data-id="textarea"
        aria-describedby="textarea--error-container"
      ></textarea>

      <div
        class="sprk-b-ErrorContainer"
        id="textarea--error-container"
      ></div>
    </div>
  `;

textarea.story = {
  name: 'Default',
};

export const invalidTextarea = () =>
  `
    <div class="sprk-b-InputContainer">
      <label
        for="textarea"
        class="sprk-b-Label"
      >
        Description
      </label>

      <textarea
        class="sprk-b-TextArea sprk-b-TextArea--error sprk-u-Width-100"
        id="textarea"
        data-id="textarea"
        aria-describedby="textarea--error-container"
        aria-invalid="true"
      ></textarea>

      <div
        class="sprk-b-ErrorContainer"
        id="textarea--error-container"
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

invalidTextarea.story = {
  name: 'Invalid',
};

export const disabledTextarea = () =>
  `
    <div class="sprk-b-InputContainer">
      <label
        for="textarea"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Description
      </label>

      <textarea
        class="sprk-b-TextArea sprk-u-Width-100"
        id="textarea"
        data-id="textarea"
        aria-describedby="textarea--error-container"
        disabled
      ></textarea>

      <div
        class="sprk-b-ErrorContainer"
        id="textarea--error-container"
      ></div>
    </div>
  `;

disabledTextarea.story = {
  name: 'Disabled',
};
