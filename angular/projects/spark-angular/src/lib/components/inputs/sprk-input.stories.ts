import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkHugeInputContainerModule } from './sprk-huge-input-container/sprk-huge-input-container.module';
import { SprkIconModule } from './../sprk-icon/sprk-icon.module';

export default {
  title: 'Components|Inputs',
};

const modules = {
  imports: [
    SparkInputContainerModule,
    SprkInputModule,
    SprkHugeInputContainerModule,
    SprkIconModule,
  ],
};

export const textInput = () => ({
  moduleMetadata: modules,
  template: `
        <sprk-input-container>
          <label sprkLabel>Text Input *</label>
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
