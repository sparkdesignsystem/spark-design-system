import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkAutocompleteModule } from './sprk-autocomplete.module';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results/sprk-autocomplete-results.directive';
import { SprkAutocompleteResultsModule } from './sprk-autocomplete-results/sprk-autocomplete-results.module';
import { SprkAutocompleteResultDirective } from './sprk-autocomplete-result/sprk-autocomplete-result.directive';
import { SprkAutocompleteResultModule } from './sprk-autocomplete-result/sprk-autocomplete-result.module';

export default {
  title: 'Components/Autocomplete',
  component: SprkAutocompleteComponent,
  subcomponents: {
    SprkAutocompleteResultsDirective,
    SprkAutocompleteResultDirective,
  },
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('autocomplete')}
- Live demos of the Autocomplete are available on our
[demo site](https://spark-testangular.netlify.app/autocomplete)
([View Source](https://github.com/sparkdesignsystem/spark-starter-angular/tree/kitchen-sink/src/app/spark-docs/autocomplete-docs)).

#### Keyboard Interactions
- The list can be closed by clicking outside the Autocomplete or by pressing
the \`Escape\` key.
- When the list is open, items in the list can be highlighted using the
\`Up\` and \`Down\` arrow keys. Note that this highlight is distinct from the
browser focus, which stays in the input.
- When the list is open and an item is highlighted, pressing the \`Enter\` key
will trigger the \`itemSelectedEvent\`.

#### Accessibility
- The component should include an element with \`aria-live="polite"\`. The
  contents of this element should be updated to reflect the number of visible
  items in the list. View the
  [demo site](https://spark-testangular.netlify.app/autocomplete)
  for examples.
- The input's parent element should have \`role="combobox"\` and
  \`aria-haspopup="listbox"\`. These attributes correctly identify the control
  to Assistive Technology.
- The input's parent element should have \`aria-owns\` set to the id of the
  list element. This attribute and id will be generated automatically by Spark
  if they are not provided.
- The input should have \`aria-autocomplete="list"\`.
  This attribute correctly identifies the control to Assistive Technology.
- The input should have \`autocomplete="off"\`, \`autocapitalize="off"\`,
  and \`spellcheck="false"\`. These attributes deactivate default browser
  behavior that can interfere with autocomplete behavior.
- The input element should have \`aria-controls\` set to the id of the
  list element. This attribute and id will be generated automatically by Spark
  if they are not provided.
- The list should have \`role="listbox"\`.
- When the list is hidden, the input's parent element should have
  \`aria-expanded="false"\`. Spark will apply this attribute automatically.
- When the list is visible, the input's parent element should have
  \`aria-expanded="true"\`. Spark will apply this attribute automatically.
- When the list is visible and an item is highlighted (with the arrow keys),
  the text input should have \`aria-activedescendant\` set to the \`id\`
  of the active item. Spark will apply this attribute automatically.
- When a list item is highlighted (with the arrow keys), it should have
  \`aria-selected="true"\`. Spark will apply this attribute automatically.
- Each selectable list item should have \`role="option"\`.

#### Requires Additional Engineering:
In order to keep the Spark Autocomplete flexible enough to use in a wide
  variety of use cases, some of the interactivity of the component is left
  up to implementing teams.

  - Filtering the list.
    - Display a message if a filter returns 0 results.
    - Highlight the matching text in the search results.
    - Update the contents of the associated \`aria-live\` element.
  - Showing the results list with \`showResults()\`.
  - Hiding the results list with \`hideResults()\`.
  - Setting the value of the input when an item is selected.
    - The id of the selected item can be retrieved using
    \`itemSelectedEvent\`.
    - The highlighted item is also identified by the value of
    \`aria-activedescendant\` on the input.
`,
    docs: { iframeHeight: 400 },
  },
};

const modules = {
  imports: [
    SprkAutocompleteModule,
    SprkAutocompleteResultsModule,
    SprkAutocompleteResultModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
  <sprk-autocomplete isOpen="true">
    <sprk-input-container>
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
      <label
        id="autocomplete-label"
        for="autocomplete-input"
        hasIcon="true"
        sprkLabel
      >
        Search for a Fruit
      </label>
      <div
        class="sprk-b-TextInputIconContainer"
        aria-labelledby="autocomplete-label"
        role="combobox"
        aria-haspopup="listbox"
      >
        <sprk-icon
          iconName="search"
          additionalClasses="
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="autocomplete-input"
          name="autocomplete-input"
          type="text"
          class="sprk-b-TextInput--has-svg-icon sprk-u-Width-100"
          aria-describedby="autocomplete--error-container"
          aria-autocomplete="list"
          sprkInput
          idString="autocomplete-input1"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        >
      </div>
      <ul
        sprkAutocompleteResults
        aria-labelledby="autocomplete-label"
        role="listbox"
      >
        <li sprkAutocompleteResult role="option">Apple</li>
        <li sprkAutocompleteResult role="option">Apricot</li>
        <li sprkAutocompleteResult role="option">Avocado</li>
        <li sprkAutocompleteResult role="option">Banana</li>
        <li sprkAutocompleteResult role="option">Blackberry</li>
        <li sprkAutocompleteResult role="option">Blueberry</li>
        <li sprkAutocompleteResult role="option">Clementine</li>
        <li sprkAutocompleteResult role="option">Fig</li>
        <li sprkAutocompleteResult role="option">Grape</li>
        <li sprkAutocompleteResult role="option">Kumquat</li>
        <li sprkAutocompleteResult role="option">Lemon</li>
        <li sprkAutocompleteResult role="option">Papaya</li>
      </ul>
    </sprk-input-container>
    <span sprkFieldError id="autocomplete--error-container">
    </span>
  </sprk-autocomplete>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const defaultInvalid = () => ({
  moduleMetadata: modules,
  template: `
  <sprk-autocomplete>
    <sprk-input-container>
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
      <label
        id="autocomplete-label2"
        for="autocomplete-input2"
        hasIcon="true"
        sprkLabel
      >
        Search for a Fruit
      </label>
      <div
        class="sprk-b-TextInputIconContainer"
        aria-labelledby="autocomplete-label2"
        role="combobox"
        aria-haspopup="listbox"
      >
        <sprk-icon
          iconName="search"
          additionalClasses="
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="autocomplete-input2"
          name="autocomplete-input2"
          type="text"
          class="sprk-b-TextInput--has-svg-icon sprk-u-Width-100 sprk-b-TextInput--error"
          aria-describedby="autocomplete--error-container2"
          aria-invalid="true"
          aria-autocomplete="list"
          sprkInput
          idString="autocomplete-input2"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        >
      </div>
      <ul
        aria-labelledby="autocomplete-label2"
        sprkAutocompleteResults
        role="listbox"
      >
        <li sprkAutocompleteResult role="option">Apple</li>
        <li sprkAutocompleteResult role="option">Apricot</li>
        <li sprkAutocompleteResult role="option">Avocado</li>
        <li sprkAutocompleteResult role="option">Banana</li>
        <li sprkAutocompleteResult role="option">Blackberry</li>
        <li sprkAutocompleteResult role="option">Blueberry</li>
        <li sprkAutocompleteResult role="option">Clementine</li>
        <li sprkAutocompleteResult role="option">Fig</li>
        <li sprkAutocompleteResult role="option">Grape</li>
        <li sprkAutocompleteResult role="option">Kumquat</li>
        <li sprkAutocompleteResult role="option">Lemon</li>
        <li sprkAutocompleteResult role="option">Papaya</li>
      </ul>
      <span sprkFieldError id="autocomplete--error-container2">
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  </sprk-autocomplete>
  `,
});

defaultInvalid.story = {
  name: 'Invalid',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const defaultDisabled = () => ({
  moduleMetadata: modules,
  template: `
  <sprk-autocomplete>
    <sprk-input-container>
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
      <label
        id="autocomplete-label3"
        for="autocomplete-input3"
        hasIcon="true"
        isDisabled="true"
        sprkLabel
      >
        Search for a Fruit
      </label>
      <div
        class="sprk-b-TextInputIconContainer"
        aria-labelledby="autocomplete-label3"
        role="combobox"
        aria-haspopup="listbox"
      >
        <sprk-icon
          iconName="search"
          additionalClasses="
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="autocomplete-input3"
          name="autocomplete-input3"
          type="text"
          class="sprk-b-TextInput--has-svg-icon sprk-u-Width-100"
          aria-describedby="autocomplete--error-container3"
          aria-autocomplete="list"
          sprkInput
          idString="autocomplete-input3"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          disabled
        >
      </div>
      <ul
        aria-labelledby="autocomplete-label3"
        sprkAutocompleteResults
        role="listbox"
      >
        <li sprkAutocompleteResult role="option">Apple</li>
        <li sprkAutocompleteResult role="option">Apricot</li>
        <li sprkAutocompleteResult role="option">Avocado</li>
        <li sprkAutocompleteResult role="option">Banana</li>
        <li sprkAutocompleteResult role="option">Blackberry</li>
        <li sprkAutocompleteResult role="option">Blueberry</li>
        <li sprkAutocompleteResult role="option">Clementine</li>
        <li sprkAutocompleteResult role="option">Fig</li>
        <li sprkAutocompleteResult role="option">Grape</li>
        <li sprkAutocompleteResult role="option">Kumquat</li>
        <li sprkAutocompleteResult role="option">Lemon</li>
        <li sprkAutocompleteResult role="option">Papaya</li>
      </ul>
      <span sprkFieldError id="autocomplete--error-container3">
      </span>
    </sprk-input-container>
  </sprk-autocomplete>
  `,
});

defaultDisabled.story = {
  name: 'Disabled',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const hugeStory = () => ({
  moduleMetadata: modules,
  template: `
  <sprk-autocomplete isOpen="true">
    <sprk-input-container variant="huge">
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>

      <div
        class="sprk-b-TextInputIconContainer"
        aria-labelledby="autocomplete-label4"
        role="combobox"
        aria-haspopup="listbox"
      >
        <sprk-icon
          iconName="search"
          additionalClasses="
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="autocomplete-input4"
          name="autocomplete-input4"
          type="text"
          placeholder="Search for a Fruit"
          class="sprk-u-Width-100"
          aria-describedby="autocomplete--error-container4"
          aria-autocomplete="list"
          sprkInput
          variant="huge"
          idString="autocomplete-input4"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        >
        <label
          id="autocomplete-label4"
          for="autocomplete-input4"
          sprkLabel
        >
          Search for a Fruit
        </label>
      </div>
      <ul
        aria-labelledby="autocomplete-label4"
        sprkAutocompleteResults
        role="listbox"
      >
        <li sprkAutocompleteResult role="option">Apple</li>
        <li sprkAutocompleteResult role="option">Apricot</li>
        <li sprkAutocompleteResult role="option">Avocado</li>
        <li sprkAutocompleteResult role="option">Banana</li>
        <li sprkAutocompleteResult role="option">Blackberry</li>
        <li sprkAutocompleteResult role="option">Blueberry</li>
        <li sprkAutocompleteResult role="option">Clementine</li>
        <li sprkAutocompleteResult role="option">Fig</li>
        <li sprkAutocompleteResult role="option">Grape</li>
        <li sprkAutocompleteResult role="option">Kumquat</li>
        <li sprkAutocompleteResult role="option">Lemon</li>
        <li sprkAutocompleteResult role="option">Papaya</li>
      </ul>
      <span sprkFieldError id="autocomplete--error-container4">
      </span>
    </sprk-input-container>
  </sprk-autocomplete>
  `,
});

hugeStory.story = {
  name: 'Huge',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const hugeInvalid = () => ({
  moduleMetadata: modules,
  template: `
  <sprk-autocomplete>
    <sprk-input-container variant="huge">
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>

      <div
        class="sprk-b-TextInputIconContainer"
        aria-labelledby="autocomplete-label5"
        role="combobox"
        aria-haspopup="listbox"
      >
        <sprk-icon
          iconName="search"
          additionalClasses="
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="autocomplete-input5"
          name="autocomplete-input5"
          type="text"
          placeholder="Search for a Fruit"
          class="sprk-u-Width-100 sprk-b-TextInput--error"
          aria-describedby="autocomplete--error-container5"
          aria-invalid="true"
          aria-autocomplete="list"
          sprkInput
          variant="huge"
          idString="autocomplete-input5"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        >
        <label
          id="autocomplete-label5"
          for="autocomplete-input5"
          sprkLabel
        >
          Search for a Fruit
        </label>
      </div>
      <ul
        aria-labelledby="autocomplete-label5"
        sprkAutocompleteResults
        role="listbox"
      >
        <li sprkAutocompleteResult role="option">Apple</li>
        <li sprkAutocompleteResult role="option">Apricot</li>
        <li sprkAutocompleteResult role="option">Avocado</li>
        <li sprkAutocompleteResult role="option">Banana</li>
        <li sprkAutocompleteResult role="option">Blackberry</li>
        <li sprkAutocompleteResult role="option">Blueberry</li>
        <li sprkAutocompleteResult role="option">Clementine</li>
        <li sprkAutocompleteResult role="option">Fig</li>
        <li sprkAutocompleteResult role="option">Grape</li>
        <li sprkAutocompleteResult role="option">Kumquat</li>
        <li sprkAutocompleteResult role="option">Lemon</li>
        <li sprkAutocompleteResult role="option">Papaya</li>
      </ul>
      <span sprkFieldError id="autocomplete--error-container5">
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  </sprk-autocomplete>
  `,
});

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const hugeDisabled = () => ({
  moduleMetadata: modules,
  template: `
  <sprk-autocomplete>
    <sprk-input-container variant="huge">
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>

      <div
        class="sprk-b-TextInputIconContainer"
        aria-labelledby="autocomplete-label6"
        role="combobox"
        aria-haspopup="listbox"
      >
        <sprk-icon
          iconName="search"
          additionalClasses="
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="autocomplete-input6"
          name="autocomplete-input6"
          type="text"
          placeholder="Search for a Fruit"
          class="sprk-u-Width-100"
          aria-describedby="autocomplete--error-container6"
          aria-autocomplete="list"
          disabled
          sprkInput
          variant="huge"
          idString="autocomplete-input6"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        >
        <label
          id="autocomplete-label6"
          for="autocomplete-input6"
          sprkLabel
        >
          Search for a Fruit
        </label>
      </div>
      <ul
        aria-labelledby="autocomplete-label6"
        sprkAutocompleteResults
        role="listbox"
      >
        <li sprkAutocompleteResult role="option">Apple</li>
        <li sprkAutocompleteResult role="option">Apricot</li>
        <li sprkAutocompleteResult role="option">Avocado</li>
        <li sprkAutocompleteResult role="option">Banana</li>
        <li sprkAutocompleteResult role="option">Blackberry</li>
        <li sprkAutocompleteResult role="option">Blueberry</li>
        <li sprkAutocompleteResult role="option">Clementine</li>
        <li sprkAutocompleteResult role="option">Fig</li>
        <li sprkAutocompleteResult role="option">Grape</li>
        <li sprkAutocompleteResult role="option">Kumquat</li>
        <li sprkAutocompleteResult role="option">Lemon</li>
        <li sprkAutocompleteResult role="option">Papaya</li>
      </ul>
      <span sprkFieldError id="autocomplete--error-container6">
      </span>
    </sprk-input-container>
  </sprk-autocomplete>
  `,
});

hugeDisabled.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};
