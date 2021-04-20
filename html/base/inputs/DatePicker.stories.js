import { useEffect } from '@storybook/client-api';
import { datePicker } from './datePicker';
import '../../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date Picker',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    docs: { iframeHeight: 320 },
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special characters
(/) which you may need to remove before submitting the form.
- The \`sprk-b-InputContainer--huge\` class is available for
use on this input. For full functionality, see guidelines in the
[Huge Text Input](/docs/components-input-huge-text--huge-text-input) section.
- The Date Picker makes use of a 3rd party library called Tiny Date Picker.
See the [documentation](https://github.com/chrisdavies/tiny-date-picker) on
Github for customization options.
- Requires Additional Engineering:
  - Validation – When input is not valid, do the following
    - Add \`sprk-b-TextInput--error\` class to \`input\` element.
    - Set \`aria-invalid=”true”\` and
    \`area-describedby=”[id-of-error-container]”\` on \`input\` element.
    - Hide the error container (div with \`sprk-b-ErrorContainer\` class)
  - Reformatting to date pattern MM/DD/YYYY - After valid input,
  it should reformat to a two digit number month, followed by a
  forward slash, two digit number day, followed by another forward
  slash, and four digit number year.
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
          class="
            sprk-b-InputContainer__icon
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
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
  parameters: {
    jest: ['datePicker'],
  },
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
          class="
            sprk-b-InputContainer__icon
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
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

invalidDatePicker.story = {
  name: 'Invalid',
  parameters: {
    jest: ['datePicker'],
  },
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
          class="
            sprk-b-InputContainer__icon
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
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
  parameters: {
    jest: ['datePicker'],
  },
};
