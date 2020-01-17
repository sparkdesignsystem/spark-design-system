import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkHelperTextModule } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkHelperTextDirective } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.directive';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Helper Text',
  component: SparkInputContainerComponent,
  subcomponents: {
    SprkHelperTextDirective,
    SprkLabelDirective,
    SprkInputDirective,
    SprkFieldErrorDirective,
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

export const invalidHelperText = () => ({
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
        #textInput="ngModel"
        data-id="text-input-1"
        class="sprk-b-TextInput--error"
        aria-invalid="true"
      >
      <p sprkHelperText>
        Optional helper text, used to clarify the field's intent.
      </p>
      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  `,
});

invalidHelperText.story = {
  name: 'With Error Text',
};
