import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';


export default {
  title: 'Components/Input/Phone',
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
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
  ],
};

export const phoneInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Phone Number</label>
      <input
        name="phone_input"
        type="text"
        pattern="(^(\\+\\d{1,2}\\s)?((\\(\\d{3}\\))|\\d{3})[\\s.-]?\\d{3}[\\s.-]?\\d{4}$)|^$"
        placeholder="(000) 000-0000"
        [(ngModel)]="phone_input"
        required
        #phoneInput="ngModel"
        sprkFormatterPhoneNumber
        sprkInput
      />
      <span
        [hidden]="phoneInput.valid || phoneInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">
          {{
            phoneInput.invalid && phoneInput.value === ''
              ? 'This field is required.'
              : 'This field is invalid.'
          }}
        </div>
      </span>
    </sprk-input-container>
  `,
});

phoneInput.story = {
  name: 'Default',
};
