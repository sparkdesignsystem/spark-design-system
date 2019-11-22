import { useEffect } from '@storybook/client-api';
import { monetaryInput } from '../monetaryInput';

export default {
  title: 'Components/Input/Monetary',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const monetaryInputStory = () => {
  useEffect(() => {
    monetaryInput();
  }, []);

  return `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="monetary"
    >
      <div
        class="
          sprk-b-TextInputIconContainer
          sprk-b-TextInputIconContainer--has-text-icon
        "
      >
        <label
          for="monetary"
          class="sprk-b-Label sprk-b-Label--monetary"
        >
          Payment
        </label>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--has-text-icon
            sprk-u-Width-100
          "
          pattern="(^\\$?(\\d+|\\d{1,3}(,\\d{3})*)(\\.\\d+)?$)|^$"
          id="monetary"
          data-id="monetary-input"
          type="tel"
          aria-describedby="monetary--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="monetary--error-container"
      ></div>
    </div>
  `;
};

monetaryInputStory.story = {
  name: 'Default',
};
