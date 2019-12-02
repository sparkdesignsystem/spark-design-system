import { useEffect } from '@storybook/client-api';
import { requiredTick } from '../requiredTick';

export default {
  title: 'Components/Input/Radio',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const radioButton = () => {
  useEffect(() => {
    requiredTick();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Radio Group Label
          </label>
        </legend>

        <div class="sprk-b-SelectionContainer">
          <input
            id="radio-1"
            data-id="radio-1"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
          >

          <label
            for="radio-1"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Radio Item 1
          </label>
        </div>

        <div class="sprk-b-SelectionContainer">
          <input
            id="radio-2"
            data-id="radio-2"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
          >

          <label
            for="radio-2"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Radio Item 2
          </label>
        </div>

        <div class="sprk-b-SelectionContainer">
          <input
            id="radio-3"
            data-id="radio-3"
            type="radio"
            name="radio"
            aria-describedby="radio--error-container"
          >
          <label
            for="radio-3"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Radio Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="radio--error-container"
      ></div>
    </div>
  `;
};

radioButton.story = {
  name: 'Default',
};
