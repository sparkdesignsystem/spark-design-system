// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
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
import { FormsModule } from '@angular/forms';

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
    moduleMetadata({
      imports: [
        SprkIconInputContainerModule,
        SprkInputContainerModule,
        SprkLabelModule,
        SprkInputModule,
        SprkIconModule,
        SprkFieldErrorModule,
        FormsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${story}
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
    docs: {
      description: {
        component: `
${markdownDocumentationLinkBuilder('input')}
    `,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const searchInput = () => ({
  template: `
    <sprk-input-container>
      <div class="sprk-b-InputContainer__icon-container">
        <label
          for="search"
          isHidden="true"
          sprkLabel
        >
          Search
        </label>
        <sprk-icon
          iconName="search"
          additionalClasses="sprk-b-InputContainer__icon sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
          sprk-input-icon
          ariaHidden="true"
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

searchInput.storyName = 'Default';

searchInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const invalidSearchInput = () => ({
  template: `
    <sprk-input-container>
      <div class="sprk-b-InputContainer__icon-container">
        <label
          for="invalid-search"
          isHidden="true"
          sprkLabel
        >
          Search
        </label>
        <sprk-icon
          iconName="search"
          additionalClasses="sprk-b-InputContainer__icon sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
          sprk-input-icon
          ariaHidden="true"
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
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  `,
});

invalidSearchInput.storyName = 'Invalid';

invalidSearchInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const disabledSearchInput = () => ({
  template: `
    <sprk-input-container>
      <div class="sprk-b-InputContainer__icon-container">
        <label
          for="disabled-search"
          isHidden="true"
          isDisabled="true"
          sprkLabel
        >
          Search
        </label>
        <sprk-icon
          iconName="search"
          additionalClasses="sprk-b-InputContainer__icon sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
          sprk-input-icon
          ariaHidden="true"
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

disabledSearchInput.storyName = 'Disabled';

disabledSearchInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const legacyStory = () => ({
  template: `
    <sprk-icon-input-container>
      <label
        for="legacy-search"
        class="sprk-u-ScreenReaderText"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
        sprk-input-icon
        ariaHidden="true"
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

legacyStory.storyName = 'Legacy (Deprecated)';

legacyStory.parameters = {
  jest: [
    'sprk-icon-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const legacyInvalidSearchInput = () => ({
  template: `
    <sprk-icon-input-container>
      <label
        for="legacy-invalid-search"
        class="sprk-u-ScreenReaderText"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
        sprk-input-icon
        ariaHidden="true"
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
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-icon-input-container>
  `,
});

legacyInvalidSearchInput.storyName = 'Legacy Invalid (Deprecated)';

legacyInvalidSearchInput.parameters = {
  jest: [
    'sprk-icon-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const legacyDisabledSearchInput = () => ({
  template: `
    <sprk-icon-input-container>
      <label
        for="legacy-disabled-search"
        class="sprk-u-ScreenReaderText sprk-b-Label--disabled"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InlineSearch__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
        sprk-input-icon
        ariaHidden="true"
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

legacyDisabledSearchInput.storyName = 'Legacy Disabled (Deprecated)';

legacyDisabledSearchInput.parameters = {
  jest: [
    'sprk-icon-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};
