import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkSelectDirective } from '../../../directives/inputs/sprk-select/sprk-select.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkInputContainerComponent } from './sprk-input-container.component';
import { SprkIconComponent } from '../../sprk-icon/sprk-icon.component';
@Component({
  selector: 'sprk-test-1',
  template: `
    <sprk-input-container>
      <label sprkLabel>Label!</label>
      <input sprkInput />
      <p sprkHelperText>Helper Text!</p>
      <span sprkFieldError>Error Message!</span>
    </sprk-input-container>
  `,
})
class Test1Component {}

@Component({
  selector: 'sprk-test-2',
  template: `
    <sprk-input-container>
      <label sprkLabel for="example-for">Label!</label>
      <input sprkInput id="example-id" />
      <p sprkHelperText>Helper Text!</p>
      <span sprkFieldError id="example-error">Error Message!</span>
    </sprk-input-container>
  `,
})
class Test2Component {}

@Component({
  selector: 'sprk-test-3',
  template: `
    <sprk-input-container>
      <label sprkLabel for="select-normal-1">Select Box Label</label>
      <select id="select-normal-1" idString="select-1" sprkSelect>
        <option value="none">Please choose...</option>
        <option value="1">Option 1</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
        </optgroup>
      </select>
      <sprk-icon
        iconName="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
      ></sprk-icon>
      <span sprkFieldError id="example-error">Error Message!</span>
    </sprk-input-container>
  `,
})
class Test3Component {}

@Component({
  selector: 'sprk-test-4',
  template: `
    <sprk-input-container>
      <label sprkLabel for="example-for">Select Box Label</label>
      <select id="example-id" sprkSelect>
        <option value="none">Please choose...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
      <sprk-icon
        iconName="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
      ></sprk-icon>
      <span sprkFieldError id="example-error">Error Message!</span>
    </sprk-input-container>
  `,
})
class Test4Component {}

@Component({
  selector: 'sprk-test-5',
  template: `
    <sprk-input-container>
      <label sprkLabel>Label!</label>
      <input sprkInput id="example-id" />
      <p sprkHelperText>Helper Text!</p>
      <span sprkFieldError>Error Message!</span>
    </sprk-input-container>
  `,
})
class Test5Component {}

@Component({
  selector: 'sprk-test-6',
  template: `
    <sprk-input-container>
      <label sprkLabel for="example-for">Label!</label>
      <input sprkInput />
      <p sprkHelperText>Helper Text!</p>
      <span sprkFieldError>Error Message!</span>
    </sprk-input-container>
  `,
})
class Test6Component {}

@Component({
  selector: 'sprk-test-7',
  template: `
    <sprk-input-container>
      <label sprkLabel for="test-7">Label!</label>
      <input sprkInput id="test-7" />
      <p sprkHelperText>Helper Text!</p>
      <span sprkFieldError>Error Message!</span>
    </sprk-input-container>
  `,
})
class Test7Component {}

describe('SprkInputContainerComponent', () => {
  let component1: Test1Component;
  let component2: Test2Component;
  let component3: Test3Component;
  let component4: Test4Component;
  let component5: Test5Component;
  let component6: Test6Component;
  let component7: Test7Component;

  let testFixture1: ComponentFixture<Test1Component>;
  let testFixture2: ComponentFixture<Test2Component>;
  let testFixture3: ComponentFixture<Test3Component>;
  let testFixture4: ComponentFixture<Test4Component>;
  let testFixture5: ComponentFixture<Test5Component>;
  let testFixture6: ComponentFixture<Test6Component>;
  let testFixture7: ComponentFixture<Test7Component>;

  let inputContainerComponent1: SprkInputContainerComponent;
  let inputContainerComponent2: SprkInputContainerComponent;
  let inputContainerComponent3: SprkInputContainerComponent;
  let inputContainerComponent4: SprkInputContainerComponent;
  let inputContainerComponent5: SprkInputContainerComponent;
  let inputContainerComponent6: SprkInputContainerComponent;
  let inputContainerComponent7: SprkInputContainerComponent;

  let inputContainerFixture1: ComponentFixture<SprkInputContainerComponent>;
  let inputContainerFixture2: ComponentFixture<SprkInputContainerComponent>;
  let inputContainerFixture3: ComponentFixture<SprkInputContainerComponent>;
  let inputContainerFixture4: ComponentFixture<SprkInputContainerComponent>;
  let inputContainerFixture5: ComponentFixture<SprkInputContainerComponent>;
  let inputContainerFixture6: ComponentFixture<SprkInputContainerComponent>;
  let inputContainerFixture7: ComponentFixture<SprkInputContainerComponent>;

  let inputContainerElement1: HTMLElement;
  let inputContainerElement2: HTMLElement;
  let inputContainerElement3: HTMLElement;
  let inputContainerElement4: HTMLElement;
  let inputContainerElement5: HTMLElement;
  let inputContainerElement6: HTMLElement;
  let inputContainerElement7: HTMLElement;

  let labelElement1: HTMLElement;
  let inputElement1: HTMLElement;
  let errorElement1: HTMLElement;

  let labelElement2: HTMLElement;
  let inputElement2: HTMLElement;
  let errorElement2: HTMLElement;

  let labelElement3: HTMLElement;
  let inputElement3: HTMLElement;
  let errorElement3: HTMLElement;

  let labelElement4: HTMLElement;
  let inputElement4: HTMLElement;
  let errorElement4: HTMLElement;

  let labelElement5: HTMLElement;
  let inputElement5: HTMLElement;
  let errorElement5: HTMLElement;

  let labelElement6: HTMLElement;
  let inputElement6: HTMLElement;
  let errorElement6: HTMLElement;

  let labelElement7: HTMLElement;
  let inputElement7: HTMLElement;
  let errorElement7: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkLabelDirective,
        SprkInputDirective,
        SprkSelectDirective,
        SprkFieldErrorDirective,
        Test1Component,
        Test2Component,
        Test3Component,
        Test4Component,
        Test5Component,
        Test6Component,
        Test7Component,
        SprkInputContainerComponent,
        SprkIconComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    testFixture1 = TestBed.createComponent(Test1Component);
    testFixture2 = TestBed.createComponent(Test2Component);
    testFixture3 = TestBed.createComponent(Test3Component);
    testFixture4 = TestBed.createComponent(Test4Component);
    testFixture5 = TestBed.createComponent(Test5Component);
    testFixture6 = TestBed.createComponent(Test6Component);
    testFixture7 = TestBed.createComponent(Test7Component);

    component1 = testFixture1.componentInstance;
    component2 = testFixture2.componentInstance;
    component3 = testFixture3.componentInstance;
    component4 = testFixture4.componentInstance;
    component5 = testFixture5.componentInstance;
    component6 = testFixture6.componentInstance;
    component7 = testFixture7.componentInstance;

    inputContainerFixture1 = TestBed.createComponent(
      SprkInputContainerComponent,
    );
    inputContainerFixture2 = TestBed.createComponent(
      SprkInputContainerComponent,
    );
    inputContainerFixture3 = TestBed.createComponent(
      SprkInputContainerComponent,
    );
    inputContainerFixture4 = TestBed.createComponent(
      SprkInputContainerComponent,
    );
    inputContainerFixture5 = TestBed.createComponent(
      SprkInputContainerComponent,
    );
    inputContainerFixture6 = TestBed.createComponent(
      SprkInputContainerComponent,
    );
    inputContainerFixture7 = TestBed.createComponent(
      SprkInputContainerComponent,
    );

    inputContainerComponent1 = inputContainerFixture1.componentInstance;
    inputContainerComponent2 = inputContainerFixture2.componentInstance;
    inputContainerComponent3 = inputContainerFixture3.componentInstance;
    inputContainerComponent4 = inputContainerFixture4.componentInstance;
    inputContainerComponent5 = inputContainerFixture5.componentInstance;
    inputContainerComponent6 = inputContainerFixture6.componentInstance;
    inputContainerComponent7 = inputContainerFixture7.componentInstance;

    inputContainerComponent1.ngOnInit();
    inputContainerComponent2.ngOnInit();
    inputContainerComponent3.ngOnInit();
    inputContainerComponent4.ngOnInit();
    inputContainerComponent5.ngOnInit();
    inputContainerComponent6.ngOnInit();
    inputContainerComponent7.ngOnInit();

    testFixture1.detectChanges();
    testFixture2.detectChanges();
    testFixture3.detectChanges();
    testFixture4.detectChanges();
    testFixture5.detectChanges();
    testFixture6.detectChanges();
    testFixture7.detectChanges();

    inputContainerFixture1.detectChanges();
    inputContainerFixture2.detectChanges();
    inputContainerFixture3.detectChanges();
    inputContainerFixture4.detectChanges();
    inputContainerFixture5.detectChanges();
    inputContainerFixture6.detectChanges();
    inputContainerFixture7.detectChanges();

    inputContainerElement1 = inputContainerFixture1.nativeElement.querySelector(
      'div',
    );
    inputContainerElement2 = inputContainerFixture2.nativeElement.querySelector(
      'div',
    );
    inputContainerElement3 = inputContainerFixture3.nativeElement.querySelector(
      'div',
    );
    inputContainerElement4 = inputContainerFixture4.nativeElement.querySelector(
      'div',
    );
    inputContainerElement5 = inputContainerFixture5.nativeElement.querySelector(
      'div',
    );
    inputContainerElement6 = inputContainerFixture6.nativeElement.querySelector(
      'div',
    );
    inputContainerElement7 = inputContainerFixture7.nativeElement.querySelector(
      'div',
    );

    labelElement1 = testFixture1.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement2 = testFixture2.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement3 = testFixture3.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement4 = testFixture4.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement5 = testFixture5.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement6 = testFixture6.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement7 = testFixture7.debugElement.query(By.css('label'))
      .nativeElement;

    inputElement1 = testFixture1.debugElement.query(By.css('input'))
      .nativeElement;
    inputElement2 = testFixture2.debugElement.query(By.css('input'))
      .nativeElement;
    inputElement3 = testFixture3.debugElement.query(By.css('select'))
      .nativeElement;
    inputElement4 = testFixture4.debugElement.query(By.css('select'))
      .nativeElement;
    inputElement5 = testFixture5.debugElement.query(By.css('input'))
      .nativeElement;
    inputElement6 = testFixture6.debugElement.query(By.css('input'))
      .nativeElement;
    inputElement7 = testFixture7.debugElement.query(By.css('input'))
      .nativeElement;

    errorElement1 = testFixture1.debugElement.query(By.css('span'))
      .nativeElement;
    errorElement2 = testFixture2.debugElement.query(By.css('span'))
      .nativeElement;
    errorElement3 = testFixture3.debugElement.query(By.css('span'))
      .nativeElement;
    errorElement4 = testFixture4.debugElement.query(By.css('span'))
      .nativeElement;
    errorElement5 = testFixture5.debugElement.query(By.css('span'))
      .nativeElement;
    errorElement6 = testFixture6.debugElement.query(By.css('span'))
      .nativeElement;
    errorElement7 = testFixture7.debugElement.query(By.css('span'))
      .nativeElement;
  });

  it('should create itself', () => {
    expect(component1).toBeTruthy();
    expect(component2).toBeTruthy();
    expect(component3).toBeTruthy();
    expect(component4).toBeTruthy();
    expect(component5).toBeTruthy();
    expect(component6).toBeTruthy();
    expect(component7).toBeTruthy();
  });

  it('should add classes to container when additionalClasses has a value', () => {
    inputContainerComponent1.additionalClasses = 'sprk-u-man';
    inputContainerFixture1.detectChanges();
    expect(inputContainerElement1.classList.toString()).toEqual(
      'sprk-b-InputContainer sprk-u-man',
    );
  });

  it('should add classes to select container when additionalClasses has a value', () => {
    inputContainerComponent3.additionalClasses = 'sprk-u-man';
    inputContainerFixture3.detectChanges();
    expect(inputContainerElement3.classList.toString()).toEqual(
      'sprk-b-InputContainer sprk-u-man',
    );
  });

  it('should set the for on the label to match the id on the input', () => {
    expect(labelElement1.getAttribute('for')).toEqual(inputElement1.id);
  });

  it('should set the for on the label to match the id on the input if there is no for', () => {
    expect(labelElement5.getAttribute('for')).toEqual(inputElement5.id);
  });

  it('should set the for on the label to match the id on the input if there is a for but no id', () => {
    expect(labelElement6.getAttribute('for')).toEqual(inputElement6.id);
  });

  it('should set the for on the label to match the id on the select', () => {
    expect(labelElement3.getAttribute('for')).toEqual(inputElement3.id);
  });

  it('should set the aria-describedby attribute on the input to match the id on the error field', () => {
    expect(inputElement1.getAttribute('aria-describedby')).toEqual(
      errorElement1.id,
    );
  });

  it('should set the aria-describedby attribute on the select to match the id on the error field', () => {
    expect(inputElement3.getAttribute('aria-describedby')).toEqual(
      errorElement3.id,
    );
  });

  it('should add the value of idString to data-id on the container', () => {
    inputContainerComponent1.idString = 'test-id-str';
    inputContainerFixture1.detectChanges();
    expect(inputContainerElement1.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should add the value of idString to data-id on the select container', () => {
    inputContainerComponent3.idString = 'test-id-str';
    inputContainerFixture3.detectChanges();
    expect(inputContainerElement3.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should add the huge input class to the container if the variant is huge', () => {
    inputContainerComponent1.variant = 'huge';
    inputContainerFixture1.detectChanges();
    expect(
      inputContainerElement1.classList.contains('sprk-b-InputContainer--huge'),
    ).toEqual(true);
  });

  it('should add the huge input class to the container if the variant is huge', () => {
    inputContainerComponent3.variant = 'huge';
    inputContainerFixture3.detectChanges();
    expect(
      inputContainerElement3.classList.contains('sprk-b-InputContainer--huge'),
    ).toEqual(true);
  });

  it('should not change the input id or label for if they match', () => {
    expect(inputElement7.getAttribute('id')).toBe('test-7');
    expect(labelElement7.getAttribute('for')).toEqual('test-7');
  });

  it('should use the input id value for the "for" value if mismatching', () => {
    expect(inputElement2.getAttribute('id')).toBe('example-id');
    expect(labelElement2.getAttribute('for')).toBe('example-id');
  });

  it('should use the select id value for the "for" value if mismatching', () => {
    expect(inputElement4.getAttribute('id')).toBe('example-id');
    expect(labelElement4.getAttribute('for')).toBe('example-id');
  });

  it('should allow custom error container id for input', () => {
    expect(inputElement2.getAttribute('aria-describedby')).toBe(
      'example-error',
    );
    expect(errorElement2.getAttribute('id')).toBe('example-error');
  });

  it('should allow custom error container id for select', () => {
    expect(inputElement4.getAttribute('aria-describedby')).toBe(
      'example-error',
    );
    expect(errorElement4.getAttribute('id')).toBe('example-error');
  });
});
