import { useEffect } from '@storybook/client-api';
import { ssnInput } from '../ssnInput';

export default {
  title: 'Components/Input/SSN',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const ssnInputStory = () => {
  useEffect(() => {
    ssnInput();
  }, []);

  return `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="ssn"
    >
      <label
        for="ssn"
        class="sprk-b-Label"
      >
        Social Security #
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="ssn"
        data-id="ssn"
        type="password"
        pattern="(^(?!666|000|9\\d{2})\\d{3}([-]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$"
        placeholder="000-00-0000"
        aria-describedby="ssn--error-container"
      >

      <div
        class="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          id="ssn-show-ssn"
          type="checkbox"
          data-id="ssn-show-ssn"
        >

        <label
          for="ssn-show-ssn"
          class="sprk-b-Label sprk-b-Label--inline"
        >
          Show SSN
        </label>
    </div>

      <div
        class="sprk-b-ErrorContainer"
        id="ssn--error-container"
      ></div>
    </div>
  `;
};

ssnInputStory.story = {
  name: 'Default',
};
