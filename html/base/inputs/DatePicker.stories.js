import { useEffect } from '@storybook/client-api';
import { datePicker } from '../datePicker';
import '../../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date Picker',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    docs: { iframeHeight: 320 },
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
  },
};

export const defaultStory = () => {
  useEffect(() => {
    datePicker();
  }, []);

  return `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="date"
      data-sprk-datepicker
    >
      <label
        for="datepicker"
        class="sprk-b-Label sprk-b-Label--with-icon"
      >
        Date
      </label>

      <div class="sprk-b-TextInputIconContainer">
        <svg
          class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#calendar" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--has-svg-icon
            sprk-u-Width-100
          "
          id="datepicker"
          data-id="datepicker-input"
          type="text"
          placeholder="MM/DD/YYYY"
          aria-describedby="datepicker--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="datepicker--error-container"
      ></div>
    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
};

export const invalidDatePicker = () => {
  useEffect(() => {
    datePicker();
  }, []);

  return `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="date"
      data-sprk-datepicker
    >
      <label
        for="datepicker"
        class="sprk-b-Label sprk-b-Label--with-icon"
      >
        Date
      </label>

      <div class="sprk-b-TextInputIconContainer">
        <svg
          class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#calendar" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--error
            sprk-b-TextInput--has-svg-icon
            sprk-u-Width-100
          "
          id="datepicker"
          data-id="datepicker-input"
          type="text"
          placeholder="MM/DD/YYYY"
          aria-invalid="true"
          aria-describedby="datepicker--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="datepicker--error-container"
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

invalidDatePicker.story = {
  name: 'Invalid',
};

export const disabledDatePicker = () => {
  useEffect(() => {
    datePicker();
  }, []);

  return `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="date"
      data-sprk-datepicker
    >
      <label
        for="datepicker"
        class="sprk-b-Label sprk-b-Label--disabled sprk-b-Label--with-icon"
      >
        Date
      </label>

      <div class="sprk-b-TextInputIconContainer">
        <svg
          class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#calendar" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--has-svg-icon
            sprk-u-Width-100
          "
          id="datepicker"
          data-id="datepicker-input"
          type="text"
          placeholder="MM/DD/YYYY"
          aria-describedby="datepicker--error-container"
          disabled
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="datepicker--error-container"
      ></div>
    </div>
  `;
};

disabledDatePicker.story = {
  name: 'Disabled',
};
