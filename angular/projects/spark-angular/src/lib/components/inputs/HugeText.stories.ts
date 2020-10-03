import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkHugeInputContainerModule } from './sprk-huge-input-container/sprk-huge-input-container.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkHugeInputContainerComponent } from './sprk-huge-input-container/sprk-huge-input-container.component';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Huge Text',
  component: SparkInputContainerComponent,
  subcomponents: {
    SprkHugeInputContainerComponent,
    SprkInputDirective,
    SprkFieldErrorDirective,
    SprkLabelDirective,
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
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SprkHugeInputContainerModule,
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
  ],
};

export const hugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <input
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        #textInput="ngModel"
        sprkInput
      />
      <label sprkLabel>Huge Text Input</label>
    </sprk-huge-input-container>
  `,
});

hugeTextInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-huge-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const invalidHugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <input
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        #textInput="ngModel"
        class="sprk-b-TextInput--error"
        aria-invalid="true"
        sprkInput
      />
      <label sprkLabel>Huge Text Input</label>
      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-huge-input-container>
  `,
});

invalidHugeTextInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-huge-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledHugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <input
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        #textInput="ngModel"
        sprkInput
        disabled
      />
      <label class="sprk-b-Label--disabled" sprkLabel>Huge Text Input</label>
    </sprk-huge-input-container>
  `,
});

disabledHugeTextInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-huge-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

