import { useEffect } from '@storybook/client-api';
import { hugeInput } from '../hugeInput';
import '../../utilities/polyfills/classListSVG';

export default {
  title: 'Components/Input/Huge Select',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const hugeSelectBox = () => {
  useEffect(() => {
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
  name: 'Default',
};

export const invalidHugeSelectBox = () => {
  useEffect(() => {
    hugeInput();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <select
        class="sprk-b-Select sprk-b-Select--error"
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
};

invalidHugeSelectBox.story = {
  name: 'Invalid',
};

export const disabledHugeSelectBox = () => {
  useEffect(() => {
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
        disabled
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
        class="sprk-b-Label sprk-b-Label--disabled"
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

disabledHugeSelectBox.story = {
  name: 'Disabled',
};
