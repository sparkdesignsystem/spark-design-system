import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkTextareaModule } from '../../directives/inputs/sprk-textarea/sprk-textarea.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkTextareaContainerModule } from './sprk-textarea-container/sprk-textarea-container.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkTextareaDirective } from '../../directives/inputs/sprk-textarea/sprk-textarea.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Textarea',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkTextareaDirective,
    SprkLabelDirective,
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
    `,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkTextareaContainerModule,
    SprkInputContainerModule,
    SprkLabelModule,
    SprkTextareaModule,
    SprkIconModule,
    SprkFieldErrorModule,
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
        idString="textarea-1"
        sprkTextarea
      ></textarea>
    </sprk-textarea-container>
  `,
});

textarea.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-textarea-container.component',
      'sprk-textarea.directive',
      'sprk-label.directive',
    ],
  },
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
        idString="textarea-1"
        sprkTextarea
        aria-invalid="true"
        aria-describedby="textarea-error"
      ></textarea>
      <span sprkFieldError id="textarea-error">
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-textarea-container>
  `,
});

invalidTextarea.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-textarea-container.component',
      'sprk-field-error.directive',
      'sprk-textarea.directive',
      'sprk-label.directive',
    ],
  },
};

export const disabledTextarea = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-textarea-container>
      <label
        isDisabled="true"
        for="textarea-1"
        sprkLabel
      >
        Description
      </label>
      <textarea
        name="textarea_input"
        id="textarea-1"
        [(ngModel)]="textarea_input"
        #textareaInput="ngModel"
        idString="textarea-1"
        sprkTextarea
        disabled
      ></textarea>
    </sprk-textarea-container>
  `,
});

disabledTextarea.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-textarea-container.component',
      'sprk-textarea.directive',
      'sprk-label.directive',
    ],
  },
};
