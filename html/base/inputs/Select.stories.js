import { useEffect } from '@storybook/client-api';
import { hugeInput } from './hugeInput';
import '../../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Select',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 140 },
  },
};

export const selectBox = () => `
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
          sprk-c-Icon--filled-current-color
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

selectBox.story = {
  name: 'Default',
};

export const invalidSelectBox = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="select"
        class="sprk-b-Label"
      >
        Select Box Label
      </label>

      <select
        class="sprk-b-Select sprk-b-Select--error"
        id="select"
        data-id="select"
        aria-invalid="true"
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
          sprk-c-Icon--filled-current-color
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
      >
        <svg
          class="sprk-c-Icon sprk-b-ErrorIcon"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#exclamation-filled" />
        </svg>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </div>
    </div>
  `;

invalidSelectBox.story = {
  name: 'Invalid',
};

export const disabledSelectBox = () => `
    <div class="sprk-b-InputContainer">
      <label
        for="select"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Select Box Label
      </label>

      <select
        class="sprk-b-Select"
        id="select"
        data-id="select"
        aria-describedby="select--error-container"
        disabled
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
          sprk-c-Icon--filled-current-color
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

disabledSelectBox.story = {
  name: 'Disabled',
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
          sprk-c-Icon--filled-current-color
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
  name: 'Huge',
  parameters: {
    jest: ['hugeInput'],
  },
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
        aria-invalid="true"
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
          sprk-c-Icon--filled-current-color
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
          class="sprk-c-Icon sprk-b-ErrorIcon"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#exclamation-filled" />
        </svg>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </div>
    </div>
  `;
};

invalidHugeSelectBox.story = {
  name: 'Invalid Huge',
  parameters: {
    jest: ['hugeInput'],
  },
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
          sprk-c-Icon--filled-current-color
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
  name: 'Disabled Huge',
  parameters: {
    jest: ['hugeInput'],
  },
};
