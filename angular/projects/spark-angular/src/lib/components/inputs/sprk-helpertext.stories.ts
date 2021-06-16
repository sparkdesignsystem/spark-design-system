// @ts-ignore
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkHelperTextModule } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkHelperTextDirective } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.directive';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Input/Helper Text',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkHelperTextDirective,
    SprkLabelDirective,
    SprkInputDirective,
    SprkFieldErrorDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [
        SprkInputContainerModule,
        SprkLabelModule,
        SprkInputModule,
        SprkIconModule,
        SprkFieldErrorModule,
        SprkHelperTextModule,
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
- Helper text must be placed below the Input and above the error container.
- Helper text is marked with the \`sprkHelperText\` directive.
`,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const helperText = () => ({
  template: `
    <sprk-input-container>
      <label for="helper-input" sprkLabel>
        Text Input Label
      </label>
      <input
        id="helper-input"
        aria-describedby="helper-text"
        sprkInput
        name="text_input"
        type="text"
        [(ngModel)]="text_input"
        #textInput="ngModel"
        idString="text-input-1"
      >
      <p sprkHelperText id="helper-text">
        Optional helper text, used to clarify the field's intent.
      </p>
    </sprk-input-container>
  `,
});

helperText.storyName = 'Default';

helperText.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-helper-text.directive',
  ],
};

export const invalidHelperText = () => ({
  template: `
    <sprk-input-container>
      <label for="invalid-helper-input" sprkLabel>
        Text Input Label
      </label>
      <input
        id="invalid-helper-input"
        aria-describedby="helper-text helper-error"
        sprkInput
        name="text_input"
        type="text"
        [(ngModel)]="text_input"
        #textInput="ngModel"
        idString="text-input-1"
        class="sprk-b-TextInput--error"
        aria-invalid="true"
      >
      <p sprkHelperText id="helper-text">
        Optional helper text, used to clarify the field's intent.
      </p>
      <span sprkFieldError id="helper-error">
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

invalidHelperText.storyName = 'With Error Text';

invalidHelperText.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-helper-text.directive',
    'sprk-field-error.directive',
  ],
};
