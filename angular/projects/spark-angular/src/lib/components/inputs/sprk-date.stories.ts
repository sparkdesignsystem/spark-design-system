// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
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
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Input/Date',
  component: SprkInputContainerComponent,
  subcomponents: {
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
        FormsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `
        <form (submit)="onSubmit($event)" #sampleForm="ngForm">
          ${story}
        </form>
      `,
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
- The value of this field contains special characters (/)
which you may need to remove before submitting the form.
- Requires Additional Engineering:
  - Validation
  - Reformatting to date pattern MM/DD/YYYY - After valid
  input, it should reformat to add commas and decimals
  to the hundredth place.
`,
      },
      iframeHeight: 200,
    },
  },
};

export const dateInput = () => ({
  template: `
    <sprk-input-container>
      <label for="date" sprkLabel>Date</label>
      <input
        id="date"
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

dateInput.storyName = 'Default';

dateInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const invalidDateInput = () => ({
  template: `
    <sprk-input-container>
      <label for="invalid-date" sprkLabel>Date</label>
      <input
        id="invalid-date"
        aria-describedby="date-error"
        class="sprk-b-TextInput--error"
        name="date_input"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="date_input"
        #dateInput="ngModel"
        sprkInput
      />
      <span sprkFieldError id="date-error">
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

invalidDateInput.storyName = 'Invalid';

invalidDateInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const disabledDateInput = () => ({
  template: `
    <sprk-input-container>
      <label for="disabled-date" sprkLabel isDisabled="true">Date</label>
      <input
        id="disabled-date"
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

disabledDateInput.storyName = 'Disabled';

disabledDateInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};
