import { useEffect } from '@storybook/client-api';
import { autocomplete } from './autocomplete';
import { hugeInput } from '../base/inputs/hugeInput';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Autocomplete',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('autocomplete')}
- Live demos of the Autocomplete are available on our [demo site](https://spark-testhtml.netlify.app/autocomplete.html).

#### Keyboard Interactions
- The list can be closed by clicking on the document body or by pressing
the \`Escape\` key.
- When the list is open, items in the list can be highlighted using the
\`Up\` and \`Down\` arrow keys. Note that this highlight is distinct from the
browser focus, which stays in the input.

#### Accessibility
- The component should include an element with \`aria-live="polite"\`. The
  contents of this element should be updated to reflect the number of visible
  items in the list.
- The input container should have \`role="combobox"\` and
  \`aria-haspopup="listbox"\`. These attributes correctly identify the control
  to Assistive Technology.
- The input should have \`aria-autocomplete="list"\`.
  This attribute correctly identifies the control to Assistive Technology.
- The input should have \`autocomplete="off"\`, \`autocapitalize="off"\`,
  and \`spellcheck="false"\`. These attributes deactivate default browser
  behavior that can interfere with autocomplete behavior.
- The list should have \`role="listbox"\`.
- When the list is hidden, the input container should have
  \`aria-expanded="false"\`.
- When the list is visible, the input container should have
  \`aria-expanded="true"\`.
- When the list is visible and an item is highlighted (with the arrow keys),
  the text input should have \`aria-activedescendant\` set to the \`id\`
  of the active item.
- When a list item is highlighted (with the arrow keys), it should have
  \`aria-selected="true"\`.
- Each selectable list item should have \`role="option"\`.


#### Requires Additional Engineering:
In order to keep the Spark Autocomplete flexible enough to use in a wide
  variety of use cases, some of the interactivity of the component is left
  up to implementing teams.

  - Filtering the list
    - Display a message if a filter returns 0 results.
    - Highlight the matching text in the search results.
    - Update the contents of the associated \`aria-live\` element.
  - Showing the list
    - Set \`aria-expanded\` to \`true\` on the input container.
    - Remove \`sprk-u-Display--none\` from the results list.
  - Hiding the list
    - Remove \`aria-selected\` from the active list item.
    - Remove \`aria-activedescendant\` from the input.
    - Set \`aria-expanded\` to false on the input container.
    - Add \`sprk-u-Display--none\` to the results list.
  - Selecting an item in the list by clicking it or pressing the Enter key.
    - The highlighted item is identified by the value of
    \`aria-activedescendant\` on the input.

The following data attributes are used to structure the component.
- \`data-sprk-autocomplete="container"\` on the outermost div.
- \`data-sprk-autocomplete="input"\` on the input.
- \`data-sprk-autocomplete="results"\` on the results \`ul\`.
- \`data-sprk-autocomplete="result"\` on each of the result \`li\`.
- \`data-sprk-autocomplete-no-select\` can be applied to any result item
that you wish to omit from the arrow key highlighting behavior. For example
a "No results found" message or an item that is hidden by a filter.

    `,
    docs: { iframeHeight: 400 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    autocomplete();
  }, []);

  return `
    <div class="sprk-b-InputContainer" data-sprk-autocomplete="container">
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
      <label
        id="autocomplete-label"
        for="autocomplete-input"
        class="sprk-b-Label"
      >
        Search for a Fruit
      </label>

      <div
        class="sprk-b-TextInputIconContainer"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="autocomplete-label"
      >
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <use xlink:href="#search" />
        </svg>

        <input
          data-sprk-autocomplete="input"
          class="
                sprk-b-TextInput
                sprk-b-TextInput--has-svg-icon
                sprk-u-Width-100
              "
          id="autocomplete-input"
          type="text"
          aria-autocomplete="list"
          aria-describedby="input--error-container"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        >
      </div>

      <ul
        class="sprk-c-Autocomplete__results"
        role="listbox"
        aria-labelledby="autocomplete-label"
        data-sprk-autocomplete="results"
      >
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Apple</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Apricot</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Avocado</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Banana</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Blackberry</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Blueberry</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Clementine</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Fig</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Grape</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Kumquat</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Lemon</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Papaya</li>
      </ul>

      <div
        class="sprk-b-ErrorContainer"
        id="input--error-container"
      ></div>
    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['autocomplete'],
  },
};

export const defaultInvalid = () => {
  useEffect(() => {
    autocomplete();
  }, []);

  return `
    <div class="sprk-b-InputContainer" data-sprk-autocomplete="container">
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
      <label
        id="autocomplete-label-invalid"
        for="autocomplete-input-invalid"
        class="sprk-b-Label"
      >
        Search for a Fruit
      </label>

      <div
        class="sprk-b-TextInputIconContainer"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-labelledby="autocomplete-label-invalid"
      >
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <use xlink:href="#search" />
        </svg>

        <input
          data-sprk-autocomplete="input"
          class="
            sprk-b-TextInput
            sprk-b-TextInput--error
            sprk-b-TextInput--has-svg-icon
            sprk-u-Width-100
          "
          id="autocomplete-input-invalid"
          type="text"
          aria-invalid="true"
          aria-autocomplete="list"
          aria-describedby="invalid-input--error-container"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        >
      </div>

      <ul
        data-sprk-autocomplete="results"
        class="sprk-c-Autocomplete__results sprk-u-Display--none"
        role="listbox"
        aria-labelledby="autocomplete-label"
      >
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Apple</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Apricot</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Avocado</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Banana</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Blackberry</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Blueberry</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Clementine</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Fig</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Grape</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Kumquat</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Lemon</li>
        <li data-sprk-autocomplete="result" class="sprk-c-Autocomplete__result" role="option">Papaya</li>
      </ul>

      <div
        class="sprk-b-ErrorContainer"
        id="invalid-input--error-container"
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

defaultInvalid.story = {
  name: 'Invalid',
};

export const defaultDisabled = () => {
  useEffect(() => {
    autocomplete();
  }, []);

  return `
    <div class="sprk-b-InputContainer" data-sprk-autocomplete="container">
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
      <label
        id="autocomplete-label"
        for="autocomplete-input-disabled"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Search for a Fruit
      </label>

      <div
        class="sprk-b-TextInputIconContainer"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-labelledby="autocomplete-label"
      >
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <use xlink:href="#search" />
        </svg>

        <input
          class="
                sprk-b-TextInput
                sprk-b-TextInput--has-svg-icon
                sprk-u-Width-100
              "
          id="autocomplete-input-disabled"
          type="text"
          aria-autocomplete="list"
          aria-describedby="disabled-input--error-container"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          disabled
        >
      </div>

      <ul
        class="sprk-c-Autocomplete__results sprk-u-Display--none"
        role="listbox"
        aria-labelledby="autocomplete-label"
      >
        <li class="sprk-c-Autocomplete__result" role="option">Apple</li>
        <li class="sprk-c-Autocomplete__result" role="option">Apricot</li>
        <li class="sprk-c-Autocomplete__result" role="option">Avocado</li>
        <li class="sprk-c-Autocomplete__result" role="option">Banana</li>
        <li class="sprk-c-Autocomplete__result" role="option">Blackberry</li>
        <li class="sprk-c-Autocomplete__result" role="option">Blueberry</li>
        <li class="sprk-c-Autocomplete__result" role="option">Clementine</li>
        <li class="sprk-c-Autocomplete__result" role="option">Fig</li>
        <li class="sprk-c-Autocomplete__result" role="option">Grape</li>
        <li class="sprk-c-Autocomplete__result" role="option">Kumquat</li>
        <li class="sprk-c-Autocomplete__result" role="option">Lemon</li>
        <li class="sprk-c-Autocomplete__result" role="option">Papaya</li>
      </ul>

      <div
        class="sprk-b-ErrorContainer"
        id="disabled-input--error-container"
      ></div>
    </div>
  `;
};

defaultDisabled.story = {
  name: 'Disabled',
};

export const hugeStory = () => {
  useEffect(() => {
    autocomplete();
    hugeInput();
  }, []);

  return `
  <div
    class="sprk-b-InputContainer sprk-b-InputContainer--huge"
    data-sprk-autocomplete="container"
  >
    <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
    <div
      class="sprk-b-TextInputIconContainer"
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded="true"
      aria-labelledby="input-label-huge"
    >
      <svg
        class="
          sprk-c-Icon
          sprk-c-Icon--filled-current-color
          sprk-c-Icon--stroke-current-color
        "
        viewBox="0 0 64 64" aria-hidden="true"
      >
        <use xlink:href="#search" />
      </svg>
      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="text-input-huge"
        type="text"
        placeholder="Search for a Fruit"
        aria-autocomplete="list"
        aria-describedby="text-input-huge--error-container"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        data-sprk-input="huge"
      >
      <label
        for="text-input-huge"
        id="input-label-huge"
        class="sprk-b-Label"
      >
        Search for a Fruit
      </label>
    </div>

    <ul
      class="sprk-c-Autocomplete__results"
      role="listbox"
      aria-labelledby="input-label-huge"
    >
      <li class="sprk-c-Autocomplete__result" role="option">Apple</li>
      <li class="sprk-c-Autocomplete__result" role="option">Apricot</li>
      <li class="sprk-c-Autocomplete__result" role="option">Avocado</li>
      <li class="sprk-c-Autocomplete__result" role="option">Banana</li>
      <li class="sprk-c-Autocomplete__result" role="option">Blackberry</li>
      <li class="sprk-c-Autocomplete__result" role="option">Blueberry</li>
      <li class="sprk-c-Autocomplete__result" role="option">Clementine</li>
      <li class="sprk-c-Autocomplete__result" role="option">Fig</li>
      <li class="sprk-c-Autocomplete__result" role="option">Grape</li>
      <li class="sprk-c-Autocomplete__result" role="option">Kumquat</li>
      <li class="sprk-c-Autocomplete__result" role="option">Lemon</li>
      <li class="sprk-c-Autocomplete__result" role="option">Papaya</li>
    </ul>

    <div
      class="sprk-b-ErrorContainer"
      id="text-input-huge--error-container"
    ></div>
  </div>
  `;
};

hugeStory.story = {
  name: 'Huge',
  parameters: {
    jest: ['autocomplete', 'hugeInput'],
  },
};

export const hugeInvalid = () => {
  useEffect(() => {
    autocomplete();
    hugeInput();
  }, []);

  return `
  <div
    class="sprk-b-InputContainer sprk-b-InputContainer--huge"
    data-sprk-autocomplete="container"
  >
    <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
    <div
      class="sprk-b-TextInputIconContainer"
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded="false"
      aria-labelledby="autocomplete-huge-label-invalid"
    >
      <svg
        class="
          sprk-c-Icon
          sprk-c-Icon--filled-current-color
          sprk-c-Icon--stroke-current-color
        "
        viewBox="0 0 64 64" aria-hidden="true"
      >
        <use xlink:href="#search" />
      </svg>
      <input
        class="sprk-b-TextInput sprk-b-TextInput--error sprk-u-Width-100"
        id="autocomplete-huge-invalid"
        type="text"
        placeholder="Search for a Fruit"
        aria-autocomplete="list"
        aria-invalid="true"
        aria-describedby="autocomplete-huge-invalid--error-container"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        data-sprk-input="huge"
      >
      <label
        for="autocomplete-huge-invalid"
        id="autocomplete-huge-label-invalid"
        class="sprk-b-Label"
      >
        Search for a Fruit
      </label>
    </div>

    <ul
      class="sprk-c-Autocomplete__results sprk-u-Display--none"
      role="listbox"
      aria-labelledby="autocomplete-huge-label-invalid"
    >
      <li class="sprk-c-Autocomplete__result" role="option">Apple</li>
      <li class="sprk-c-Autocomplete__result" role="option">Apricot</li>
      <li class="sprk-c-Autocomplete__result" role="option">Avocado</li>
      <li class="sprk-c-Autocomplete__result" role="option">Banana</li>
      <li class="sprk-c-Autocomplete__result" role="option">Blackberry</li>
      <li class="sprk-c-Autocomplete__result" role="option">Blueberry</li>
      <li class="sprk-c-Autocomplete__result" role="option">Clementine</li>
      <li class="sprk-c-Autocomplete__result" role="option">Fig</li>
      <li class="sprk-c-Autocomplete__result" role="option">Grape</li>
      <li class="sprk-c-Autocomplete__result" role="option">Kumquat</li>
      <li class="sprk-c-Autocomplete__result" role="option">Lemon</li>
      <li class="sprk-c-Autocomplete__result" role="option">Papaya</li>
    </ul>

    <div
      class="sprk-b-ErrorContainer"
      id="autocomplete-huge-invalid--error-container"
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

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['autocomplete', 'hugeInput'],
  },
};

export const hugeDisabled = () => {
  useEffect(() => {
    autocomplete();
    hugeInput();
  }, []);

  return `
  <div
    class="sprk-b-InputContainer sprk-b-InputContainer--huge"
    data-sprk-autocomplete="container"
  >
    <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
    <div
      class="sprk-b-TextInputIconContainer"
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded="false"
      aria-labelledby="autocomplete-input-label-huge-disabled"
    >
      <svg
        class="
          sprk-c-Icon
          sprk-c-Icon--filled-current-color
          sprk-c-Icon--stroke-current-color
        "
        viewBox="0 0 64 64" aria-hidden="true"
      >
        <use xlink:href="#search" />
      </svg>
      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="autocomplete-input-huge-disabled"
        type="text"
        placeholder="Search for a Fruit"
        aria-autocomplete="list"
        aria-describedby="autocomplete-input-huge-disabled--error-container"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        data-sprk-input="huge"
        disabled
      >
      <label
        for="autocomplete-input-huge-disabled"
        id="autocomplete-label-huge-disabled"
        class="sprk-b-Label sprk-b-Label--disabled"
      >
        Search for a Fruit
      </label>
    </div>

    <ul
      class="sprk-c-Autocomplete__results sprk-u-Display--none"
      role="listbox"
      aria-labelledby="input-label-huge"
    >
      <li class="sprk-c-Autocomplete__result" role="option">Apple</li>
      <li class="sprk-c-Autocomplete__result" role="option">Apricot</li>
      <li class="sprk-c-Autocomplete__result" role="option">Avocado</li>
      <li class="sprk-c-Autocomplete__result" role="option">Banana</li>
      <li class="sprk-c-Autocomplete__result" role="option">Blackberry</li>
      <li class="sprk-c-Autocomplete__result" role="option">Blueberry</li>
      <li class="sprk-c-Autocomplete__result" role="option">Clementine</li>
      <li class="sprk-c-Autocomplete__result" role="option">Fig</li>
      <li class="sprk-c-Autocomplete__result" role="option">Grape</li>
      <li class="sprk-c-Autocomplete__result" role="option">Kumquat</li>
      <li class="sprk-c-Autocomplete__result" role="option">Lemon</li>
      <li class="sprk-c-Autocomplete__result" role="option">Papaya</li>
    </ul>

    <div
      class="sprk-b-ErrorContainer"
      id="text-input-huge--error-container"
    ></div>
  </div>
  `;
};

hugeDisabled.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['autocomplete', 'hugeInput'],
  },
};
