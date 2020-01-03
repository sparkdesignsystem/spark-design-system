import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkSelectionInputDirective } from '../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkSelectionLabelDirective } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionContainerComponent } from './sprk-selection-container/sprk-selection-container.component';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionItemContainerComponent } from './sprk-selection-item-container/sprk-selection-item-container.component';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';

export default {
  title: 'Components/Input/Password',
  component: SparkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkSelectionInputDirective,
    SprkLabelDirective,
    SprkFieldErrorDirective,
    SprkSelectionLabelDirective,
    SprkSelectionContainerComponent,
    SprkSelectionItemContainerComponent,
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
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
    SprkSelectionContainerModule,
    SprkSelectionItemContainerModule,
  ],
};

export const passwordInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Password</label>
      <input type="password" name="password_input" sprkInput />
      <sprk-selection-item-container
        additionalClasses="sprk-b-InputContainer__visibility-toggle"
      >
        <input
          type="checkbox"
          sprkSelectionInput
          id="show-password"
        />
        <label for="show-password" sprkSelectionLabel>Show Password</label>
      </sprk-selection-item-container>
    </sprk-input-container>
  `,
});

passwordInput.story = {
  name: 'Default',
};

export const invalidPasswordInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Password</label>
      <input
        type="password"
        name="password_input"
        sprkInput
        class="sprk-b-TextInput--error"
        aria-invalid="true"
      />
      <sprk-selection-item-container
        additionalClasses="sprk-b-InputContainer__visibility-toggle"
      >
        <input
          type="checkbox"
          sprkSelectionInput
          id="show-password"
        />
        <label for="show-password" sprkSelectionLabel>Show Password</label>
      </sprk-selection-item-container>
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

invalidPasswordInput.story = {
  name: 'Invalid',
};

export const disabledPasswordInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label class="sprk-b-Label--disabled" sprkLabel>Password</label>
      <input type="password" name="password_input" sprkInput disabled />
      <sprk-selection-item-container
        additionalClasses="sprk-b-InputContainer__visibility-toggle"
      >
        <input
          type="checkbox"
          sprkSelectionInput
          id="show-password"
          disabled
        />
        <label class="sprk-b-Label--disabled" for="show-password" sprkSelectionLabel>Show Password</label>
      </sprk-selection-item-container>
    </sprk-input-container>
  `,
});

disabledPasswordInput.story = {
  name: 'Disabled',
};
