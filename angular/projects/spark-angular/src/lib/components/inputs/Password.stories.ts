import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkIconInputContainerComponent } from './sprk-icon-input-container/sprk-icon-input-container.component';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';


export default {
  title: 'Components/Input/Password',
  component: SprkIconInputContainerComponent,
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
      <input [type]="passwordType" name="password_input" sprkInput />
      <sprk-selection-item-container
        additionalClasses="sprk-b-InputContainer__visibility-toggle"
      >
        <input
          type="checkbox"
          sprkSelectionInput
          (click)="togglePasswordType()"
          id="show-password"
        />
        <label for="show-password" sprkSelectionLabel>Show Password</label>
      </sprk-selection-item-container>
    </sprk-input-container>
  `,
  props: {
    passwordType: 'password',
    togglePasswordType(): void {
      this.passwordType === 'password'
        ? (this.passwordType = 'text')
        : (this.passwordType = 'password');
    }
  },
});

passwordInput.story = {
  name: 'Default',
};
