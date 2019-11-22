import { useEffect } from '@storybook/client-api';
import { requiredTextInput } from '../requiredTextInput';
import { hugeInput } from '../hugeInput';

export default {
  title: 'Components/Input/Huge Text',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const hugeTextInput = () => {
  useEffect(() => {
    requiredTextInput();
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
};
