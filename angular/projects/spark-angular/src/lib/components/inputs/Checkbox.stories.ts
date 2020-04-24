import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionItemContainerComponent } from './sprk-selection-item-container/sprk-selection-item-container.component';
import { SprkSelectionContainerComponent} from './sprk-selection-container/sprk-selection-container.component';
import { SprkSelectionLabelModule } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkSelectionInputModule } from '../../directives/inputs/sprk-selection-input/sprk-selection-input.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Checkbox',
  component: SprkSelectionContainerComponent,
  subcomponents: {
    SprkSelectionItemContainerComponent,
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
    `,
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SprkLabelModule,
    SprkSelectionContainerModule,
    SprkSelectionItemContainerModule,
    SprkFieldErrorModule,
    SprkIconModule,
    SprkSelectionLabelModule,
    SprkSelectionInputModule
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label sprkLabel>
        Checkbox Group Label
      </label>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input1"
          sprkSelectionInput
          #checkboxInput1="ngModel"
          data-id="checkbox-1"
          id="checkbox-1"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-1"
          sprkSelectionLabel
        >
          Checkbox Item 1
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input2"
          sprkSelectionInput
          #checkboxInput2="ngModel"
          data-id="checkbox-2"
          id="checkbox-2"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-2"
          sprkSelectionLabel
        >
          Checkbox Item 2
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input3"
          sprkSelectionInput
          #checkboxInput3="ngModel"
          data-id="checkbox-3"
          id="checkbox-3"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-3"
          sprkSelectionLabel
        >
          Checkbox Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
  props: {
    onSelect() {
      this.checkbox_input1 === true
        ? (this.isChecked = true)
        : (this.isChecked = false);
    }
  },
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-selection-container.component',
      'sprk-selection-item-container.component',
      'sprk-selection-input.directive',
      'sprk-selection-label.directive',
      'sprk-label.directive',
    ],
  },
};

export const invalidCheckbox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label sprkLabel>
        Checkbox Group Label
      </label>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input1"
          sprkSelectionInput
          #checkboxInput1="ngModel"
          data-id="checkbox-1"
          id="checkbox-1"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-1"
          sprkSelectionLabel
        >
          Checkbox Item 1
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input2"
          sprkSelectionInput
          #checkboxInput2="ngModel"
          data-id="checkbox-2"
          id="checkbox-2"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-2"
          sprkSelectionLabel
        >
          Checkbox Item 2
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input3"
          sprkSelectionInput
          #checkboxInput3="ngModel"
          data-id="checkbox-3"
          id="checkbox-3"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-3"
          sprkSelectionLabel
        >
          Checkbox Item 3
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
  props: {
    onSelect() {
      this.checkbox_input1 === true
        ? (this.isChecked = true)
        : (this.isChecked = false);
    }
  },
});

invalidCheckbox.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-selection-container.component',
      'sprk-selection-item-container.component',
      'sprk-selection-input.directive',
      'sprk-selection-label.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledCheckbox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label class="sprk-b-Label--disabled" sprkLabel>
        Checkbox Group Label
      </label>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input1"
          sprkSelectionInput
          #checkboxInput1="ngModel"
          data-id="checkbox-1"
          id="checkbox-1"
          (change)="onSelect($event)"
          disabled
        >

        <label
          for="checkbox-1"
          class="sprk-b-Label--disabled"
          sprkSelectionLabel
        >
          Checkbox Item 1
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input2"
          sprkSelectionInput
          #checkboxInput2="ngModel"
          data-id="checkbox-2"
          id="checkbox-2"
          (change)="onSelect($event)"
          disabled
        >

        <label
          for="checkbox-2"
          class="sprk-b-Label--disabled"
          sprkSelectionLabel
        >
          Checkbox Item 2
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input3"
          sprkSelectionInput
          #checkboxInput3="ngModel"
          data-id="checkbox-3"
          id="checkbox-3"
          (change)="onSelect($event)"
          disabled
        >

        <label
          for="checkbox-3"
          class="sprk-b-Label--disabled"
          sprkSelectionLabel
        >
          Checkbox Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
  props: {
    onSelect() {
      this.checkbox_input1 === true
        ? (this.isChecked = true)
        : (this.isChecked = false);
    }
  },
});

disabledCheckbox.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-selection-container.component',
      'sprk-selection-item-container.component',
      'sprk-selection-input.directive',
      'sprk-selection-label.directive',
      'sprk-label.directive',
    ],
  },
};
