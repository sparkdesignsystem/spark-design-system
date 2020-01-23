import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Search',
  component: SparkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkIconComponent,
    SprkLabelDirective,
    SprkFieldErrorDirective,
  },
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${storyContent}
          </form>
        <div>`
      )
    )
  ],
  props: {
    onSubmit(event): void {
      this.form_submitted = true;
    }
  },
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SprkIconInputContainerModule,
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule
  ],
};

export const searchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label
        class="sprk-b-Label--with-icon sprk-u-ScreenReaderText"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--stroke-current-color"
        sprk-input-icon
      ></sprk-icon>
      <input
        name="inline_search_input"
        class="sprk-b-TextInput--has-svg-icon"
        type="text"
        placeholder="Search"
        [(ngModel)]="inline_search_input"
        #inlineSearchInput="ngModel"
        data-id="input-search-1"
        sprkInput
      >
    </sprk-icon-input-container>
  `,
});

searchInput.story = {
  name: 'Default',
};

export const invalidSearchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label
        class="sprk-b-Label--with-icon sprk-u-ScreenReaderText"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--stroke-current-color"
        sprk-input-icon
      ></sprk-icon>
      <input
        name="inline_search_input"
        class="sprk-b-TextInput--has-svg-icon sprk-b-TextInput--error"
        type="text"
        placeholder="Search"
        [(ngModel)]="inline_search_input"
        #inlineSearchInput="ngModel"
        data-id="input-search-1"
        sprkInput
        aria-invalid="true"
      >
      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-icon-input-container>
  `,
});

invalidSearchInput.story = {
  name: 'Invalid',
};

export const disabledSearchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label
        class="sprk-b-Label--with-icon sprk-u-ScreenReaderText sprk-b-Label--disabled"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--stroke-current-color"
        sprk-input-icon
      ></sprk-icon>
      <input
        name="inline_search_input"
        class="sprk-b-TextInput--has-svg-icon"
        type="text"
        placeholder="Search"
        [(ngModel)]="inline_search_input"
        #inlineSearchInput="ngModel"
        data-id="input-search-1"
        sprkInput
        disabled
      >
    </sprk-icon-input-container>
  `,
});

disabledSearchInput.story = {
  name: 'Disabled',
};


