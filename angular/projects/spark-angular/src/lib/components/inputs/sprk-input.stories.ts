import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';

export default {
  title: 'Components|Inputs',
};

const modules = {
  imports: [
    SparkInputContainerModule, SprkInputModule
  ],
};

export const textInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>
        TextInput label
      </label>
      <input
        name="text_input"
        [ngClass]="{ 'sprk-b-TextInput--error': textInput.invalid && textInput.dirty }"
        type="text"
        [(ngModel)]="text_input"
        #textInput="ngModel"
        required
        data-id="input-1"
        sprkInput
      />
    </sprk-input-container>
  `,
});

