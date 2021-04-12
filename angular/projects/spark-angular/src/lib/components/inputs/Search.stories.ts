import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Search',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkIconComponent,
    SprkLabelDirective,
    SprkFieldErrorDirective,
  },
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${storyContent}
          </form>
        <div>`,
    ),
  ],
  props: {
    onSubmit(event): void {
      this.form_submitted = true;
    },
  },
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkIconInputContainerModule,
    SprkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
  ],
};

export const searchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <div class="sprk-b-InputContainer__icon-container">
        <label
          for="search"
          hasIcon="true"
          isHidden="true"
          sprkLabel
        >
          Search
        </label>
        <sprk-icon
          iconName="search"
          additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
          sprk-input-icon
        ></sprk-icon>
        <input
          id="search"
          name="inline_search_input"
          class="sprk-b-TextInput--has-svg-icon"
          type="search"
          placeholder="Search"
          [(ngModel)]="inline_search_input"
          #inlineSearchInput="ngModel"
          idString="input-search-1"
          sprkInput
        >
      </div>
    </sprk-input-container>
  `,
});

searchInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const invalidSearchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <div class="sprk-b-InputContainer__icon-container">
        <label
          for="invalid-search"
          hasIcon="true"
          isHidden="true"
          sprkLabel
        >
          Search
        </label>
        <sprk-icon
          iconName="search"
          additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
          sprk-input-icon
        ></sprk-icon>
        <input
          id="invalid-search"
          aria-describedby="search-error"
          name="inline_search_input"
          class="sprk-b-TextInput--has-svg-icon sprk-b-TextInput--error"
          type="search"
          placeholder="Search"
          [(ngModel)]="inline_search_input"
          #inlineSearchInput="ngModel"
          idString="input-search-1"
          sprkInput
          aria-invalid="true"
        >
      </div>
      <span sprkFieldError id="search-error">
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  `,
});

invalidSearchInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledSearchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <div class="sprk-b-InputContainer__icon-container">
        <label
          for="disabled-search"
          hasIcon="true"
          isHidden="true"
          isDisabled="true"
          sprkLabel
        >
          Search
        </label>
        <sprk-icon
          iconName="search"
          additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
          sprk-input-icon
        ></sprk-icon>
        <input
          id="disabled-search"
          name="inline_search_input"
          class="sprk-b-TextInput--has-svg-icon"
          type="search"
          placeholder="Search"
          [(ngModel)]="inline_search_input"
          #inlineSearchInput="ngModel"
          idString="input-search-1"
          sprkInput
          disabled
        >
      </div>
    </sprk-input-container>
  `,
});

disabledSearchInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const legacyStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label
        for="legacy-search"
        class="sprk-b-Label--with-icon sprk-u-ScreenReaderText"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
        sprk-input-icon
      ></sprk-icon>
      <input
        id="legacy-search"
        name="inline_search_input"
        class="sprk-b-TextInput--has-svg-icon"
        type="search"
        placeholder="Search"
        [(ngModel)]="inline_search_input"
        #inlineSearchInput="ngModel"
        idString="input-search-1"
        sprkInput
      >
    </sprk-icon-input-container>
  `,
});

legacyStory.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const legacyInvalidSearchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label
        for="legacy-invalid-search"
        class="sprk-b-Label--with-icon sprk-u-ScreenReaderText"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
        sprk-input-icon
      ></sprk-icon>
      <input
        id="legacy-invalid-search"
        aria-describedby="legacy-search-error"
        name="inline_search_input"
        class="sprk-b-TextInput--has-svg-icon sprk-b-TextInput--error"
        type="search"
        placeholder="Search"
        [(ngModel)]="inline_search_input"
        #inlineSearchInput="ngModel"
        idString="input-search-1"
        sprkInput
        aria-invalid="true"
      >
      <span sprkFieldError id="legacy-search-error">
        <sprk-icon
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-icon-input-container>
  `,
});

legacyInvalidSearchInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const legacyDisabledSearchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label
        for="legacy-disabled-search"
        class="sprk-b-Label--with-icon sprk-u-ScreenReaderText sprk-b-Label--disabled"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
        sprk-input-icon
      ></sprk-icon>
      <input
        id="legacy-disabled-search"
        name="inline_search_input"
        class="sprk-b-TextInput--has-svg-icon"
        type="search"
        placeholder="Search"
        [(ngModel)]="inline_search_input"
        #inlineSearchInput="ngModel"
        idString="input-search-1"
        sprkInput
        disabled
      >
    </sprk-icon-input-container>
  `,
});

legacyDisabledSearchInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};
