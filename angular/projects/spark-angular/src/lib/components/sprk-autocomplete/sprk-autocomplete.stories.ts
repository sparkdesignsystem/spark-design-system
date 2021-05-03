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

export default {
  title: 'Components/Autocomplete',
  component: SprkAutocompleteComponent,
  subcomponents: {
    SprkInputDirective,
    SprkAutocompleteResultsDirective,
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
        class="sprk-c-Autocomplete__results"
        role="listbox"
        aria-labelledby="autocomplete-label"
        sprkAutocompleteResults
      >
        <li role="option" class="sprk-c-Autocomplete__result">Apple</li>
      </ul>
    </sprk-input-container>
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
    default invalid
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
    default disabled
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
    huge
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
    huge invalid
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
    huge disabled
  `,
});

hugeDisabled.story = {
  name: 'Huge Disabbled',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};
