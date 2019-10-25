import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkHugeInputContainerModule } from './sprk-huge-input-container/sprk-huge-input-container.module';
import { SprkIconModule } from './../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionLabelModule } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkTextareaContainerModule } from './sprk-textarea-container/sprk-textarea-container.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFormatterPhoneNumberModule } from '../../directives/inputs/formatters/sprk-formatter-phone-number/sprk-formatter-phone-number.module';
import { SprkFormatterSsnModule } from '../../directives/inputs/formatters/sprk-formatter-ssn/sprk-formatter-ssn.module';
import { SprkFormatterDateModule } from '../../directives/inputs/formatters/sprk-formatter-date/sprk-formatter-date.module';
import { SprkFormatterMonetaryModule } from '../../directives/inputs/formatters/sprk-formatter-monetary/sprk-formatter-monetary.module';
import { SprkHelperTextModule } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.module';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SprkDatepickerModule } from '../../directives/inputs/sprk-datepicker/sprk-datepicker.module';

export default {
  title: 'Components|Inputs',
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
  }
};

const modules = {
  imports: [
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkHugeInputContainerModule,
    SprkIconModule,
    SprkSelectionContainerModule,
    SprkSelectionItemContainerModule,
    SprkSelectionLabelModule,
    SprkTextareaContainerModule,
    SprkFieldErrorModule,
    SprkFormatterSsnModule,
    SprkFormatterMonetaryModule,
    SprkFormatterPhoneNumberModule,
    SprkFormatterDateModule,
    SprkIconInputContainerModule,
    SprkHelperTextModule,
    SprkDatepickerModule,
  ],
};

export const textInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Text Input Label</label>
      <input
        name="text_input"
        type="text"
        [(ngModel)]="text_input"
        required
        #textInput="ngModel"
        sprkInput
      />
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
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
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

export const checkbox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label sprkLabel>
        Checkbox Group Label
      </label>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input1"
          sprkSelectionInput
          #checkboxInput1="ngModel"
          data-id="checkbox-1"
          id="checkbox-1"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-1"
          sprkSelectionLabel
        >
          Checkbox Item 1
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input2"
          sprkSelectionInput
          #checkboxInput2="ngModel"
          data-id="checkbox-2"
          id="checkbox-2"
           (change)="onSelect($event)"
        >

        <label
          for="checkbox-2"
          sprkSelectionLabel
        >
          Checkbox Item 2
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
        type="checkbox"
        name="checkbox_input"
        [(ngModel)]="checkbox_input3"
        sprkSelectionInput
        #checkboxInput3="ngModel"
        data-id="checkbox-3"
        id="checkbox-3"
        (change)="onSelect($event)"
        >

        <label
          for="checkbox-3"
          sprkSelectionLabel
        >
          Checkbox Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
  props: {
    onSelect() {
      this.checkbox_input1 === true
        ? (this.isChecked = true)
        : (this.isChecked = false);
    }
  },
});

export const radioButtons = () => ({
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

export const selectBox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <select
        class="sprk-b-Select"
        id="select-normal-1"
        aria-describedby="select-normal--error-container"
        data-id="select-1"
        sprkInput
      >
        <option value="none">Please choose...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <sprk-icon
      iconType="chevron-down"
      additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
      sprk-select-icon
      ></sprk-icon>
      <label sprkLabel for="select-normal-1">Huge Select Box Label</label>
    </sprk-input-container>
  `,
});

export const hugeSelect = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <select
        id="select-huge-1"
        aria-describedby="select-normal--error-container"
        data-id="select-huge-1"
        data-sprk-input="huge"
        sprkInput
      >
        <option
          value=""
          disabled
          selected
          hidden
        ></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>
      <label sprkLabel for="select-huge-1">Select Box Label</label>
      <sprk-icon
        iconType="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
      ></sprk-icon>
    </sprk-huge-input-container>
  `,
});

export const textarea = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-textarea-container>
      <label for="textarea-1" sprkLabel>Description</label>
      <textarea
      name="textarea_input"
      id="textarea-1"
      [(ngModel)]="textarea_input"
      #textareaInput="ngModel"
      data-id="textarea-1"
      sprkInput
      ></textarea>
    </sprk-textarea-container>
  `,
});

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

export const searchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Search Input</label>
      <input
      name="search_input"
      type="search"
      [(ngModel)]="search_input"
      #searchInput="ngModel"
      data-id="search-1"
      sprkInput
      >
    </sprk-input-container>
  `,
});

export const inlineSearchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label
        class="sprk-b-Label--with-icon sprk-u-ScreenReaderText"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--stroke-current-color"
        sprk-input-icon
      ></sprk-icon>
      <input
        name="inline_search_input"
        class="sprk-b-TextInput--has-svg-icon"
        type="text"
        placeholder="Search"
        [(ngModel)]="inline_search_input"
        #inlineSearchInput="ngModel"
        data-id="input-search-1"
        sprkInput
      >
    </sprk-icon-input-container>
  `,
});


export const monetaryInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container
      iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
    >
      <label class="sprk-b-Label--monetary" sprkLabel> Payment </label>
      <input
        class="sprk-b-TextInput--has-text-icon"
        name="monetary_input"
        type="text"
        pattern="(^\\$?(\\d+|\\d{1,3}(,\\d{3})*)(\\.\\d+)?$)|^$"
        [(ngModel)]="monetary_input"
        #monetaryInput="ngModel"
        sprkFormatterMonetary
        sprkInput
      />
      <div
        [hidden]="monetaryInput.valid || monetaryInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">Invalid amount.</div>
      </div>
    </sprk-icon-input-container>
  `,
});

export const percentageInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
      <label sprkLabel>Percentage</label>
      <sprk-icon
        iconType="percent"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
        sprk-input-icon
      ></sprk-icon>
      <input
        class="sprk-b-InputContainer__input--has-icon-right"
        name="percentage"
        type="tel"
        sprkInput
      />
    </sprk-icon-input-container>
  `,
});


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
        />
        <label sprkSelectionLabel>Show Password</label>
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

export const helperText = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>
        Text Input Label
      </label>
      <input
        sprkInput
        name="text_input"
        type="text"
        [(ngModel)]="text_input"
        required
        #textInput="ngModel"
        data-id="text-input-1"
      >
      <p sprkHelperText>
        Optional helper text, used to clarify the field's intent.
      </p>
    </sprk-input-container>
  `,
});

export const phoneInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Phone Number</label>
      <input
        name="phone_input"
        type="text"
        pattern="(^(\\+\\d{1,2}\\s)?((\\(\\d{3}\\))|\\d{3})[\\s.-]?\\d{3}[\\s.-]?\\d{4}$)|^$"
        placeholder="(000) 000-0000"
        [(ngModel)]="phone_input"
        required
        #phoneInput="ngModel"
        sprkFormatterPhoneNumber
        sprkInput
      />
      <span
        [hidden]="phoneInput.valid || phoneInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">
          {{
            phoneInput.invalid && phoneInput.value === ''
              ? 'This field is required.'
              : 'This field is invalid.'
          }}
        </div>
      </span>
    </sprk-input-container>
  `,
});

export const dateInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Date Input (No Picker)</label>
      <input
        name="date_input"
        type="text"
        pattern="^(((0[13578]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02([\\/-]?)((0[1-9])|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="date_input"
        #dateInput="ngModel"
        sprkFormatterDate
        sprkInput
      />
      <span [hidden]="dateInput.valid || dateInput.pristine" sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">Invalid date.</div>
      </span>
    </sprk-input-container>
  `,
});

export const datePicker = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label class="sprk-b-Label--with-icon" sprkLabel>
        Date Input
      </label>
      <sprk-icon
        iconType="calendar"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-DatePicker__icon"
        sprk-input-icon
      ></sprk-icon>
      <input
        name="datepicker_input"
        class="sprk-b-TextInput--has-svg-icon"
        type="text"
        pattern="^(((0[13578]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02([\\/-]?)((0[1-9])|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$"
        placeholder="MM/DD/YYYY"
        [(ngModel)]="datepicker_input"
        #datepickerInput="ngModel"
        sprkFormatterDate
        [sprkDatePickerConfig]="dpConfig"
        sprkDatepicker
        sprkInput
      />
      <div
        [hidden]="datepickerInput.valid || datepickerInput.pristine"
        sprkFieldError
      >
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">Invalid date.</div>
      </div>
    </sprk-icon-input-container>
  `,
});
