import { storyWrapper } from '../../../../../../../.storybook/helpers/storyWrapper';
import { SprkLabelModule } from '../../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkFieldErrorModule } from '../../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkHelperTextDirective } from '../../../directives/inputs/sprk-helper-text/sprk-helper-text.directive';
import { SprkHelperTextModule } from '../../../directives/inputs/sprk-helper-text/sprk-helper-text.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkRadioGroupComponent } from '../sprk-radio-group/sprk-radio-group.component';
import { SprkRadioComponent } from './sprk-radio.component';
import { SprkRadioGroupModule } from '../sprk-radio-group/sprk-radio-group.module';
import { SprkRadioModule } from './sprk-radio.module';
import { SprkSelectionContainerModule } from '../sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from '../sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionContainerComponent } from '../sprk-selection-container/sprk-selection-container.component';
import { SprkSelectionInputModule } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.module';
import { SprkSelectionInputDirective } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkSelectionLabelModule } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkSelectionLabelDirective } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkIconModule } from '../../sprk-icon/sprk-icon.module';

export default {
  title: 'Components/Input/Radio',
  component: SprkRadioComponent,
  subcomponents: {
    SprkRadioGroupComponent,
    SprkLabelDirective,
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
    SprkRadioGroupModule,
    SprkRadioModule,
    SprkLabelModule,
    SprkFieldErrorModule,
    SprkHelperTextModule,
    SprkSelectionItemContainerModule,
    SprkSelectionInputModule,
    SprkSelectionContainerModule,
    SprkSelectionLabelModule,
    SprkIconModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
   <sprk-radio-group>
     <sprk-radio>Item 1</sprk-radio>
     <sprk-radio>Item 2</sprk-radio>
     <sprk-radio>Item 3</sprk-radio>
   </sprk-radio-group>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-radio.directive', 'sprk-label.directive'],
  },
};

export const invalidRadio = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-radio-group>
      <label sprkLabel>Radio Group Label</label>
      <sprk-radio>Item 1</sprk-radio>
      <sprk-radio>Item 2</sprk-radio>
      <sprk-radio>Item 3</sprk-radio>

      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </span>

      <p sprkHelperText>
        Optional helper text, used to clarify the
        field's intent.
      </p>
    </sprk-radio-group>
  `,
});

invalidRadio.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-radio.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledRadioButton = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-radio-group>
      <sprk-radio>Item 1</sprk-radio>
      <sprk-radio>Item 2</sprk-radio>
      <sprk-radio>Item 3</sprk-radio>
    </sprk-radio-group>
  `,
});

disabledRadioButton.story = {
  name: 'Disabled',
  parameters: {
    jest: ['sprk-radio.directive', 'sprk-label.directive'],
  },
};

export const huge = () => ({
  moduleMetadata: modules,
  template: `
   <sprk-radio-group>
    <sprk-radio>Item 1</sprk-radio>
    <sprk-radio>Item 2</sprk-radio>
    <sprk-radio>Item 3</sprk-radio>
   </sprk-radio-group>
  `,
});

huge.story = {
  parameters: {
    jest: ['sprk-radio.directive', 'sprk-label.directive'],
  },
};

export const hugeInvalid = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-radio-group>
      <sprk-radio>Item 1</sprk-radio>
       <sprk-radio>Item 2</sprk-radio>
       <sprk-radio>Item 3</sprk-radio>
    </sprk-radio-group>

    <span sprkFieldError>
      <sprk-icon
        iconType="exclamation-filled-small"
        additionalClasses="sprk-b-ErrorIcon"
      ></sprk-icon>
      <div class="sprk-b-ErrorText">
        There is an error on this field.
      </div>
    </span>
  `,
});

hugeInvalid.story = {
  parameters: {
    jest: [
      'sprk-radio.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const hugeDisabled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-radio-group>
      <sprk-radio>Item 1</sprk-radio>
      <sprk-radio>Item 2</sprk-radio>
      <sprk-radio>Item 3</sprk-radio>
    </sprk-radio-group>
  `,
});

hugeDisabled.story = {
  parameters: {
    jest: ['sprk-radio.directive', 'sprk-label.directive'],
  },
};

export const hugeLayoutTwo = () => ({
  moduleMetadata: modules,
  template: `
   <sprk-radio-group>
     <sprk-radio>Item 1</sprk-radio>
     <sprk-radio>Item 2</sprk-radio>
     <sprk-radio>Item 3</sprk-radio>
   </sprk-radio-group>
  `,
});

hugeLayoutTwo.story = {
  name: 'Huge Layout - Two',
  parameters: {
    jest: ['sprk-radio.directive', 'sprk-label.directive'],
  },
};

export const hugeLayoutFour = () => ({
  moduleMetadata: modules,
  template: `
   <sprk-radio-group>
     <sprk-radio>Item 1</sprk-radio>
     <sprk-radio>Item 2</sprk-radio>
     <sprk-radio>Item 3</sprk-radio>
   </sprk-radio-group>
  `,
});

hugeLayoutFour.story = {
  name: 'Huge Layout - Four',
  parameters: {
    jest: ['sprk-radio.directive', 'sprk-label.directive'],
  },
};

export const hugeLayoutFive = () => ({
  moduleMetadata: modules,
  template: `
   <sprk-radio-group>
     <sprk-radio>Item 1</sprk-radio>
     <sprk-radio>Item 2</sprk-radio>
     <sprk-radio>Item 3</sprk-radio>
   </sprk-radio-group>
  `,
});

hugeLayoutFive.story = {
  name: 'Huge Layout - Five',
  parameters: {
    jest: ['sprk-radio.directive', 'sprk-label.directive'],
  },
};

export const hugeLayoutSix = () => ({
  moduleMetadata: modules,
  template: `
   <sprk-radio-group>
     <sprk-radio>Item 1</sprk-radio>
     <sprk-radio>Item 2</sprk-radio>
     <sprk-radio>Item 3</sprk-radio>
   </sprk-radio-group>
  `,
});

hugeLayoutSix.story = {
  name: 'Huge Layout - Six',
  parameters: {
    jest: ['sprk-radio.directive', 'sprk-label.directive'],
  },
};

export const legacyRadio = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="1"
          name="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
          #radioInput="ngModel"
          data-id="radio-1"
          id="radio-1"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-1"
          sprkSelectionLabel
        >
          Item 1
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="2"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-2"
          id="radio-2"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-2"
          sprkSelectionLabel
        >
          Item 2
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="3"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-3"
          id="radio-3"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-3"
          sprkSelectionLabel
        >
          Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
});

legacyRadio.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: [
      'sprk-selection-item-container.component',
      'sprk-selection-container.component',
      'sprk-selection-input.directive',
      'sprk-selection-label.directive',
    ],
  },
};

export const legacyInvalidRadio = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="1"
          name="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
          #radioInput="ngModel"
          data-id="radio-1"
          id="radio-1"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-1"
          sprkSelectionLabel
        >
          Item 1
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="2"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-2"
          id="radio-2"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-2"
          sprkSelectionLabel
        >
          Item 2
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="3"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-3"
          id="radio-3"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-3"
          sprkSelectionLabel
        >
          Item 3
        </label>
      </sprk-selection-item-container>
      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-selection-container>
  `,
});

legacyInvalidRadio.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: [
      'sprk-selection-item-container.component',
      'sprk-selection-container.component',
      'sprk-selection-input.directive',
      'sprk-selection-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const legacyDisabledRadio = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label class="sprk-b-Label--disabled" sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="1"
          name="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
          #radioInput="ngModel"
          data-id="radio-1"
          id="radio-1"
          (change)="onRadioSelect($event)"
          disabled
        >
        <label
          class="sprk-b-Label--disabled"
          for="radio-1"
          sprkSelectionLabel
        >
          Item 1
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="2"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-2"
          id="radio-2"
          (change)="onRadioSelect($event)"
          disabled
        >
        <label
          class="sprk-b-Label--disabled"
          for="radio-2"
          sprkSelectionLabel
        >
          Item 2
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="3"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-3"
          id="radio-3"
          (change)="onRadioSelect($event)"
          disabled
        >
        <label
          class="sprk-b-Label--disabled"
          for="radio-3"
          sprkSelectionLabel
        >
          Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
});

legacyDisabledRadio.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: [
      'sprk-selection-item-container.component',
      'sprk-selection-container.component',
      'sprk-selection-input.directive',
      'sprk-selection-label.directive',
    ],
  },
};
