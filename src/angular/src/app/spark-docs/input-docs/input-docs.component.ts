import { Component } from '@angular/core';

@Component({
  selector: 'sprk-input-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Inputs</h2>
      <form (submit)="onSubmit($event)" #sampleForm="ngForm">
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
        <sprk-input-container additionalClasses="sprk-b-InputContainer--huge">
          <label sprkLabel>Text Input *</label>
          <input
            placeholder="Placeholder Text"
            name="text_input_huge_2"
            type="text"
            [(ngModel)]="text_input_huge_2"
            required
            #textInput="ngModel"
            sprkInput
          />
        </sprk-input-container>
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
        <sprk-huge-input-container>
          <input
            placeholder="Placeholder"
            disabled
            name="text_input_huge_disabled"
            [ngClass]="{
              'sprk-b-TextInput--error': textInput.invalid && textInput.dirty
            }"
            type="text"
            [(ngModel)]="text_input_huge_disabled"
            required
            #textInput="ngModel"
            data-id="input-disabled-1"
            sprkInput
          />
          <label sprkLabel> Disabled Text Input</label>
        </sprk-huge-input-container>
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
        <sprk-selection-container>
          <label sprkLabel>Checkbox Group Label</label>
          <sprk-selection-item-container
            additionalClasses="angular-docs-u-FlexWrap--wrap"
          >
            <input
              type="checkbox"
              name="checkbox_input"
              [ngClass]="{ 'sprk-u-mbm': isChecked }"
              [(ngModel)]="checkbox_input1"
              sprkSelectionInput
              (change)="onSelect($event)"
            />
            <label
              sprkSelectionLabel
              [ngClass]="{
                'sprk-u-mbm': isChecked,
                'sprk-u-Width-90': isChecked
              }"
            >
              Item 1
            </label>
            <sprk-selection-item-container
              additionalClasses="sprk-u-plm sprk-u-mbn"
              *ngIf="isChecked"
            >
              <input
                type="checkbox"
                name="checkbox_input1a"
                [(ngModel)]="checkbox_input1a"
                sprkSelectionInput
              />
              <label sprkSelectionLabel>Item 1: Extra Field</label>
            </sprk-selection-item-container>
          </sprk-selection-item-container>
          <sprk-selection-item-container>
            <input
              type="checkbox"
              name="checkbox_input2"
              [(ngModel)]="checkbox_input2"
              sprkSelectionInput
            />
            <label sprkSelectionLabel>Item 2</label>
          </sprk-selection-item-container>
          <sprk-selection-item-container>
            <input
              type="checkbox"
              name="checkbox_input3"
              [(ngModel)]="checkbox_input3"
              sprkSelectionInput
            />
            <label sprkSelectionLabel>Item 3</label>
          </sprk-selection-item-container>
          <div>Extra div being passed through in selection container</div>
        </sprk-selection-container>
        <sprk-selection-container>
          <label sprkLabel>
            Radio Group Label
          </label>
          <sprk-selection-item-container
            additionalClasses="angular-docs-u-FlexWrap--wrap"
          >
            <input
              type="radio"
              value="1"
              [ngClass]="{ 'sprk-u-mbm': isRadioChecked }"
              name="radio_input"
              [(ngModel)]="radio_input"
              sprkSelectionInput
              #radioInput="ngModel"
              (change)="onRadioSelect($event)"
            />
            <label
              sprkSelectionLabel
              [ngClass]="{
                'sprk-u-mbm': isRadioChecked,
                'sprk-u-Width-90': isRadioChecked
              }"
            >
              Item 1
            </label>
            <sprk-selection-item-container
              *ngIf="isRadioChecked"
              additionalClasses="sprk-u-plm sprk-u-mbs"
            >
              <input
                type="radio"
                value="1a"
                name="radio_input"
                [(ngModel)]="radio_input"
                sprkSelectionInput
                #radioInput="ngModel"
              />
              <label sprkSelectionLabel>Item 1: Extra Radio, A. Option</label>
            </sprk-selection-item-container>
            <sprk-selection-item-container
              *ngIf="isRadioChecked"
              additionalClasses="sprk-u-plm sprk-u-mbn"
            >
              <input
                type="radio"
                value="1b"
                name="radio_input"
                [(ngModel)]="radio_input"
                sprkSelectionInput
                #radioInput="ngModel"
              />
              <label sprkSelectionLabel>Item 1: Extra Radio, B. Option</label>
            </sprk-selection-item-container>
          </sprk-selection-item-container>
          <sprk-selection-item-container>
            <input
              type="radio"
              value="2"
              name="radio_input"
              sprkSelectionInput
              [(ngModel)]="radio_input"
              #radioInput="ngModel"
              (change)="onRadioSelect($event)"
            />
            <label sprkSelectionLabel>Item 2</label>
          </sprk-selection-item-container>
          <sprk-selection-item-container>
            <input
              type="radio"
              value="3"
              name="radio_input"
              sprkSelectionInput
              [(ngModel)]="radio_input"
              #radioInput="ngModel"
              (change)="onRadioSelect($event)"
            />
            <label sprkSelectionLabel>Item 3</label>
          </sprk-selection-item-container>
        </sprk-selection-container>
        <sprk-input-container>
          <select
            class="sprk-b-Select"
            id="select-normal"
            aria-describedby="select-normal--error-container"
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
          <label sprkLabel>Select Box Label</label>
        </sprk-input-container>
        <sprk-huge-input-container>
          <select
            id="select-huge"
            data-id="select-huge"
            aria-describedby="select-huge--error-container"
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
          <sprk-icon
            iconType="chevron-down"
            additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
            sprk-select-icon
          ></sprk-icon>
          <label sprkLabel for="select-huge">Select Box Label</label>
        </sprk-huge-input-container>
        <sprk-textarea-container>
          <label sprkLabel>Textarea Input</label>
          <textarea
            name="textarea_input"
            [(ngModel)]="textarea_input"
            #textareaInput="ngModel"
            sprkInput
          ></textarea>
        </sprk-textarea-container>
        <sprk-input-container>
          <label sprkLabel>SSN Input</label>
          <input
            [type]="ssnType"
            pattern="(^(?!666|000|9\\d{2})\\d{3}([-]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$"
            placeholder="000-00-0000"
            name="ssn_input"
            [(ngModel)]="ssn_input"
            #ssnInput="ngModel"
            sprkFormatterSsn
            sprkInput
          />
          <sprk-selection-item-container
            additionalClasses="sprk-b-InputContainer__visibility-toggle"
          >
            <input
              type="checkbox"
              sprkSelectionInput
              (click)="toggleSSNType()"
            />
            <label sprkSelectionLabel>Show SSN</label>
          </sprk-selection-item-container>
          <div [hidden]="ssnInput.valid || ssnInput.pristine" sprkFieldError>
            <sprk-icon
              iconType="exclamation-filled-small"
              additionalClasses="sprk-b-ErrorIcon"
            ></sprk-icon>
            <div class="sprk-b-ErrorText">Invalid SSN.</div>
          </div>
        </sprk-input-container>
        <sprk-input-container>
          <label sprkLabel>Search Input</label>
          <input
            name="search_input"
            type="search"
            [(ngModel)]="search_input"
            #searchInput="ngModel"
            sprkInput
          />
        </sprk-input-container>
        <sprk-icon-input-container>
          <label
            class="sprk-b-Label--with-icon sprk-u-ScreenReaderText"
            sprkLabel
          >
            Search
          </label>
          <sprk-icon
            iconType="search"
            additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-InlineSearch__icon"
            sprk-input-icon
          ></sprk-icon>
          <input
            name="inline_search_input"
            class="sprk-b-TextInput--has-svg-icon"
            type="text"
            placeholder="Search"
            [(ngModel)]="inline_search_input"
            #inlineSearchInput="ngModel"
            sprkInput
          />
        </sprk-icon-input-container>
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
        <sprk-input-container>
          <label sprkLabel>Phone Number *</label>
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
        <sprk-icon-input-container>
          <label class="sprk-b-Label--with-icon" sprkLabel>
            Date Input (picker)
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
        <button
          additionalClasses="sprk-u-mbl"
          [disabled]="!sampleForm.form.valid"
          sprkButton
        >
          Submit
        </button>
        <sprk-alert [hidden]="sampleForm.valid" alertType="fail"
          >Something's wrong above.</sprk-alert
        >
        <sprk-alert [hidden]="!form_submitted" alertType="success"
          >Form Submitted! (Not really)</sprk-alert
        >
      </form>
    </div>
  `
})
export class InputDocsComponent {
  constructor() {}

  text_input = '';
  text_input_huge = '';
  text_input_huge_disabled = '';
  textarea_input = '';
  search_input = '';
  inline_search_input = '';
  phone_input = '';
  date_input = '';
  radio_input: string;
  checkbox_input1 = false;
  checkbox_input1a = false;
  checkbox_input2 = false;
  checkbox_input3 = false;
  ssn_input: string;
  monetary_input: string;
  datepicker_input: string;
  passwordType = 'password';
  ssnType = 'password';
  form_submitted = false;
  isChecked = false;
  isRadioChecked = false;

  dpConfig = {
    mode: 'dp-below'
  };

  togglePasswordType(): void {
    this.passwordType === 'password'
      ? (this.passwordType = 'text')
      : (this.passwordType = 'password');
  }

  toggleSSNType(): void {
    this.ssnType === 'password'
      ? (this.ssnType = 'text')
      : (this.ssnType = 'password');
  }

  onSubmit(event): void {
    this.form_submitted = true;
  }

  onSelect() {
    this.checkbox_input1 === true
      ? (this.isChecked = true)
      : (this.isChecked = false);
  }

  onRadioSelect($event) {
    $event.target.checked === true && this.radio_input === '1'
      ? (this.isRadioChecked = true)
      : (this.isRadioChecked = false);
  }
}
