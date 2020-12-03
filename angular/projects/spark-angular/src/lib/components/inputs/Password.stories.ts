import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkCheckboxItemModule } from './sprk-checkbox-item/sprk-checkbox-item.module';
import { SprkCheckboxItemComponent } from './sprk-checkbox-item/sprk-checkbox-item.component';
import { SprkCheckboxLabelModule } from '../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.module';
import { SprkCheckboxLabelDirective } from '../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.directive';
import { SprkCheckboxInputModule } from '../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.module';
import { SprkCheckboxInputDirective } from '../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Password',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkLabelDirective,
    SprkCheckboxItemComponent,
    SprkCheckboxInputDirective,
    SprkCheckboxLabelDirective,
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
- Requires Additional Engineering:
  - Show/Hide Functionality - Create a function that toggles
  the \`type\` attribute of the input between \`text\` and \`password\`.
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
    SprkCheckboxInputModule,
    SprkCheckboxLabelModule,
    SprkCheckboxItemModule,
  ],
};

export const passwordInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Password</label>
      <input type="password" name="password_input" sprkInput />
      <sprk-checkbox-item
        isVisibilityToggle="true"
      >
        <input
          type="checkbox"
          sprkCheckboxInput
          id="show-password"
        />
        <label for="show-password" sprkCheckboxLabel>Show Password</label>
      </sprk-checkbox-item>
    </sprk-input-container>
  `,
});

passwordInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-checkbox-item.component',
      'sprk-input.directive',
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-label.directive',
    ],
  },
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
      <sprk-checkbox-item
        isVisibilityToggle="true"
      >
        <input
          type="checkbox"
          sprkCheckboxInput
          id="show-password"
        />
        <label for="show-password" sprkCheckboxLabel>Show Password</label>
      </sprk-checkbox-item>
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

invalidPasswordInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-checkbox-item.component',
      'sprk-input.directive',
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledPasswordInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label isDisabled="true" sprkLabel>Password</label>
      <input type="password" name="password_input" sprkInput disabled />
      <sprk-checkbox-item
        isVisibilityToggle="true"
      >
        <input
          type="checkbox"
          sprkCheckboxInput
          id="show-password"
          disabled
        />
        <label isDisabled="true" for="show-password" sprkCheckboxLabel>Show Password</label>
      </sprk-checkbox-item>
    </sprk-input-container>
  `,
});

disabledPasswordInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-checkbox-item.component',
      'sprk-input.directive',
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-label.directive',
    ],
  },
};
