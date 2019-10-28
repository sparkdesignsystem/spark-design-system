import { useEffect } from '@storybook/client-api';
import { requiredTextInput } from './requiredTextInput';
import { requiredTick } from './requiredTick';
import { hugeInput } from './hugeInput';
import { dateInput } from './dateInput';
import { phoneInput } from './phoneInput';
import passwordInput from './passwordInput';
import { monetaryInput } from './monetaryInput';
import { ssnInput } from './ssnInput';
import { datePicker } from './datePicker';
import { requiredSelect } from './requiredSelect';
import '../utilities/polyfills/classListSVG';

export default {
  title: 'Base|Inputs',
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
  name: 'Text Input',
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
  name: 'Huge Text Input',
};

export const checkboxInputs = () => {
  useEffect(() => {
    requiredTextInput();
    requiredTick();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>

        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Checkbox Item 1
          </label>
        </div>

        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Checkbox Item 2
          </label>
        </div>

        <div class="sprk-b-SelectionContainer">
          <input
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline"
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
      </div>
    </div>
  `;
};

checkboxInputs.story = {
  name: 'Checkboxes',
};

export const radioInputs = () => {
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

radioInputs.story = {
  name: 'Radio Inputs',
};

export const selectBox = () => {
  useEffect(() => {
    requiredSelect();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <label
        for="select"
        class="sprk-b-Label"
      >
        Select Box Label
      </label>

      <select
        class="sprk-b-Select"
        id="select"
        data-id="select"
        aria-describedby="select--error-container"
      >
        <option value="not-selected">Make a selection...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>

      <svg
        class="
          sprk-c-Icon
          sprk-c-Icon--stroke-current-color
          sprk-b-SelectContainer__icon
        "
        viewBox="0 0 64 64"
      >
        <use xlink:href="#chevron-down" />
      </svg>

      <div
        class="sprk-b-ErrorContainer"
        id="select--error-container"
      ></div>
    </div>
  `;
};

selectBox.story = {
  name: 'Select Box',
};

export const hugeSelectBox = () => {
  useEffect(() => {
    requiredSelect();
    hugeInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <select
        class="sprk-b-Select"
        id="select-huge"
        data-id="select-huge"
        aria-describedby="select-huge--error-container"
        data-sprk-input="huge"
      >
        <option
          value=""
          disabled
          selected
          hidden
        ></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>

      <label
        for="select-huge"
        class="sprk-b-Label"
      >
        Huge Select Label
      </label>

      <svg
        class="
          sprk-c-Icon
          sprk-c-Icon--stroke-current-color
          sprk-b-SelectContainer__icon
        "
        viewBox="0 0 64 64"
      >
        <use xlink:href="#chevron-down" />
      </svg>

      <div
        class="sprk-b-ErrorContainer"
        id="select-huge--error-container"
      ></div>
    </div>
  `;
};

hugeSelectBox.story = {
  name: 'Huge Select Box',
};

export const textarea = () => (
  `
    <div class="sprk-b-InputContainer">
      <label
        for="textarea"
        class="sprk-b-Label"
      >
        Description
      </label>

      <textarea
        class="sprk-b-TextArea sprk-u-Width-100"
        id="textarea"
        data-id="textarea"
        aria-describedby="textarea--error-container"
      ></textarea>

      <div
        class="sprk-b-ErrorContainer"
        id="textarea--error-container"
      ></div>
    </div>
  `
);

textarea.story = {
  name: 'Textarea',
};

export const ssnInputStory = () => {
  useEffect(() => {
    requiredTextInput();
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
  name: 'SSN Input',
};

export const searchInput = () => {
  useEffect(() => {
    requiredTextInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <label
        for="search-input"
        class="sprk-b-Label"
      >
        Search
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="search-input"
        data-id="search-input"
        type="search"
        role="search"
        aria-describedby="search--error-container"
      >

      <div
        class="sprk-b-ErrorContainer"
        id="search--error-container"
      ></div>
    </div>
  `;
};

searchInput.story = {
  name: 'Search Input',
};

export const inlineSearchInput = () => {
  useEffect(() => {
    requiredTextInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <label
        for="search-inline"
        class="sprk-b-Label sprk-b-Label--with-icon sprk-u-ScreenReaderText"
      >
        Inline Search
      </label>

      <div class="sprk-b-TextInputIconContainer">
        <svg
          class="sprk-c-Icon sprk-c-Icon--m sprk-c-Icon--stroke-current-color"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#search" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-TextInput--has-svg-icon
            sprk-u-Width-100
          "
          id="search-inline"
          data-id="search-inline"
          type="text"
          placeholder="Search"
          aria-describedby="search-inline--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="search-inline--error-container"
      ></div>
    </div>
  `;
};

inlineSearchInput.story = {
  name: 'Inline Search Input',
};

export const monetaryInputStory = () => {
  useEffect(() => {
    requiredTextInput();
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
  name: 'Monetary Input',
};

export const percentageInput = () => {
  useEffect(() => {
    requiredTextInput();
  }, []);

  return `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="percentage"
    >
      <div
        class="
          sprk-b-InputContainer__icon-container
          sprk-b-InputContainer__icon-container--narrow
        "
      >
        <label
          for="percentage"
          class="sprk-b-Label"
        >
          Interest Rate
        </label>

        <svg
          class="
            sprk-c-Icon
            sprk-b-InputContainer__icon
            sprk-b-InputContainer__icon--right
          "
          viewBox="0 0 64 64"
        >
          <use xlink:href="#percent" />
        </svg>

        <input
          class="
            sprk-b-TextInput
            sprk-b-InputContainer__input
            sprk-b-InputContainer__input--has-icon-right
            sprk-u-Width-100
          "
          id="percentage"
          data-id="percentage"
          type="tel"
          aria-describedby="percentage--error-container"
        >
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="percentage--error-container"
      ></div>
    </div>
  `;
};

percentageInput.story = {
  name: 'Percentage Input',
};

export const passwordInputStory = () => {
  useEffect(() => {
    requiredTextInput();
    passwordInput();
  }, []);

  return `
    <div
      class="sprk-b-InputContainer"
      data-sprk-input="password"
    >
      <label
        for="password"
        class="sprk-b-Label"
      >
        Password
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="password"
        data-id="password-input"
        type="password"
        aria-describedby="password--error-container"
      >

      <div
        class="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle
        "
      >
        <input
          id="password-show-password"
          type="checkbox"
          data-id="password-show-password"
        >

        <label
          for="password-show-password"
          class="sprk-b-Label sprk-b-Label--inline"
        >
          Show Password
        </label>
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="password--error-container"
      ></div>
    </div>
  `;
};

passwordInputStory.story = {
  name: 'Password Input',
};

export const helperText = () => (
  `
    <div class="sprk-b-InputContainer">
      <label
        for="text-input-helper"
        class="sprk-b-Label"
      >
        Text Input Label
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="text-input-helper"
        data-id="text-input-helper"
        type="text"
        value=""
        aria-describedby="text-input-helper--error-container"
        aria-invalid="true"
      >

      <div
        class="sprk-b-ErrorContainer"
        id="text-input-helper--error-container"
      ></div>

      <div class="sprk-b-HelperText">
        Optional helper text, used to clarify the field&#x27;s intent.
      </div>
    </div>
  `
);

helperText.story = {
  name: 'Helper Text',
};

export const phoneInputStory = () => {
  useEffect(() => {
    requiredTextInput();
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
  name: 'Phone Input',
};

export const dateInputStory = () => {
  useEffect(() => {
    requiredTextInput();
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
  name: 'Date Input',
};

export const datePickerStory = () => {
  useEffect(() => {
    requiredTextInput();
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
  name: 'Date Picker',
};
