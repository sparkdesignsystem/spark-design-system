import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkDatepickerModule } from '../../directives/inputs/sprk-datepicker/sprk-datepicker.module';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkDatepickerDirective } from '../../directives/inputs/sprk-datepicker/sprk-datepicker.directive';

export default {
  title: 'Components/Input/Date Picker',
  component: SparkInputContainerComponent,
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
    subcomponents: {
      SprkDatepickerDirective,
    },
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
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

export const datePicker = () => ({
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
        pattern="^(((0[13578]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02([\\/-]?)((0[1-9])|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="datepicker_input"
        #datepickerInput="ngModel"
        sprkFormatterDate
        [sprkDatePickerConfig]="dpConfig"
        sprkDatepicker
        sprkInput
      />
      <div
        [hidden]="datepickerInput.valid || datepickerInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">Invalid date.</div>
      </div>
    </sprk-icon-input-container>
  `,
});

datePicker.story = {
  name: 'Default',
  parameters: {
    docs: { iframeHeight: 400 },
  }
};
