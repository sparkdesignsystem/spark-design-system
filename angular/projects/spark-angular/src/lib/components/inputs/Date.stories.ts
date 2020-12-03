import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkLabelDirective,
    SprkInputDirective,
    SprkFieldErrorDirective,
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
- The value of this field contains special characters (/)
which you may need to remove before submitting the form.
- Requires Additional Engineering:
  - Validation
  - Reformatting to date pattern MM/DD/YYYY - After valid
  input, it should reformat to add commas and decimals
  to the hundredth place.
`,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
  ],
};

export const dateInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Date Input (No Picker)</label>
      <input
        name="date_input"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="date_input"
        #dateInput="ngModel"
        sprkInput
      />
    </sprk-input-container>
  `,
});

dateInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const invalidDateInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Date Input (No Picker)</label>
      <input
        class="sprk-b-TextInput--error"
        name="date_input"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="date_input"
        #dateInput="ngModel"
        sprkInput
      />
      <span sprkFieldError>
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  `,
});

invalidDateInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledDateInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel isDisabled="true">Date Input (No Picker)</label>
      <input
        disabled
        name="date_input"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="date_input"
        #dateInput="ngModel"
        sprkInput
      />
    </sprk-input-container>
  `,
});

disabledDateInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};
