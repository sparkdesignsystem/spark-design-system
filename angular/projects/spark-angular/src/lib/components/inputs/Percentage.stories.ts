import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
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
    SprkIconInputContainerModule,
  ],
};

export const percentageInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <div class="
        sprk-b-InputContainer__icon-container
        sprk-b-InputContainer__icon-container--narrow"
      >
        <label sprkLabel>Percentage</label>
        <sprk-icon
          iconName="percent"
          additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
          sprk-input-icon
        ></sprk-icon>
        <input
          class="sprk-b-InputContainer__input--has-icon-right"
          name="percentage"
          type="tel"
          sprkInput
        />
      </div>
    </sprk-input-container>
  `,
});

percentageInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const invalidPercentageInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <div class="
        sprk-b-InputContainer__icon-container
        sprk-b-InputContainer__icon-container--narrow"
      >      
        <label sprkLabel>Percentage</label>
        <sprk-icon
          iconName="percent"
          additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
          aria-invalid="true"
          sprk-input-icon
        ></sprk-icon>
        <input
          class="sprk-b-InputContainer__input--has-icon-right sprk-b-TextInput--error"
          name="percentage"
          type="tel"
          sprkInput
        />
      </div>
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

invalidPercentageInput.story = {
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

export const disabledPercentageInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <div class="
        sprk-b-InputContainer__icon-container
        sprk-b-InputContainer__icon-container--narrow"
      >
        <label isDisabled="true" sprkLabel>Percentage</label>
        <sprk-icon
          iconName="percent"
          additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
          sprk-input-icon
        ></sprk-icon>
        <input
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

disabledPercentageInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const legacyStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
      <label sprkLabel>Percentage</label>
      <sprk-icon
        iconName="percent"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
        sprk-input-icon
      ></sprk-icon>
      <input
        class="sprk-b-InputContainer__input--has-icon-right"
        name="percentage"
        type="tel"
        sprkInput
      />
    </sprk-icon-input-container>
  `,
});

legacyStory.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const legacyInvalidPercentageInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
      <label sprkLabel>Percentage</label>
      <sprk-icon
        iconName="percent"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
        aria-invalid="true"
        sprk-input-icon
      ></sprk-icon>
      <input
        class="sprk-b-InputContainer__input--has-icon-right sprk-b-TextInput--error"
        name="percentage"
        type="tel"
        sprkInput
      />
      <span sprkFieldError>
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-icon-input-container>
  `,
});

legacyInvalidPercentageInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const legacyDisabledPercentageInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
      <label class="sprk-b-Label--disabled" sprkLabel>Percentage</label>
      <sprk-icon
        iconName="percent"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
        sprk-input-icon
      ></sprk-icon>
      <input
        class="sprk-b-InputContainer__input--has-icon-right"
        name="percentage"
        type="tel"
        sprkInput
        disabled
      />
    </sprk-icon-input-container>
  `,
});

legacyDisabledPercentageInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: [
      'sprk-icon-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};
