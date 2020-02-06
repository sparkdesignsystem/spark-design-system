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
- The value of this field may contain special characters
(,) which you may need to remove before submitting the form.
- Requires Additional Engineering:
  - Validation
  - Reformatting to monetary pattern (##.##) - On blur,
  it should reformat to add commas and decimals to the hundredth place.
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
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-icon-input-container>
  `,
});

invalidMonetaryInput.story = {
  name: 'Invalid',
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
};

