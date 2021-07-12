// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Input/Monetary',
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
        SprkIconInputContainerModule,
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
- In order to use Angular form validation on these inputs, add a pattern
attribute containing a regular expression to the input.
- Formatting can be turned on by adding the \`sprkFormatterMonetary\`
directive to the input. Formatting is run on blur to add commas and
decimals to the hundredth place.
- When using \`sprkFormatterMonetary\`, fields should always have
\`type="text"\`, NOT \`type="number"\`. Formatted currency (e.g.
$1,234.56) is non-numeric.
- The value of this field may contain special characters ($ ,) which
you may need to remove before submitting the form.
    `,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const monetaryInput = () => ({
  template: `
    <sprk-input-container>
      <div class="
        sprk-b-InputContainer__icon-container
        sprk-b-TextInputIconContainer--has-text-icon"
      >
        <label for="monetary" isMonetary="true" sprkLabel>
          Payment
        </label>
        <input
          id="monetary"
          class="sprk-b-TextInput--has-text-icon"
          name="monetary_input"
          type="text"
          placeholder="0.00"
          [(ngModel)]="monetary_input"
          #monetaryInput="ngModel"
          sprkInput
        />
      </div>
    </sprk-input-container>
  `,
});

monetaryInput.storyName = 'Default';

monetaryInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const invalidMonetaryInput = () => ({
  template: `
    <sprk-input-container>
      <div class="
        sprk-b-InputContainer__icon-container
        sprk-b-TextInputIconContainer--has-text-icon"
      >
        <label for="invalid-monetary" isMonetary="true" sprkLabel>
          Payment
        </label>
        <input
          aria-describedby="monetary-error"
          id="invalid-monetary"
          class="sprk-b-TextInput--has-text-icon sprk-b-TextInput--error"
          aria-invalid="true"
          name="monetary_input"
          placeholder="0.00"
          type="text"
          [(ngModel)]="monetary_input"
          #monetaryInput="ngModel"
          sprkInput
        />
      </div>
      <span sprkFieldError id="monetary-error">
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

invalidMonetaryInput.storyName = 'Invalid';

invalidMonetaryInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const disabledMonetaryInput = () => ({
  template: `
    <sprk-input-container>
      <div class="
        sprk-b-InputContainer__icon-container
        sprk-b-TextInputIconContainer--has-text-icon"
      >
        <label for="disabled-monetary" isMonetary="true" isDisabled="true" sprkLabel>
          Payment
        </label>
        <input
          id="disabled-monetary"
          class="sprk-b-TextInput--has-text-icon"
          name="monetary_input"
          placeholder="0.00"
          type="text"
          [(ngModel)]="monetary_input"
          #monetaryInput="ngModel"
          sprkInput
          disabled
        />
      </div>
    </sprk-input-container>
  `,
});

disabledMonetaryInput.storyName = 'Disabled';

disabledMonetaryInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const legacyStory = () => ({
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label for="legacy-monetary" class="sprk-b-Label--monetary" sprkLabel>
        Payment
      </label>
      <input
        id="legacy-monetary"
        class="sprk-b-TextInput--has-text-icon"
        name="monetary_input"
        placeholder="0.00"
        type="text"
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkInput
      />
    </sprk-icon-input-container>
  `,
});

legacyStory.storyName = 'Legacy (Deprecated)';

legacyStory.parameters = {
  jest: [
    'sprk-icon-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const legacyInvalidMonetaryInput = () => ({
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label for="legacy-invalid-monetary" class="sprk-b-Label--monetary" sprkLabel>
        Payment
      </label>
      <input
        id="legacy-invalid-monetary"
        aria-describedby="legacy-monetary-error"
        class="sprk-b-TextInput--has-text-icon sprk-b-TextInput--error"
        aria-invalid="true"
        placeholder="0.00"
        name="monetary_input"
        type="text"
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkInput
      />
      <span sprkFieldError id="legacy-monetary-error">
        <sprk-icon
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-icon-input-container>
  `,
});

legacyInvalidMonetaryInput.storyName = 'Legacy Invalid (Deprecated)';

legacyInvalidMonetaryInput.parameters = {
  jest: [
    'sprk-icon-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const legacyDisabledMonetaryInput = () => ({
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label
        for="legacy-disabled-monetary"
        class="sprk-b-Label--monetary sprk-b-Label--disabled"
        sprkLabel
      >
        Payment
      </label>
      <input
        id="legacy-disabled-monetary"
        class="sprk-b-TextInput--has-text-icon"
        name="monetary_input"
        placeholder="0.00"
        type="text"
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkInput
        disabled
      />
    </sprk-icon-input-container>
  `,
});

legacyDisabledMonetaryInput.storyName = 'Legacy Disabled (Deprecated)';

legacyDisabledMonetaryInput.parameters = {
  jest: [
    'sprk-icon-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};
