import { useEffect } from '@storybook/client-api';
import { datePicker } from '../datePicker';
import '../../utilities/polyfills/classListSVG';

export default {
  title: 'Components/Input/Date Picker',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const datePickerStory = () => {
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
          pattern="^(((0[13578]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02([\\/-]?)((0[1-9])|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$"
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

datePickerStory.story = {
  name: 'Default',
};
