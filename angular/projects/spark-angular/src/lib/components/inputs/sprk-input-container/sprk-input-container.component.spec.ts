import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkSelectDirective } from '../../../directives/inputs/sprk-select/sprk-select.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SparkInputContainerComponent } from './sprk-input-container.component';
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
      <select id="select-normal-1" data-id="select-1" sprkSelect>
        <option value="none">Please choose...</option>
        <option value="1">Option 1</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
        </optgroup>
      </select>
      <sprk-icon
        iconType="chevron-down"
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
        iconType="chevron-down"
        additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
        sprk-select-icon
      ></sprk-icon>
      <span sprkFieldError id="example-error">Error Message!</span>
    </sprk-input-container>
  `,
})
class Test4Component {}

describe('SparkInputContainerComponent', () => {
  let component1: Test1Component;
  let component2: Test2Component;
  let component3: Test3Component;
  let component4: Test4Component;

  let testFixture1: ComponentFixture<Test1Component>;
  let testFixture2: ComponentFixture<Test2Component>;
  let testFixture3: ComponentFixture<Test3Component>;
  let testFixture4: ComponentFixture<Test4Component>;

  let inputContainerComponent1: SparkInputContainerComponent;
  let inputContainerComponent2: SparkInputContainerComponent;
  let inputContainerComponent3: SparkInputContainerComponent;
  let inputContainerComponent4: SparkInputContainerComponent;

  let inputContainerFixture1: ComponentFixture<SparkInputContainerComponent>;
  let inputContainerFixture2: ComponentFixture<SparkInputContainerComponent>;
  let inputContainerFixture3: ComponentFixture<SparkInputContainerComponent>;
  let inputContainerFixture4: ComponentFixture<SparkInputContainerComponent>;

  let inputContainerElement1: HTMLElement;
  let inputContainerElement2: HTMLElement;
  let inputContainerElement3: HTMLElement;
  let inputContainerElement4: HTMLElement;

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
        SparkInputContainerComponent,
        SprkIconComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    testFixture1 = TestBed.createComponent(Test1Component);
    testFixture2 = TestBed.createComponent(Test2Component);
    testFixture3 = TestBed.createComponent(Test3Component);
    testFixture4 = TestBed.createComponent(Test4Component);

    component1 = testFixture1.componentInstance;
    component2 = testFixture2.componentInstance;
    component3 = testFixture3.componentInstance;
    component4 = testFixture4.componentInstance;

    inputContainerFixture1 = TestBed.createComponent(
      SparkInputContainerComponent,
    );
    inputContainerFixture2 = TestBed.createComponent(
      SparkInputContainerComponent,
    );
    inputContainerFixture3 = TestBed.createComponent(
      SparkInputContainerComponent,
    );
    inputContainerFixture4 = TestBed.createComponent(
      SparkInputContainerComponent,
    );

    inputContainerComponent1 = inputContainerFixture1.componentInstance;
    inputContainerComponent2 = inputContainerFixture2.componentInstance;
    inputContainerComponent3 = inputContainerFixture3.componentInstance;
    inputContainerComponent4 = inputContainerFixture4.componentInstance;

    inputContainerComponent1.ngOnInit();
    inputContainerComponent2.ngOnInit();
    inputContainerComponent3.ngOnInit();
    inputContainerComponent4.ngOnInit();

    testFixture1.detectChanges();
    testFixture2.detectChanges();
    testFixture3.detectChanges();
    testFixture4.detectChanges();

    inputContainerFixture1.detectChanges();
    inputContainerFixture2.detectChanges();
    inputContainerFixture3.detectChanges();
    inputContainerFixture4.detectChanges();

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
    labelElement1 = testFixture1.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement2 = testFixture2.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement3 = testFixture3.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement4 = testFixture4.debugElement.query(By.css('label'))
      .nativeElement;

    inputElement1 = testFixture1.debugElement.query(By.css('input'))
      .nativeElement;
    inputElement2 = testFixture2.debugElement.query(By.css('input'))
      .nativeElement;
    inputElement3 = testFixture3.debugElement.query(By.css('select'))
      .nativeElement;
    inputElement4 = testFixture4.debugElement.query(By.css('select'))
      .nativeElement;

    errorElement1 = testFixture1.debugElement.query(By.css('span'))
      .nativeElement;
    errorElement2 = testFixture2.debugElement.query(By.css('span'))
      .nativeElement;
    errorElement3 = testFixture3.debugElement.query(By.css('span'))
      .nativeElement;
    errorElement4 = testFixture4.debugElement.query(By.css('span'))
      .nativeElement;
  });

  it('should create itself', () => {
    expect(component1).toBeTruthy();
    expect(component2).toBeTruthy();
    expect(component3).toBeTruthy();
    expect(component4).toBeTruthy();
  });

  it('should add classes to input when additionalClasses has a value', () => {
    inputContainerComponent1.additionalClasses = 'sprk-u-man';
    inputContainerFixture1.detectChanges();
    expect(inputContainerElement1.classList.toString()).toEqual(
      'sprk-b-InputContainer sprk-u-man',
    );
  });

  it('should add classes to select when additionalClasses has a value', () => {
    inputContainerComponent3.additionalClasses = 'sprk-u-man';
    inputContainerFixture3.detectChanges();
    expect(inputContainerElement3.classList.toString()).toEqual(
      'sprk-b-InputContainer sprk-u-man',
    );
  });

  it('should set the for on the label to match the id on the input', () => {
    expect(labelElement1.getAttribute('for')).toEqual(inputElement1.id);
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

  it('should add the value of idString to data-id on the input', () => {
    inputContainerComponent1.idString = 'test-id-str';
    inputContainerFixture1.detectChanges();
    expect(inputContainerElement1.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should add the value of idString to data-id on the select', () => {
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

  it('should not change the input id if one is existing', () => {
    inputElement1.setAttribute('id', 'test-id');
    inputContainerFixture1.detectChanges();
    expect(inputElement1.getAttribute('id')).toBe('test-id');
  });

  it('should not change the select id if one is existing', () => {
    inputElement3.setAttribute('id', 'test-id');
    inputContainerFixture3.detectChanges();
    expect(inputElement3.getAttribute('id')).toBe('test-id');
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
