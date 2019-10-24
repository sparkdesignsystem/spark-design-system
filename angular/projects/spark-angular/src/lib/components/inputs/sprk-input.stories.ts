import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkHugeInputContainerModule } from './sprk-huge-input-container/sprk-huge-input-container.module';
import { SprkIconModule } from './../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';

export default {
  title: 'Components|Inputs',
};

const modules = {
  imports: [
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkHugeInputContainerModule,
    SprkIconModule,
    SprkSelectionContainerModule,
    SprkSelectionItemContainerModule,
  ],
};

export const textInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Text Input Label</label>
      <input
        name="text_input"
        type="text"
        [(ngModel)]="text_input"
        required
        #textInput="ngModel"
        sprkInput
      />
      <p sprkHelperText>Please enter some input.</p>
      <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">This field is required.</div>
      </span>
    </sprk-input-container>
  `,
});

export const hugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <input
        class="sprk-b-TextInput--label-hidden"
        placeholder="Placeholder"
        name="text_input_huge_1"
        type="text"
        [(ngModel)]="text_input_huge_1"
        required
        #textInput="ngModel"
        sprkInput
      />
      <label sprkLabel>Huge Text Input</label>
      <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">This field is required.</div>
      </span>
    </sprk-huge-input-container>
  `,
});

export const checkbox = () => ({
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
        >

        <label sprkSelectionLabel>
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
        >

        <label sprkSelectionLabel>
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
        >

        <label sprkSelectionLabel>
          Checkbox Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
});
