import { Component } from '@angular/core';

@Component({
  selector: 'sprk-input-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Inputs</h2>
        <form (submit)="onSubmit($event)" #sampleForm="ngForm">
          <sprk-input-container>
            <label sprk-label>Text Input *</label>
            <input 
              name="text_input" 
              [additionalClasses]="textInput.invalid && textInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              [(ngModel)]="text_input"
              required
              #textInput="ngModel"
              sprk-input>
            <p sprk-helper-text>Please enter some input.</p>  
            <span 
              [hidden]="textInput.valid || textInput.pristine" 
              sprk-field-error>This field is required.</span>
          </sprk-input-container>
          <sprk-selection-container>
            <label sprk-label>Checkbox Group Label</label>
            <sprk-selection-item-container>
              <input 
                type="checkbox" 
                name="checkbox_input" 
                [(ngModel)]="checkbox_input1" 
                sprk-selection-input
                #checkboxInput1="ngModel"> 
              <label sprk-selection-label>Item 1</label>
            </sprk-selection-item-container>
            <sprk-selection-item-container>
              <input 
                type="checkbox" 
                name="checkbox_input" 
                [(ngModel)]="checkbox_input2" 
                sprk-selection-input
                #checkboxInput2="ngModel"> 
              <label sprk-selection-label>Item 2</label>
            </sprk-selection-item-container>
            <sprk-selection-item-container>
              <input 
                type="checkbox" 
                name="checkbox_input" 
                [(ngModel)]="checkbox_input3" 
                sprk-selection-input
                #checkboxInput3="ngModel"> 
              <label sprk-selection-label>Item 3</label>
            </sprk-selection-item-container>
          </sprk-selection-container> 
          <sprk-selection-container>
            <label sprk-label>Radio Group Label</label>
            <sprk-selection-item-container>
              <input 
                type="radio" 
                value="1"
                name="radio_input" 
                [(ngModel)]="radio_input"
                sprk-selection-input
                #radioInput="ngModel"> 
              <label sprk-selection-label>Item 1</label>
            </sprk-selection-item-container>
            <sprk-selection-item-container>
              <input 
                type="radio" 
                value="2"
                name="radio_input" 
                sprk-selection-input
                [(ngModel)]="radio_input"
                #radioInput="ngModel"> 
              <label sprk-selection-label>Item 2</label>
            </sprk-selection-item-container>
            <sprk-selection-item-container>
              <input 
                type="radio" 
                value="3"
                name="radio_input" 
                sprk-selection-input
                [(ngModel)]="radio_input"
                #radioInput="ngModel"> 
              <label sprk-selection-label>Item 3</label>
            </sprk-selection-item-container>
          </sprk-selection-container> 
          <sprk-input-container>
            <label sprk-label>Select Box Label</label>
            <select class="sprk-b-Select" id="select-normal" aria-describedby="select-normal--error-container" sprk-input>
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
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Textarea Input</label>
            <textarea
              name="textarea_input" 
              [(ngModel)]="textarea_input"
              #textareaInput="ngModel"
              sprk-input></textarea>
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>SSN Input</label>
            <input
              [type]="ssnType"
              [additionalClasses]="ssnInput.invalid && ssnInput.dirty ? 'sprk-b-TextInput--error': ''"
              pattern="(^(?!666|000|9\\d{2})\\d{3}([-]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$" placeholder="000-00-0000"
              name="ssn_input"
              [(ngModel)]="ssn_input"
              #ssnInput="ngModel"
              sprk-formatter-ssn
              sprk-input>
            <sprk-selection-item-container>
              <input type="checkbox" sprk-selection-input (click)="toggleSSNType()">
              <label sprk-selection-label>Show SSN</label>
            </sprk-selection-item-container>
            <div 
            [hidden]="ssnInput.valid || ssnInput.pristine"
            sprk-field-error>Invalid SSN.</div>
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Search Input</label>
            <input 
              name="search_input" 
              type="search" 
              [(ngModel)]="search_input"
              #searchInput="ngModel"
              sprk-input>
          </sprk-input-container>
          <sprk-input-container>
            <label additionalClasses="sprk-u-ScreenReaderText" sprk-label>Inline Search Input</label>
            <input 
              name="inline_search_input" 
              type="search" 
              role="search"
              placeholder="Search"
              [(ngModel)]="inline_search_input"
              #inlineSearchInput="ngModel"
              sprk-input>
          </sprk-input-container>
          <sprk-input-container iconContainerClasses="sprk-b-TextInput--monetary">
            <label sprk-label>Payment</label>
            <input 
              name="monetary_input" 
              type="text" 
              [additionalClasses]="monetaryInput.invalid && monetaryInput.dirty ? 'sprk-b-TextInput--error sprk-u-plm': 'sprk-u-plm'"
              pattern="(^\\$?(\\d+|\\d{1,3}(,\\d{3})*)(\\.\\d+)?$)|^$"
              [(ngModel)]="monetary_input"
              #monetaryInput="ngModel"
              sprk-formatter-monetary
              sprk-input>
              <div 
              [hidden]="monetaryInput.valid || monetaryInput.pristine"
              sprk-field-error>Invalid amount.</div>
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Password</label>
            <input
              [type]="passwordType"
              name="password_input"
              sprk-input>
            <sprk-selection-item-container>
              <input type="checkbox" sprk-selection-input (click)="togglePasswordType()">
              <label sprk-selection-label>Show Password</label>
            </sprk-selection-item-container>
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Phone Number *</label>
            <input 
              name="phone_input" 
              [additionalClasses]="phoneInput.invalid && phoneInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              pattern="(^(\\+\\d{1,2}\\s)?((\\(\\d{3}\\))|\\d{3})[\\s.-]?\\d{3}[\\s.-]?\\d{4}$)|^$"
              placeholder="(000) 000-0000"
              [(ngModel)]="phone_input"
              required
              #phoneInput="ngModel"
              sprk-formatter-phone-number
              sprk-input>
            <span 
              [hidden]="phoneInput.valid || phoneInput.pristine"
              sprk-field-error>
              {{ phoneInput.invalid && phoneInput.value === '' ? 'This field is required.' : 'This field is invalid.'}}
            </span>  
          </sprk-input-container>
          <sprk-input-container iconContainerClasses="sprk-b-TextInput--date-picker">
            <label sprk-label>Date Input (picker)</label>
            <sprk-icon iconType="calendar" sprk-input-icon></sprk-icon>
            <input 
              name="datepicker_input" 
              type="text" 
              [additionalClasses]="datepickerInput.invalid && datepickerInput.dirty ? 'sprk-b-TextInput--error sprk-u-pll': 'sprk-u-pll'"
              pattern="^(((0[1358]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02(\\/?)((0?\\d)|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$"
              placeholder="MM/DD/YYYY"
              [(ngModel)]="datepicker_input"
              #datepickerInput="ngModel"
              sprk-formatter-date
              sprk-datepicker
              sprk-input>
              <div 
              [hidden]="datepickerInput.valid || datepickerInput.pristine"
              sprk-field-error>Invalid date.</div>
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Date Input (No Picker)</label>
            <input 
              name="date_input" 
              [additionalClasses]="dateInput.invalid && dateInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              pattern="^(((0[1358]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02(\\/?)((0?\\d)|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$"
              placeholder="MM/DD/YYYY"
              [(ngModel)]="date_input"
              #dateInput="ngModel"
              sprk-formatter-date
              sprk-input>
            <span 
              [hidden]="dateInput.valid || dateInput.pristine"
              sprk-field-error>Invalid date.</span>  
          </sprk-input-container>
          <sprk-button additionalClasses="sprk-u-mbl" [isDisabled]="!sampleForm.form.valid">Submit</sprk-button>
          <sprk-alert 
          [hidden]="sampleForm.valid"
          alertType="fail">Something's wrong above.</sprk-alert>
          <sprk-alert 
          [hidden]="!form_submitted"
          alertType="success">Form Submitted! (Not really)</sprk-alert>
        </form>
      </div>`,
  styles: ['']
})

export class InputDocsComponent {
  constructor() { }

  text_input: string = '';
  textarea_input: string = '';
  search_input: string = '';
  inline_search_input: string = '';
  phone_input: string = '';
  date_input: string = '';
  radio_input: string;
  passwordType: string = 'password';
  ssnType: string = 'password';
  form_submitted: boolean = false;

  togglePasswordType(): void {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  toggleSSNType(): void {
    if (this.ssnType === 'password') {
      this.ssnType = 'text';
    } else {
      this.ssnType = 'password';
    }
  }

  onSubmit(): void {
    this.form_submitted = true;
  }
}
