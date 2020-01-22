import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkTextareaContainerModule } from './sprk-textarea-container/sprk-textarea-container.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Textarea',
  component: SparkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkLabelDirective,
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
    SprkTextareaContainerModule,
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule
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

export const invalidTextarea = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-textarea-container>
      <label for="textarea-1" sprkLabel>Description</label>
      <textarea
        class="sprk-b-TextArea--error"
        name="textarea_input"
        id="textarea-1"
        [(ngModel)]="textarea_input"
        #textareaInput="ngModel"
        data-id="textarea-1"
        sprkInput
        aria-invalid="true"
      ></textarea>
      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-textarea-container>
  `,
});

invalidTextarea.story = {
  name: 'Invalid',
};

export const disabledTextarea = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-textarea-container>
      <label
        class="sprk-b-Label--disabled"
        for="textarea-1"
        sprkLabel>Description</label>
      <textarea
        name="textarea_input"
        id="textarea-1"
        [(ngModel)]="textarea_input"
        #textareaInput="ngModel"
        data-id="textarea-1"
        sprkInput
        disabled
      ></textarea>
    </sprk-textarea-container>
  `,
});

disabledTextarea.story = {
  name: 'Disabled',
};
