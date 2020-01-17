import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkDatepickerModule } from '../../directives/inputs/sprk-datepicker/sprk-datepicker.module';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkDatepickerDirective } from '../../directives/inputs/sprk-datepicker/sprk-datepicker.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date Picker',
  component: SparkInputContainerComponent,
  subcomponents: {
    SprkDatepickerDirective,
    SprkLabelDirective,
    SprkInputDirective,
    SprkIconComponent,
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
${markdownDocumentationLinkBuilder('components', 'input')}
`,
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SprkIconInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
    SprkDatepickerModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label class="sprk-b-Label--with-icon" sprkLabel>
        Date Input
      </label>
      <sprk-icon
        iconType="calendar"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-DatePicker__icon"
        sprk-input-icon
      ></sprk-icon>
      <input
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

defaultStory.story = {
  name: 'Default',
  parameters: {
    docs: { iframeHeight: 400 },
  }
};

export const invalidDatePicker = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label class="sprk-b-Label--with-icon" sprkLabel>
        Date Input
      </label>
      <sprk-icon
        iconType="calendar"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-DatePicker__icon"
        sprk-input-icon
      ></sprk-icon>
      <input
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

invalidDatePicker.story = {
  name: 'Invalid',
  parameters: {
    docs: { iframeHeight: 400 },
  }
};

export const disabledDatePicker = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label class="sprk-b-Label--with-icon sprk-b-Label--disabled" sprkLabel>
        Date Input
      </label>
      <sprk-icon
        iconType="calendar"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-DatePicker__icon"
        sprk-input-icon
      ></sprk-icon>
      <input
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

disabledDatePicker.story = {
  name: 'Disabled',
  parameters: {
    docs: { iframeHeight: 400 },
  }
};
