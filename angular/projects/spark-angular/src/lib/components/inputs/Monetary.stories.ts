import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkIconInputContainerComponent } from './sprk-icon-input-container/sprk-icon-input-container.component';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkFormatterMonetaryModule } from '../../directives/inputs/formatters/sprk-formatter-monetary/sprk-formatter-monetary.module';

export default {
  title: 'Components/Input/Monetary',
  component: SprkIconInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkLabelDirective,
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
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
    SprkIconInputContainerModule,
    SprkFormatterMonetaryModule,
  ],
};

export const monetaryInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label class="sprk-b-Label--monetary" sprkLabel>
        Payment
      </label>
      <input
        class="sprk-b-TextInput--has-text-icon"
        name="monetary_input"
        type="text"
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkInput
      />
    </sprk-icon-input-container>
  `,
});

monetaryInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const invalidMonetaryInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label class="sprk-b-Label--monetary" sprkLabel>
        Payment
      </label>
      <input
        class="sprk-b-TextInput--has-text-icon sprk-b-TextInput--error"
        aria-invalid="true"
        name="monetary_input"
        type="text"
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkInput
      />
      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-icon-input-container>
  `,
});

invalidMonetaryInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledMonetaryInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label class="sprk-b-Label--monetary sprk-b-Label--disabled" sprkLabel>
        Payment
      </label>
      <input
        class="sprk-b-TextInput--has-text-icon"
        name="monetary_input"
        type="text"
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkInput
        disabled
      />
    </sprk-icon-input-container>
  `,
});

disabledMonetaryInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};


export const formatting = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label class="sprk-b-Label--monetary" sprkLabel>
        Payment
      </label>
      <input
        class="sprk-b-TextInput--has-text-icon"
        name="monetary_input"
        type="text"
        sprkFormatterMonetary
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkInput
      />
    </sprk-icon-input-container>
  `
});

export const validating = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label class="sprk-b-Label--monetary" sprkLabel>
        Payment
      </label>
      <input
        class="sprk-b-TextInput--has-text-icon"
        [ngClass]="{'sprk-b-TextInput--error': monetaryInput.invalid}"
        name="monetary_input"
        type="text"
        pattern="^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$"
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkInput
      />
      <div
        [hidden]="monetaryInput.valid || monetaryInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">Invalid amount.</div>
      </div>
    </sprk-icon-input-container>
  `
});

export const formattingAndValidating = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label class="sprk-b-Label--monetary" sprkLabel>
        Payment
      </label>
      <input
        class="sprk-b-TextInput--has-text-icon"
        [ngClass]="{'sprk-b-TextInput--error': monetaryInput.invalid}"
        name="monetary_input"
        type="text"
        pattern="^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$"
        sprkFormatterMonetary
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkInput
      />
      <div
        [hidden]="monetaryInput.valid || monetaryInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">Invalid amount.</div>
      </div>
    </sprk-icon-input-container>
  `
});
