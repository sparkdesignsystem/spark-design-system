// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Input/Phone',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkLabelDirective,
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
- The value of this field contains special
characters (parenthesis and -) which you may
need to remove before submitting the form.
- Requires Additional Engineering:
  - Validation
  - Reformatting to phone number pattern
  (###) ###-#### - After valid input, it
  should reformat to add commas and decimals
  to the hundredth place.
    `,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const phoneInput = () => ({
  template: `
    <sprk-input-container>
      <label for="phone" sprkLabel>Phone Number</label>
      <input
        id="phone"
        name="phone_input"
        type="tel"
        placeholder="(000) 000-0000"
        [(ngModel)]="phone_input"
        #phoneInput="ngModel"
        sprkInput
      />
    </sprk-input-container>
  `,
});

phoneInput.storyName = 'Default';

phoneInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const invalidPhoneInput = () => ({
  template: `
    <sprk-input-container>
      <label for="invalid-phone" sprkLabel>Phone Number</label>
      <input
        id="invalid-phone"
        aria-describedby="phone-error"
        class="sprk-b-TextInput--error"
        aria-invalid="true"
        name="phone_input"
        type="tel"
        placeholder="(000) 000-0000"
        [(ngModel)]="phone_input"
        #phoneInput="ngModel"
        sprkInput
      />
      <span sprkFieldError id="phone-error">
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

invalidPhoneInput.storyName = 'Invalid';

invalidPhoneInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const disabledPhoneInput = () => ({
  template: `
    <sprk-input-container>
      <label
        for="disabled-phone"
        isDisabled="true"
        sprkLabel
      >
        Phone Number
      </label>
      <input
        id="disabled-phone"
        name="phone_input"
        type="tel"
        placeholder="(000) 000-0000"
        [(ngModel)]="phone_input"
        #phoneInput="ngModel"
        sprkInput
        disabled
      />
    </sprk-input-container>
  `,
});

disabledPhoneInput.storyName = 'Disabled';

disabledPhoneInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};
