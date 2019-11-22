import { useEffect } from '@storybook/client-api';
import { dateInput } from '../dateInput';

export default {
  title: 'Components/Input/Date',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const dateInputStory = () => {
  useEffect(() => {
    dateInput();
  }, []);

  return `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="date"
    >
      <label
        for="date-input"
        class="sprk-b-Label"
      >
        Date
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="date-input"
        data-id="date-input"
        type="text"
        pattern="^(((0[13578]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02([\\/-]?)((0[1-9])|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$"
        placeholder="MM/DD/YYYY"
        aria-describedby="date-input--error-container"
      >

      <div
        class="sprk-b-ErrorContainer"
        id="date-input--error-container"
      ></div>
    </div>
  `;
};

dateInputStory.story = {
  name: 'Default',
};
