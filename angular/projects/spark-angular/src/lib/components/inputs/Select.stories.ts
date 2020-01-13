import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';

export default {
  title: 'Components/Input/Select',
  component: SparkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkLabelDirective,
    SprkIconComponent,
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
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SparkInputContainerModule,
    SprkIconInputContainerModule,
    SprkLabelModule,
    SprkIconModule,
    SprkFieldErrorModule
  ],
};

export const selectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <select
        class="sprk-b-Select"
        id="select-normal-1"
        aria-describedby="select-normal--error-container"
        data-id="select-1"
        sprkInput
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
        iconType="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
      ></sprk-icon>
      <label sprkLabel for="select-normal-1">Select Box Label</label>
    </sprk-input-container>
  `,
});

selectBox.story = {
  name: 'Default',
};

export const invalidSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <select
        class="sprk-b-Select sprk-b-Select--error"
        id="select-normal-1"
        aria-describedby="select-normal--error-container"
        data-id="select-1"
        sprkInput
        aria-invalid="true"
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
        iconType="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
      ></sprk-icon>
      <label sprkLabel for="select-normal-1">Select Box Label</label>
      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  `,
});

invalidSelectBox.story = {
  name: 'Invalid',
};

export const disabledSelectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <select
        class="sprk-b-Select"
        id="select-normal-1"
        aria-describedby="select-normal--error-container"
        data-id="select-1"
        sprkInput
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
        iconType="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
      ></sprk-icon>
      <label class="sprk-b-Label--disabled" sprkLabel for="select-normal-1">Select Box Label</label>
    </sprk-input-container>
  `,
});

disabledSelectBox.story = {
  name: 'Disabled',
};
