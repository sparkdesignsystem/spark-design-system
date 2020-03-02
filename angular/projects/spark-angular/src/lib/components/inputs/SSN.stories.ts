import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionItemContainerComponent } from './sprk-selection-item-container/sprk-selection-item-container.component';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkSelectionInputDirective } from '../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkSelectionLabelDirective } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/SSN',
  component: SparkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkSelectionItemContainerComponent,
    SprkLabelDirective,
    SprkSelectionInputDirective,
    SprkSelectionLabelDirective,
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
    SprkSelectionContainerModule,
    SprkSelectionItemContainerModule,
  ],
};

export const SSNInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label for="ssn-input" sprkLabel>SSN Input</label>
      <input
        [type]="ssnType"
        placeholder="000-00-0000"
        name="ssn_input"
        [(ngModel)]="ssn_input"
        #ssnInput="ngModel"
        data-id="ssn-1"
        id="ssn-input"
        sprkInput
      >
      <sprk-selection-item-container
        additionalClasses="sprk-b-InputContainer__visibility-toggle"
      >
        <input
          type="checkbox"
          sprkSelectionInput
          (click)="toggleSSNType()"
          data-id="ssn-reveal-3"
          id="show-ssn"
        >
        <label for="show-ssn" sprkSelectionLabel>Show SSN</label>
      </sprk-selection-item-container>
    </sprk-input-container>
  `,
});

SSNInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-selection-item-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const invalidSSNInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label for="ssn-input" sprkLabel>SSN Input</label>
      <input
        [type]="ssnType"
        placeholder="000-00-0000"
        name="ssn_input"
        [(ngModel)]="ssn_input"
        #ssnInput="ngModel"
        data-id="ssn-1"
        id="ssn-input"
        sprkInput
        class="sprk-b-TextInput--error"
        aria-invalid="true"
      >
      <sprk-selection-item-container
        additionalClasses="sprk-b-InputContainer__visibility-toggle"
      >
        <input
          type="checkbox"
          sprkSelectionInput
          (click)="toggleSSNType()"
          data-id="ssn-reveal-3"
          id="show-ssn"
        >
        <label for="show-ssn" sprkSelectionLabel>Show SSN</label>
      </sprk-selection-item-container>
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

invalidSSNInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-selection-item-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const disabledSSNInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label class="sprk-b-Label--disabled" for="ssn-input" sprkLabel>SSN Input</label>
      <input
        [type]="ssnType"
        placeholder="000-00-0000"
        name="ssn_input"
        [(ngModel)]="ssn_input"
        #ssnInput="ngModel"
        data-id="ssn-1"
        id="ssn-input"
        sprkInput
        disabled
      >
      <sprk-selection-item-container
        additionalClasses="sprk-b-InputContainer__visibility-toggle"
      >
        <input
          type="checkbox"
          sprkSelectionInput
          (click)="toggleSSNType()"
          data-id="ssn-reveal-3"
          id="show-ssn"
          disabled
        >
        <label class="sprk-b-Label--disabled" for="show-ssn" sprkSelectionLabel>Show SSN</label>
      </sprk-selection-item-container>
      <div
        [hidden]="ssnInput.valid || ssnInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        >
        </sprk-icon>
        <div class="sprk-b-ErrorText">Invalid SSN.</div>
      </div>
    </sprk-input-container>
  `,
});

disabledSSNInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-selection-item-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};
