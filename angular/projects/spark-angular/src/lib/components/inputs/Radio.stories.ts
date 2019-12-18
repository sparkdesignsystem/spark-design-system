import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionContainerComponent} from './sprk-selection-container/sprk-selection-container.component';
import { SprkSelectionLabelModule } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';

export default {
  title: 'Components/Input/Radio',
  component: SprkSelectionContainerComponent,
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
    SprkLabelModule,
    SprkSelectionContainerModule,
    SprkSelectionItemContainerModule,
    SprkSelectionLabelModule,
    SprkIconModule,
    SprkFieldErrorModule
  ],
};

export const radioButton = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="1"
          name="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
          #radioInput="ngModel"
          data-id="radio-1"
          id="radio-1"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-1"
          sprkSelectionLabel
        >
          Item 1
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="2"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-2"
          id="radio-2"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-2"
          sprkSelectionLabel
        >
          Item 2
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="3"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-3"
          id="radio-3"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-3"
          sprkSelectionLabel
        >
          Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
  props: {
    onRadioSelect($event) {
      $event.target.checked === true && this.radio_input === '1'
        ? (this.isRadioChecked = true)
        : (this.isRadioChecked = false);
    }
  }
});


radioButton.story = {
  name: 'Default',
};

export const invalidRadioButton = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="1"
          name="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
          #radioInput="ngModel"
          data-id="radio-1"
          id="radio-1"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-1"
          sprkSelectionLabel
        >
          Item 1
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="2"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-2"
          id="radio-2"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-2"
          sprkSelectionLabel
        >
          Item 2
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="3"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-3"
          id="radio-3"
          (change)="onRadioSelect($event)"
        >
        <label
          for="radio-3"
          sprkSelectionLabel
        >
          Item 3
        </label>
      </sprk-selection-item-container>
      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-selection-container>
  `,
  props: {
    onRadioSelect($event) {
      $event.target.checked === true && this.radio_input === '1'
        ? (this.isRadioChecked = true)
        : (this.isRadioChecked = false);
    }
  }
});


invalidRadioButton.story = {
  name: 'Invalid',
};

export const disabledRadioButton = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label class="sprk-b-Label--disabled" sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="1"
          name="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
          #radioInput="ngModel"
          data-id="radio-1"
          id="radio-1"
          (change)="onRadioSelect($event)"
          disabled
        >
        <label
          class="sprk-b-Label--disabled"
          for="radio-1"
          sprkSelectionLabel
        >
          Item 1
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="2"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-2"
          id="radio-2"
          (change)="onRadioSelect($event)"
          disabled
        >
        <label
          class="sprk-b-Label--disabled"
          for="radio-2"
          sprkSelectionLabel
        >
          Item 2
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="3"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-3"
          id="radio-3"
          (change)="onRadioSelect($event)"
          disabled
        >
        <label
          class="sprk-b-Label--disabled"
          for="radio-3"
          sprkSelectionLabel
        >
          Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
  props: {
    onRadioSelect($event) {
      $event.target.checked === true && this.radio_input === '1'
        ? (this.isRadioChecked = true)
        : (this.isRadioChecked = false);
    }
  }
});


disabledRadioButton.story = {
  name: 'Disabled',
};

