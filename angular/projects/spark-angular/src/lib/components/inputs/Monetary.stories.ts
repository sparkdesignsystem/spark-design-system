import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkIconInputContainerComponent } from './sprk-icon-input-container/sprk-icon-input-container.component';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';


export default {
  title: 'Components/Input/Monetary',
  component: SprkIconInputContainerComponent,
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
    SprkIconInputContainerModule,
  ],
};

export const monetaryInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label class="sprk-b-Label--monetary" sprkLabel>
        Payment
      </label>
      <input
        class="sprk-b-TextInput--has-text-icon"
        name="monetary_input"
        type="text"
        pattern="(^\\$?(\\d+|\\d{1,3}(,\\d{3})*)(\\.\\d+)?$)|^$"
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkFormatterMonetary
        sprkInput
      />
      <div
        [hidden]="monetaryInput.valid || monetaryInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">Invalid amount.</div>
      </div>
    </sprk-icon-input-container>
  `,
});

monetaryInput.story = {
  name: 'Default',
};
