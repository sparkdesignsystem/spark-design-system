import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkIconInputContainerComponent } from './sprk-icon-input-container/sprk-icon-input-container.component';
import { SprkHelperTextModule } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.module';

export default {
  title: 'Components/Input/Helper Text',
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
    SprkHelperTextModule,
  ],
};

export const helperText = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>
        Text Input Label
      </label>
      <input
        sprkInput
        name="text_input"
        type="text"
        [(ngModel)]="text_input"
        required
        #textInput="ngModel"
        data-id="text-input-1"
      >
      <p sprkHelperText>
        Optional helper text, used to clarify the field's intent.
      </p>
    </sprk-input-container>
  `,
});

helperText.story = {
  name: 'Default',
};
