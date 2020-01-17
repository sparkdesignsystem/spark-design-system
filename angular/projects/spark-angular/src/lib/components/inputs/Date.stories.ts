import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date',
  component: SparkInputContainerComponent,
  subcomponents: {
    SprkLabelDirective,
    SprkInputDirective,
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
${markdownDocumentationLinkBuilder('components', 'input')}
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
  ],
};

export const dateInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Date Input (No Picker)</label>
      <input
        name="date_input"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="date_input"
        #dateInput="ngModel"
        sprkInput
      />
    </sprk-input-container>
  `,
});

dateInput.story = {
  name: 'Default',
};

export const invalidDateInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Date Input (No Picker)</label>
      <input
        class="sprk-b-TextInput--error"
        name="date_input"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="date_input"
        #dateInput="ngModel"
        sprkInput
      />
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

invalidDateInput.story = {
  name: 'Invalid',
};

export const disabledDateInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel class="sprk-b-Label--disabled">Date Input (No Picker)</label>
      <input
        disabled
        name="date_input"
        type="text"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="date_input"
        #dateInput="ngModel"
        sprkInput
      />
    </sprk-input-container>
  `,
});

disabledDateInput.story = {
  name: 'Disabled',
};
