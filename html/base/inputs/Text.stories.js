import { useEffect } from '@storybook/client-api';
import { requiredTextInput } from '../requiredTextInput';

export default {
  title: 'Components/Input/Text',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const textInput = () => {
  useEffect(() => {
    requiredTextInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <label
        for="text-input"
        class="sprk-b-Label"
      >
        Text Input Label
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="text-input"
        data-id="text-input"
        type="text"
        value=""
        aria-describedby="text-input--error-container"
      >

      <div
        class="sprk-b-ErrorContainer"
        id="text-input--error-container"
      ></div>
    </div>
  `;
};

textInput.story = {
  name: 'Default',
};
