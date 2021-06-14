import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkSelectDirective } from '../../directives/inputs/sprk-select/sprk-select.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkSelectModule } from '../../directives/inputs/sprk-select/sprk-select.module';
import { SprkHugeInputContainerModule } from './sprk-huge-input-container/sprk-huge-input-container.module';
import { SprkHugeInputContainerComponent } from './sprk-huge-input-container/sprk-huge-input-container.component';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Input/Select',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkSelectDirective,
    SprkLabelDirective,
    SprkIconComponent,
    SprkFieldErrorDirective,
    SprkHugeInputContainerComponent,
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
    docs: {
      description: {
        component: `
${markdownDocumentationLinkBuilder('input')}
    `,
      },
      iframeHeight: 200,
    },
  },
};

const modules = {
  imports: [
    SprkInputContainerModule,
    SprkLabelModule,
    SprkIconModule,
    SprkSelectModule,
    SprkFieldErrorModule,
    SprkHugeInputContainerModule,
    SprkFieldErrorModule,
    SprkInputModule,
    FormsModule,
  ],
};

export const selectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel for="select-normal-1">Select Box Label</label>
      <select
        id="select-normal-1"
        idString="select-1"
        sprkSelect
      >
        <option value="none">Please choose...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <sprk-icon
        iconName="chevron-down"
        additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
        ariaHidden="true"
      ></sprk-icon>
    </sprk-input-container>
  `,
});

selectBox.storyName = 'Default';

selectBox.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-select.directive',
    'sprk-label.directive',
  ],
};

export const invalidSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel for="select-error-1">Select Box Label</label>
      <select
        class="sprk-b-Select--error"
        id="select-error-1"
        idString="select-error-1"
        sprkSelect
        aria-invalid="true"
        aria-describedby="select-error"
      >
        <option value="none">Please choose...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <sprk-icon
        iconName="chevron-down"
        additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
        ariaHidden="true"
      ></sprk-icon>
      <span sprkFieldError id="select-error">
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

invalidSelectBox.storyName = 'Invalid';

invalidSelectBox.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-select.directive',
    'sprk-label.directive',
  ],
};

export const disabledSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label isDisabled="true" sprkLabel for="select-normal-1">Select Box Label</label>
      <select
        id="select-normal-1"
        idString="select-1"
        sprkSelect
        disabled
      >
        <option value="none">Please choose...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <sprk-icon
        iconName="chevron-down"
        additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
        ariaHidden="true"
      ></sprk-icon>
    </sprk-input-container>
  `,
});

disabledSelectBox.storyName = 'Disabled';

disabledSelectBox.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-select.directive',
    'sprk-label.directive',
  ],
};

export const hugeSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container variant="huge">
      <select
        id="select-huge-1"
        idString="select-huge-1"
        sprkSelect
        variant="huge"
      >
        <option
          value=""
          disabled
          selected
          hidden
        ></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <label sprkLabel for="select-huge-1">Huge Select Box Label</label>
      <sprk-icon
        iconName="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
        ariaHidden="true"
      ></sprk-icon>
    </sprk-input-container>
  `,
});

hugeSelectBox.storyName = 'Huge';

hugeSelectBox.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-select.directive',
    'sprk-label.directive',
  ],
};

export const invalidHugeSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container variant="huge">
      <select
        id="huge-select-error-1"
        idString="select-huge-invalid"
        sprkSelect
        variant="huge"
        class="sprk-b-Select--error"
        aria-invalid="true"
        aria-describedby="huge-select-error"
      >
        <option
          value=""
          disabled
          selected
          hidden
        ></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <label sprkLabel for="huge-select-error-1">Huge Select Box Label</label>
      <sprk-icon
        iconName="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
        ariaHidden="true"
      ></sprk-icon>
      <span sprkFieldError id="huge-select-error">
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

invalidHugeSelectBox.storyName = 'Huge Invalid';

invalidHugeSelectBox.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-select.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const disabledHugeSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container variant="huge">
      <select
        id="select-huge-disabled"
        idString="select-huge-disabled"
        variant="huge"
        sprkSelect
        disabled
      >
        <option
          value=""
          disabled
          selected
          hidden
        ></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <label sprkLabel isDisabled="true" for="select-huge-disabled">Huge Select Box Label</label>
      <sprk-icon
        iconName="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
        ariaHidden="true"
      ></sprk-icon>
    </sprk-input-container>
  `,
});

disabledHugeSelectBox.storyName = 'Huge Disabled';

disabledHugeSelectBox.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-select.directive',
    'sprk-label.directive',
  ],
};

export const legacyHugeSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <select
        id="select-huge-1"
        idString="select-huge-1"
        sprkInput
      >
        <option
          value=""
          disabled
          selected
          hidden
        ></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <label sprkLabel for="select-huge-1">Huge Select Box Label</label>
      <sprk-icon
        iconType="chevron-down"
        additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
        ariaHidden="true"
      ></sprk-icon>
    </sprk-huge-input-container>
  `,
});

legacyHugeSelectBox.storyName = 'Legacy Huge (Deprecated)';

legacyHugeSelectBox.parameters = {
  jest: [
    'sprk-huge-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};

export const legacyInvalidHugeSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <select
        id="select-huge-1"
        idString="select-huge-1"
        sprkInput
        class="sprk-b-Select--error"
        aria-invalid="true"
        aria-describedby="legacy-huge-select-error"
      >
        <option
          value=""
          disabled
          selected
          hidden
        ></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <label sprkLabel for="select-huge-1">Huge Select Box Label</label>
      <sprk-icon
        iconType="chevron-down"
        additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
        ariaHidden="true"
      ></sprk-icon>
      <span sprkFieldError id="legacy-huge-select-error">
        <sprk-icon
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-huge-input-container>
  `,
});

legacyInvalidHugeSelectBox.storyName = 'Legacy Huge Invalid (Deprecated)';

legacyInvalidHugeSelectBox.parameters = {
  jest: [
    'sprk-huge-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const legacyDisabledHugeSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <select
        id="select-huge-1"
        idString="select-huge-1"
        sprkInput
        disabled
      >
        <option
          value=""
          disabled
          selected
          hidden
        ></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <label sprkLabel class="sprk-b-Label--disabled" for="select-huge-1">Huge Select Box Label</label>
      <sprk-icon
        iconType="chevron-down"
        additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
        ariaHidden="true"
      ></sprk-icon>
    </sprk-huge-input-container>
  `,
});

legacyDisabledHugeSelectBox.storyName = 'Legacy Huge Disabled (Deprecated)';

legacyDisabledHugeSelectBox.parameters = {
  jest: [
    'sprk-huge-input-container.component',
    'sprk-input.directive',
    'sprk-label.directive',
  ],
};
