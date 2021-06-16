// @ts-ignore prettier-ignore
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
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
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Input/Textarea',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkTextareaDirective,
    SprkLabelDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [
        SprkTextareaContainerModule,
        SprkInputContainerModule,
        SprkLabelModule,
        SprkTextareaModule,
        SprkIconModule,
        SprkFieldErrorModule,
        FormsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${story}
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
    docs: {
      description: {
        component: `
${markdownDocumentationLinkBuilder('input')}
    `,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const textarea = () => ({
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

textarea.storyName = 'Default';

textarea.parameters = {
  jest: [
    'sprk-textarea-container.component',
    'sprk-textarea.directive',
    'sprk-label.directive',
  ],
};

export const invalidTextarea = () => ({
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
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-textarea-container>
  `,
});

invalidTextarea.storyName = 'Invalid';

invalidTextarea.parameters = {
  jest: [
    'sprk-textarea-container.component',
    'sprk-field-error.directive',
    'sprk-textarea.directive',
    'sprk-label.directive',
  ],
};

export const disabledTextarea = () => ({
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

disabledTextarea.storyName = 'Disabled';

disabledTextarea.parameters = {
  jest: [
    'sprk-textarea-container.component',
    'sprk-textarea.directive',
    'sprk-label.directive',
  ],
};
