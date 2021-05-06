import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkAutocompleteModule } from './sprk-autocomplete.module';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkInputContainerModule } from '../inputs/sprk-input-container/sprk-input-container.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkIconInputContainerModule } from '../inputs/sprk-icon-input-container/sprk-icon-input-container.module';
import { SprkInputContainerComponent } from '../inputs/sprk-input-container/sprk-input-container.component';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results/sprk-autocomplete-results.directive';
import { SprkAutocompleteResultsModule } from './sprk-autocomplete-results/sprk-autocomplete-results.module';
import { SprkAutocompleteResultDirective } from './sprk-autocomplete-result/sprk-autocomplete-result.directive';
import { SprkAutocompleteResultModule } from './sprk-autocomplete-result/sprk-autocomplete-result.module';

export default {
  title: 'Components/Autocomplete',
  component: SprkAutocompleteComponent,
  subcomponents: {
    SprkInputDirective,
    SprkAutocompleteResultsDirective,
    SprkAutocompleteResultDirective,
    SprkIconComponent,
    SprkLabelDirective,
    SprkFieldErrorDirective,
    SprkInputContainerComponent,
  },
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('autocomplete')}
todo write docs
`,
    docs: { iframeHeight: 400 },
  },
};

const modules = {
  imports: [
    SprkAutocompleteModule,
    SprkIconInputContainerModule,
    SprkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
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
          sprkInput
          idString="autocomplete-input1"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        >
      </div>
      <ul
        aria-labelledby="autocomplete-label"
        sprkAutocompleteResults
      >
        <li sprkAutocompleteResult>Apple</li>
        <li sprkAutocompleteResult>Apricot</li>
        <li sprkAutocompleteResult>Avocado</li>
        <li sprkAutocompleteResult>Banana</li>
        <li sprkAutocompleteResult>Blackberry</li>
        <li sprkAutocompleteResult>Blueberry</li>
        <li sprkAutocompleteResult>Clementine</li>
        <li sprkAutocompleteResult>Fig</li>
        <li sprkAutocompleteResult>Grape</li>
        <li sprkAutocompleteResult>Kumquat</li>
        <li sprkAutocompleteResult>Lemon</li>
        <li sprkAutocompleteResult>Papaya</li>
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
      >
        <li sprkAutocompleteResult>Apple</li>
        <li sprkAutocompleteResult>Apricot</li>
        <li sprkAutocompleteResult>Avocado</li>
        <li sprkAutocompleteResult>Banana</li>
        <li sprkAutocompleteResult>Blackberry</li>
        <li sprkAutocompleteResult>Blueberry</li>
        <li sprkAutocompleteResult>Clementine</li>
        <li sprkAutocompleteResult>Fig</li>
        <li sprkAutocompleteResult>Grape</li>
        <li sprkAutocompleteResult>Kumquat</li>
        <li sprkAutocompleteResult>Lemon</li>
        <li sprkAutocompleteResult>Papaya</li>
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
      >
        <li sprkAutocompleteResult>Apple</li>
        <li sprkAutocompleteResult>Apricot</li>
        <li sprkAutocompleteResult>Avocado</li>
        <li sprkAutocompleteResult>Banana</li>
        <li sprkAutocompleteResult>Blackberry</li>
        <li sprkAutocompleteResult>Blueberry</li>
        <li sprkAutocompleteResult>Clementine</li>
        <li sprkAutocompleteResult>Fig</li>
        <li sprkAutocompleteResult>Grape</li>
        <li sprkAutocompleteResult>Kumquat</li>
        <li sprkAutocompleteResult>Lemon</li>
        <li sprkAutocompleteResult>Papaya</li>
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
      >
        <li sprkAutocompleteResult>Apple</li>
        <li sprkAutocompleteResult>Apricot</li>
        <li sprkAutocompleteResult>Avocado</li>
        <li sprkAutocompleteResult>Banana</li>
        <li sprkAutocompleteResult>Blackberry</li>
        <li sprkAutocompleteResult>Blueberry</li>
        <li sprkAutocompleteResult>Clementine</li>
        <li sprkAutocompleteResult>Fig</li>
        <li sprkAutocompleteResult>Grape</li>
        <li sprkAutocompleteResult>Kumquat</li>
        <li sprkAutocompleteResult>Lemon</li>
        <li sprkAutocompleteResult>Papaya</li>
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
      >
        <li sprkAutocompleteResult>Apple</li>
        <li sprkAutocompleteResult>Apricot</li>
        <li sprkAutocompleteResult>Avocado</li>
        <li sprkAutocompleteResult>Banana</li>
        <li sprkAutocompleteResult>Blackberry</li>
        <li sprkAutocompleteResult>Blueberry</li>
        <li sprkAutocompleteResult>Clementine</li>
        <li sprkAutocompleteResult>Fig</li>
        <li sprkAutocompleteResult>Grape</li>
        <li sprkAutocompleteResult>Kumquat</li>
        <li sprkAutocompleteResult>Lemon</li>
        <li sprkAutocompleteResult>Papaya</li>
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
      >
        <li sprkAutocompleteResult>Apple</li>
        <li sprkAutocompleteResult>Apricot</li>
        <li sprkAutocompleteResult>Avocado</li>
        <li sprkAutocompleteResult>Banana</li>
        <li sprkAutocompleteResult>Blackberry</li>
        <li sprkAutocompleteResult>Blueberry</li>
        <li sprkAutocompleteResult>Clementine</li>
        <li sprkAutocompleteResult>Fig</li>
        <li sprkAutocompleteResult>Grape</li>
        <li sprkAutocompleteResult>Kumquat</li>
        <li sprkAutocompleteResult>Lemon</li>
        <li sprkAutocompleteResult>Papaya</li>
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
