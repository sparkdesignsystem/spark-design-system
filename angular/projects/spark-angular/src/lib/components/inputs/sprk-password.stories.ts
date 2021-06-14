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
import { SprkSelectionInputModule } from '../../directives/inputs/sprk-selection-input/sprk-selection-input.module';
import { SprkSelectionLabelModule } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionContainerComponent } from './sprk-selection-container/sprk-selection-container.component';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionItemContainerComponent } from './sprk-selection-item-container/sprk-selection-item-container.component';
import { SprkSelectionInputDirective } from '../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkSelectionLabelDirective } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { FormsModule } from '@angular/forms';

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
    SprkSelectionLabelDirective,
    SprkSelectionContainerComponent,
    SprkSelectionItemContainerComponent,
    SprkSelectionInputDirective,
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
    FormsModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
    SprkCheckboxInputModule,
    SprkCheckboxLabelModule,
    SprkCheckboxItemModule,
    SprkSelectionContainerModule,
    SprkSelectionItemContainerModule,
    SprkSelectionInputModule,
    SprkSelectionLabelModule,
  ],
};

export const passwordInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label for="password" sprkLabel>Password</label>
      <input id="password" type="password" name="password_input" sprkInput />
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

passwordInput.storyName = 'Default';

passwordInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-checkbox-item.component',
    'sprk-input.directive',
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-label.directive',
  ],
};

export const invalidPasswordInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label for="invalid-password" sprkLabel>Password</label>
      <input
        id="invalid-password"
        aria-describedby="password-error"
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
      <span sprkFieldError id="password-error">
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

invalidPasswordInput.storyName = 'Invalid';

invalidPasswordInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-checkbox-item.component',
    'sprk-input.directive',
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const disabledPasswordInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label for="disabled-password" isDisabled="true" sprkLabel>Password</label>
      <input
        id="disabled-password"
        type="password"
        name="password_input"
        sprkInput
        disabled
      />
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

disabledPasswordInput.storyName = 'Disabled';

disabledPasswordInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-checkbox-item.component',
    'sprk-input.directive',
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-label.directive',
  ],
};

export const legacy = () => ({
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

legacy.storyName = 'Legacy (Deprecated)';

legacy.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-selection-item-container.component',
    'sprk-input.directive',
    'sprk-selection-input.directive',
    'sprk-label.directive',
  ],
};

export const legacyInvalidPasswordInput = () => ({
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
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  `,
});

legacyInvalidPasswordInput.storyName = 'Legacy Invalid (Deprecated)';

legacyInvalidPasswordInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-selection-item-container.component',
    'sprk-input.directive',
    'sprk-selection-input.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const legacyDisabledPasswordInput = () => ({
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

legacyDisabledPasswordInput.storyName = 'Legacy Disabled (Deprecated)';

legacyDisabledPasswordInput.parameters = {
  jest: [
    'sprk-input-container.component',
    'sprk-selection-item-container.component',
    'sprk-input.directive',
    'sprk-selection-input.directive',
    'sprk-label.directive',
  ],
};
