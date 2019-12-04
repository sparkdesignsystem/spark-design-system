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

export const SSNInputStory = () => `
    <div
      class="sprk-b-InputContainer"
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

SSNInputStory.story = {
  name: 'Default',
};

export const invalidSSNInputStory = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="ssn"
        class="sprk-b-Label"
      >
        Social Security #
      </label>

      <input
        class="sprk-b-TextInput sprk-b-TextInput--error sprk-u-Width-100"
        id="ssn"
        data-id="ssn"
        type="password"
        placeholder="000-00-0000"
        aria-invalid="true"
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

invalidSSNInputStory.story = {
  name: 'Invalid',
};

export const disabledSSNInputStory = () => `
    <div
      class="sprk-b-InputContainer"
    >
      <label
        for="ssn"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Social Security #
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="ssn"
        data-id="ssn"
        type="password"
        placeholder="000-00-0000"
        aria-describedby="ssn--error-container"
        disabled
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
          disabled
        >

        <label
          for="ssn-show-ssn"
          class="sprk-b-Label sprk-b-Label--disabled sprk-b-Label--inline"
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

disabledSSNInputStory.story = {
  name: 'Disabled',
};
