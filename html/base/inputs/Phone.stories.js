import { useEffect } from '@storybook/client-api';
import { phoneInput } from '../phoneInput';

export default {
  title: 'Components/Input/Phone',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const phoneInputStory = () => {
  useEffect(() => {
    phoneInput();
  }, []);

  return `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="phone"
    >
      <label
        for="phone-input"
        class="sprk-b-Label"
      >
        Phone Number
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="phone-input"
        data-id="phone-input"
        type="tel"
        pattern="(^(\\+\\d{1,2}\\s)?((\\(\\d{3}\\))|\\d{3})[\\s.-]?\\d{3}[\\s.-]?\\d{4}$)|^$"
        placeholder="(000) 000-0000"
        aria-describedby="phone-input--error-container"
      >
      <div
        class="sprk-b-ErrorContainer"
        id="phone-input--error-container"
      ></div>
    </div>
  `;
};

phoneInputStory.story = {
  name: 'Default',
};
