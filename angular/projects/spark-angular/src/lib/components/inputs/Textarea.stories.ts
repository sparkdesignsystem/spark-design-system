import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkTextareaContainerModule } from './sprk-textarea-container/sprk-textarea-container.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';

export default {
  title: 'Components/Input/Textarea',
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
    SprkTextareaContainerModule,
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
  ],
};

export const textarea = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-textarea-container>
      <label for="textarea-1" sprkLabel>Description</label>
      <textarea
        name="textarea_input"
        id="textarea-1"
        [(ngModel)]="textarea_input"
        #textareaInput="ngModel"
        data-id="textarea-1"
        sprkInput
      ></textarea>
    </sprk-textarea-container>
  `,
});

textarea.story = {
  name: 'Default',
};
