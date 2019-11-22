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
  title: 'Components/Input/SSN',
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

export const SSNInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label for="ssn-input" sprkLabel>SSN Input</label>
      <input
        [type]="ssnType"
        [ngClass]="{ 'sprk-b-TextInput--error': ssnInput.invalid && ssnInput.dirty }"
        pattern="(^(?!666|000|9\\d{2})\\d{3}([-]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$"
        placeholder="000-00-0000"
        name="ssn_input"
        [(ngModel)]="ssn_input"
        #ssnInput="ngModel"
        data-id="ssn-1"
        id="ssn-input"
        sprkFormatterSsn
        sprkInput
      >
      <sprk-selection-item-container
        additionalClasses="sprk-b-InputContainer__visibility-toggle"
      >
        <input
          type="checkbox"
          sprkSelectionInput
          (click)="toggleSSNType()"
          data-id="ssn-reveal-3"
          id="show-ssn"
        >
        <label for="show-ssn" sprkSelectionLabel>Show SSN</label>
      </sprk-selection-item-container>
      <div
        [hidden]="ssnInput.valid || ssnInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        >
        </sprk-icon>
        <div class="sprk-b-ErrorText">Invalid SSN.</div>
      </div>
    </sprk-input-container>
  `,
  props: {
    ssnType: 'password',
    toggleSSNType(): void {
      this.ssnType === 'password'
        ? (this.ssnType = 'text')
        : (this.ssnType = 'password');
    }
  }
});

SSNInput.story = {
  name: 'Default',
};
