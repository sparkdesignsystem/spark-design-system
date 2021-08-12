// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkCheckboxItemModule } from './sprk-checkbox-item/sprk-checkbox-item.module';
import { SprkCheckboxItemComponent } from './sprk-checkbox-item/sprk-checkbox-item.component';
import { SprkCheckboxLabelModule } from '../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.module';
import { SprkCheckboxLabelDirective } from '../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.directive';
import { SprkCheckboxInputModule } from '../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.module';
import { SprkCheckboxInputDirective } from '../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Input/SSN',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkLabelDirective,
    SprkCheckboxItemComponent,
    SprkCheckboxInputDirective,
    SprkCheckboxLabelDirective,
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
        SprkCheckboxInputModule,
        SprkCheckboxLabelModule,
        SprkCheckboxItemModule,
        FormsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div>
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
- The value of this field contains special characters
(-) which you may need to remove before submitting the form.
- Requires Additional Engineering:
  - Show/Hide Functionality - Create a function that toggles
  the \`type\` attribute of the input between \`text\` and \`password\`.
  - Validation
  - Reformatting to SSN pattern (###-##-####) - After valid
  input, it should reformat to having the first three numbers,
  a dash, the next two numbers, a dash, and the last four numbers.
    `,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const SSNInput = () => ({
  template: `
    <sprk-input-container>
      <label for="ssn-input" sprkLabel>SSN Input</label>
      <input
        [type]="ssnType"
        placeholder="000-00-0000"
        name="ssn_input"
        [(ngModel)]="ssn_input"
        #ssnInput="ngModel"
        idString="ssn-1"
        id="ssn-input"
        sprkInput
      >
      <sprk-checkbox-item
        isVisibilityToggle="true"
      >
        <input
          type="checkbox"
          sprkCheckboxInput
          (click)="toggleSSNType()"
          idString="ssn-reveal-3"
          id="show-ssn"
        >
        <label for="show-ssn" sprkCheckboxLabel>Show SSN</label>
      </sprk-checkbox-item>
    </sprk-input-container>
  `,
});

SSNInput.storyName = 'Default';

SSNInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-checkbox-item.component',
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const invalidSSNInput = () => ({
  template: `
    <sprk-input-container>
      <label for="ssn-input" sprkLabel>SSN Input</label>
      <input
        [type]="ssnType"
        placeholder="000-00-0000"
        name="ssn_input"
        [(ngModel)]="ssn_input"
        #ssnInput="ngModel"
        idString="ssn-1"
        id="ssn-input"
        sprkInput
        class="sprk-b-TextInput--error"
        aria-invalid="true"
        aria-describedby="ssn-error"
      >
      <sprk-checkbox-item
        isVisibilityToggle="true"
      >
        <input
          type="checkbox"
          sprkCheckboxInput
          (click)="toggleSSNType()"
          idString="ssn-reveal-3"
          id="show-ssn"
        >
        <label for="show-ssn" sprkCheckboxLabel>Show SSN</label>
      </sprk-checkbox-item>
      <span sprkFieldError id="ssn-error">
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

invalidSSNInput.storyName = 'Invalid';

invalidSSNInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-checkbox-item.component',
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const disabledSSNInput = () => ({
  template: `
    <sprk-input-container>
      <label isDisabled="true" for="ssn-input" sprkLabel>SSN Input</label>
      <input
        [type]="ssnType"
        placeholder="000-00-0000"
        name="ssn_input"
        [(ngModel)]="ssn_input"
        #ssnInput="ngModel"
        idString="ssn-1"
        id="ssn-input"
        sprkInput
        disabled
      >
      <sprk-checkbox-item
        isVisibilityToggle="true"
      >
        <input
          type="checkbox"
          sprkCheckboxInput
          (click)="toggleSSNType()"
          idString="ssn-reveal-3"
          id="show-ssn"
          disabled
        >
        <label isDisabled="true" for="show-ssn" sprkCheckboxLabel>Show SSN</label>
      </sprk-checkbox-item>
    </sprk-input-container>
  `,
});

disabledSSNInput.storyName = 'Disabled';

disabledSSNInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-checkbox-item.component',
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};
