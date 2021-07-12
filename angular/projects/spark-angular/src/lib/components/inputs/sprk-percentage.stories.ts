// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Input/Percentage',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkLabelDirective,
    SprkIconComponent,
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
    `,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const percentageInput = () => ({
  template: `
    <sprk-input-container>
      <div class="
        sprk-b-InputContainer__icon-container
        sprk-b-InputContainer__icon-container--narrow"
      >
        <label for="percentage" sprkLabel>Percentage</label>
        <sprk-icon
          iconName="percent"
          additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="percentage"
          class="sprk-b-InputContainer__input--has-icon-right"
          name="percentage"
          type="tel"
          sprkInput
        />
      </div>
    </sprk-input-container>
  `,
});

percentageInput.storyName = 'Default';

percentageInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const invalidPercentageInput = () => ({
  template: `
    <sprk-input-container>
      <div class="
        sprk-b-InputContainer__icon-container
        sprk-b-InputContainer__icon-container--narrow"
      >
        <label for="invalid-percentage" sprkLabel>Percentage</label>
        <sprk-icon
          iconName="percent"
          additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="invalid-percentage"
          aria-describedby="percentage-error"
          class="sprk-b-InputContainer__input--has-icon-right sprk-b-TextInput--error"
          name="percentage"
          type="tel"
          sprkInput
          aria-invalid="true"
        />
      </div>
      <span sprkFieldError id="percentage-error">
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

invalidPercentageInput.storyName = 'Invalid';

invalidPercentageInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const disabledPercentageInput = () => ({
  template: `
    <sprk-input-container>
      <div class="
        sprk-b-InputContainer__icon-container
        sprk-b-InputContainer__icon-container--narrow"
      >
        <label for="disabled-percentage" isDisabled="true" sprkLabel>Percentage</label>
        <sprk-icon
          iconName="percent"
          additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="disabled-percentage"
          class="sprk-b-InputContainer__input--has-icon-right"
          name="percentage"
          type="tel"
          sprkInput
          disabled
        />
      </div>
    </sprk-input-container>
  `,
});

disabledPercentageInput.storyName = 'Disabled';

disabledPercentageInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const legacyStory = () => ({
  template: `
    <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
      <label for="legacy-percentage" sprkLabel>Percentage</label>
      <sprk-icon
        iconType="percent"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
        sprk-input-icon
        ariaHidden="true"
      ></sprk-icon>
      <input
        id="legacy-percentage"
        class="sprk-b-InputContainer__input--has-icon-right"
        name="percentage"
        type="tel"
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

export const legacyInvalidPercentageInput = () => ({
  template: `
    <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
      <label for="legacy-invalid-percentage" sprkLabel>Percentage</label>
      <sprk-icon
        iconType="percent"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
        sprk-input-icon
        ariaHidden="true"
      ></sprk-icon>
      <input
        id="legacy-invalid-percentage"
        aria-describedby="legacy-percentage-error"
        class="sprk-b-InputContainer__input--has-icon-right sprk-b-TextInput--error"
        name="percentage"
        aria-invalid="true"
        type="tel"
        sprkInput
      />
      <span sprkFieldError id="legacy-percentage-error">
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

legacyInvalidPercentageInput.storyName = 'Legacy Invalid (Deprecated)';

legacyInvalidPercentageInput.parameters = {
  jest: [
    'sprk-icon-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const legacyDisabledPercentageInput = () => ({
  template: `
    <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
      <label
        for="legacy-disabled-percentage"
        class="sprk-b-Label--disabled"
        sprkLabel
      >
        Percentage
      </label>
      <sprk-icon
        iconType="percent"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
        sprk-input-icon
        ariaHidden="true"
      ></sprk-icon>
      <input
        id="legacy-disabled-percentage"
        class="sprk-b-InputContainer__input--has-icon-right"
        name="percentage"
        type="tel"
        sprkInput
        disabled
      />
    </sprk-icon-input-container>
  `,
});

legacyDisabledPercentageInput.storyName = 'Legacy Disabled (Deprecated)';

legacyDisabledPercentageInput.parameters = {
  jest: [
    'sprk-icon-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};
