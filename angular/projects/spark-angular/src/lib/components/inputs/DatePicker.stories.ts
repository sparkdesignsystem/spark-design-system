import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkDatepickerModule } from '../../directives/inputs/sprk-datepicker/sprk-datepicker.module';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SprkDatepickerDirective } from '../../directives/inputs/sprk-datepicker/sprk-datepicker.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date Picker',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkDatepickerDirective,
    SprkLabelDirective,
    SprkInputDirective,
    SprkIconComponent,
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
- The value of this field contains special characters
(/) which you may need to remove before submitting the form.
- The Date Picker makes use of a 3rd party library called
Tiny Date Picker. See the SprkDatepickerDirective tab in
the Inputs table below for available customization options.
- Requires Additional Engineering:
  - Validation
  - Reformatting to date pattern MM/DD/YYYY - After
  valid input, it should reformat to add commas and
  decimals to the hundredth place.
`,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
    SprkDatepickerModule,
    SprkIconInputContainerModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <div class="sprk-b-InputContainer__icon-container">
        <label for="datepicker" hasIcon="true" sprkLabel>
          Date Input
        </label>
        <sprk-icon
          iconName="calendar"
          additionalClasses="sprk-c-Icon--stroke-current-color"
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="datepicker"
          name="datepicker_input"
          type="text"
          placeholder="MM/DD/YYYY"
          [(ngModel)]="datepicker_input"
          #datepickerInput="ngModel"
          [sprkDatePickerConfig]="dpConfig"
          aria-invalid="true"
          sprkDatepicker
        />
      </div>
    </sprk-input-container>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    docs: { iframeHeight: 400 },
    jest: [
      'sprk-input-container.component',
      'sprk-label.directive',
      'sprk-datepicker.directive',
    ],
  },
};

export const invalidDatePicker = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <div class="sprk-b-InputContainer__icon-container">
        <label for="invalid-datepicker" hasIcon="true" sprkLabel>
          Date Input
        </label>
        <sprk-icon
          iconName="calendar"
          additionalClasses="sprk-c-Icon--stroke-current-color"
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="invalid-datepicker"
          aria-describedby="datepicker-error"
          name="datepicker_input"
          type="text"
          class="sprk-b-TextInput--error"
          placeholder="MM/DD/YYYY"
          [(ngModel)]="datepicker_input"
          #datepickerInput="ngModel"
          [sprkDatePickerConfig]="dpConfig"
          aria-invalid="true"
          sprkDatepicker
        />
      </div>
      <span sprkFieldError id="datepicker-error">
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

invalidDatePicker.story = {
  name: 'Invalid',
  parameters: {
    docs: { iframeHeight: 400 },
    jest: [
      'sprk-input-container.component',
      'sprk-label.directive',
      'sprk-datepicker.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledDatePicker = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <div class="sprk-b-InputContainer__icon-container">
        <label for="disabled-datepicker" hasIcon="true" sprkLabel isDisabled="true">
          Date Input
        </label>
        <sprk-icon
          iconName="calendar"
          additionalClasses="sprk-c-Icon--stroke-current-color"
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="disabled-datepicker"
          name="datepicker_input"
          type="text"
          disabled
          placeholder="MM/DD/YYYY"
          [(ngModel)]="datepicker_input"
          #datepickerInput="ngModel"
          [sprkDatePickerConfig]="dpConfig"
          aria-invalid="true"
          sprkDatepicker
        />
      </div>
    </sprk-input-container>
  `,
});

disabledDatePicker.story = {
  name: 'Disabled',
  parameters: {
    docs: { iframeHeight: 400 },
    jest: [
      'sprk-input-container.component',
      'sprk-label.directive',
      'sprk-datepicker.directive',
    ],
  },
};

export const legacyStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label for="legacy-datepicker" sprkLabel>
        Date Input
      </label>
      <sprk-icon
        iconType="calendar"
        additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
        sprk-input-icon
        ariaHidden="true"
      ></sprk-icon>
      <input
        id="legacy-datepicker"
        name="datepicker_input"
        class="sprk-b-TextInput--has-svg-icon"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="datepicker_input"
        #datepickerInput="ngModel"
        [sprkDatePickerConfig]="dpConfig"
        sprkDatepicker
        sprkInput
      />
    </sprk-icon-input-container>
  `,
});

legacyStory.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    docs: { iframeHeight: 400 },
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-datepicker.directive',
    ],
  },
};

export const legacyInvalidDatePicker = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label for="legacy-invalid-datepicker" sprkLabel>
        Date Input
      </label>
      <sprk-icon
        iconType="calendar"
        additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
        sprk-input-icon
        ariaHidden="true"
      ></sprk-icon>
      <input
        id="legacy-invalid-datepicker"
        aria-describedby="legacy-datepicker-error"
        name="datepicker_input"
        class="sprk-b-TextInput--has-svg-icon sprk-b-TextInput--error"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="datepicker_input"
        #datepickerInput="ngModel"
        [sprkDatePickerConfig]="dpConfig"
        aria-invalid="true"
        sprkDatepicker
        sprkInput
      />
      <span sprkFieldError id="legacy-datepicker-error">
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

legacyInvalidDatePicker.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    docs: { iframeHeight: 400 },
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-datepicker.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const legacyDisabledDatePicker = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label for="legacy-disabled-datepicker" class="sprk-b-Label--disabled" sprkLabel>
        Date Input
      </label>
      <sprk-icon
        iconType="calendar"
        additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
        sprk-input-icon
        ariaHidden="true"
      ></sprk-icon>
      <input
        id="legacy-disabled-datepicker"
        disabled
        name="datepicker_input"
        class="sprk-b-TextInput--has-svg-icon"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="datepicker_input"
        #datepickerInput="ngModel"
        [sprkDatePickerConfig]="dpConfig"
        sprkDatepicker
        sprkInput
      />
    </sprk-icon-input-container>
  `,
});

legacyDisabledDatePicker.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    docs: { iframeHeight: 400 },
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-datepicker.directive',
    ],
  },
};
