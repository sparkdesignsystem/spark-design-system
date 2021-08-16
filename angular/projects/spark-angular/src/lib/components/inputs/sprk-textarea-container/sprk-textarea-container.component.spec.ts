import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkTextareaContainerComponent } from './sprk-textarea-container.component';
import { SprkTextareaDirective } from '../../../directives/inputs/sprk-textarea/sprk-textarea.directive';
@Component({
  selector: 'sprk-test-1',
  template: `
    <sprk-textarea-container>
      <label sprkLabel>Label!</label>
      <textarea sprkTextarea></textarea>
      <p sprkHelperText>
        Optional helper text, used to clarify the field's intent.
      </p>
      <span sprkFieldError>Error Message!</span>
    </sprk-textarea-container>
  `,
})
class TestComponent1 {}

@Component({
  selector: 'sprk-test-2',
  template: `
    <sprk-textarea-container>
      <label sprkLabel>Label!</label>
      <textarea sprkTextarea id="example-id"></textarea>
      <p sprkHelperText>
        Optional helper text, used to clarify the field's intent.
      </p>
      <span sprkFieldError>Error Message!</span>
    </sprk-textarea-container>
  `,
})
class TestComponent2 {}

@Component({
  selector: 'sprk-test-3',
  template: `
    <sprk-textarea-container>
      <label sprkLabel for="example-for">Label!</label>
      <textarea sprkTextarea></textarea>
      <p sprkHelperText>
        Optional helper text, used to clarify the field's intent.
      </p>
      <span sprkFieldError>Error Message!</span>
    </sprk-textarea-container>
  `,
})
class TestComponent3 {}

@Component({
  selector: 'sprk-test-4',
  template: `
    <sprk-textarea-container>
      <label sprkLabel for="example-for">Label!</label>
      <textarea sprkTextarea id="example-id"></textarea>
      <p sprkHelperText>
        Optional helper text, used to clarify the field's intent.
      </p>
      <span sprkFieldError id="example-error">Error Message!</span>
    </sprk-textarea-container>
  `,
})
class TestComponent4 {}

describe('SprkTextareaContainerComponent', () => {
  let component1: TestComponent1;
  let component2: TestComponent2;
  let component3: TestComponent3;
  let component4: TestComponent4;

  let testFixture1: ComponentFixture<TestComponent1>;
  let testFixture2: ComponentFixture<TestComponent2>;
  let testFixture3: ComponentFixture<TestComponent3>;
  let testFixture4: ComponentFixture<TestComponent4>;

  let inputContainerComponent1: SprkTextareaContainerComponent;
  let inputContainerComponent2: SprkTextareaContainerComponent;
  let inputContainerComponent3: SprkTextareaContainerComponent;
  let inputContainerComponent4: SprkTextareaContainerComponent;

  let inputContainerFixture1: ComponentFixture<SprkTextareaContainerComponent>;
  let inputContainerElement1: HTMLElement;

  let inputContainerFixture2: ComponentFixture<SprkTextareaContainerComponent>;
  let inputContainerElement2: HTMLElement;

  let inputContainerFixture3: ComponentFixture<SprkTextareaContainerComponent>;
  let inputContainerElement3: HTMLElement;

  let inputContainerFixture4: ComponentFixture<SprkTextareaContainerComponent>;
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
        SprkTextareaContainerComponent,
        SprkLabelDirective,
        SprkTextareaDirective,
        SprkFieldErrorDirective,
        TestComponent1,
        TestComponent2,
        TestComponent3,
        TestComponent4,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    testFixture1 = TestBed.createComponent(TestComponent1);
    testFixture2 = TestBed.createComponent(TestComponent2);
    testFixture3 = TestBed.createComponent(TestComponent3);
    testFixture4 = TestBed.createComponent(TestComponent4);

    component1 = testFixture1.componentInstance;
    component2 = testFixture2.componentInstance;
    component3 = testFixture3.componentInstance;
    component4 = testFixture4.componentInstance;

    inputContainerFixture1 = TestBed.createComponent(
      SprkTextareaContainerComponent,
    );
    inputContainerFixture2 = TestBed.createComponent(
      SprkTextareaContainerComponent,
    );
    inputContainerFixture3 = TestBed.createComponent(
      SprkTextareaContainerComponent,
    );
    inputContainerFixture4 = TestBed.createComponent(
      SprkTextareaContainerComponent,
    );

    inputContainerComponent1 = inputContainerFixture1.componentInstance;
    inputContainerComponent2 = inputContainerFixture2.componentInstance;
    inputContainerComponent3 = inputContainerFixture3.componentInstance;
    inputContainerComponent4 = inputContainerFixture4.componentInstance;

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
    inputElement1 = testFixture1.debugElement.query(By.css('textarea'))
      .nativeElement;
    errorElement1 = testFixture1.debugElement.query(By.css('span'))
      .nativeElement;

    labelElement2 = testFixture2.debugElement.query(By.css('label'))
      .nativeElement;
    inputElement2 = testFixture2.debugElement.query(By.css('textarea'))
      .nativeElement;
    errorElement2 = testFixture2.debugElement.query(By.css('span'))
      .nativeElement;

    labelElement3 = testFixture3.debugElement.query(By.css('label'))
      .nativeElement;
    inputElement3 = testFixture3.debugElement.query(By.css('textarea'))
      .nativeElement;
    errorElement3 = testFixture3.debugElement.query(By.css('span'))
      .nativeElement;

    labelElement4 = testFixture4.debugElement.query(By.css('label'))
      .nativeElement;
    inputElement4 = testFixture4.debugElement.query(By.css('textarea'))
      .nativeElement;
    errorElement4 = testFixture4.debugElement.query(By.css('span'))
      .nativeElement;

    inputContainerComponent1.ngOnInit();
    inputContainerComponent2.ngOnInit();
    inputContainerComponent3.ngOnInit();
    inputContainerComponent4.ngOnInit();

    testFixture1.detectChanges();
    testFixture2.detectChanges();
    testFixture3.detectChanges();
    testFixture4.detectChanges();
  });

  it('should create itself', () => {
    expect(component1).toBeTruthy();
    expect(component2).toBeTruthy();
    expect(component3).toBeTruthy();
    expect(component4).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    inputContainerComponent1.additionalClasses = 'sprk-u-man';
    inputContainerFixture1.detectChanges();
    expect(inputContainerElement1.classList.toString()).toEqual(
      'sprk-b-InputContainer sprk-b-InputContainer--textarea sprk-u-man',
    );
  });

  it('should set the for on the label to match the id on the input', () => {
    expect(labelElement1.getAttribute('for')).toEqual(inputElement1.id);
  });

  it('should set the aria-describedby attribute on the input to match the id on the error field', () => {
    expect(inputElement1.getAttribute('aria-describedby')).toEqual(
      errorElement1.id,
    );
  });

  it('should add the value of idString to the data-id on the textarea', () => {
    inputContainerComponent1.idString = 'test-id-str';
    inputContainerFixture1.detectChanges();
    expect(inputContainerElement1.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should set the for on the label to match the id on the input if there is no for', () => {
    expect(labelElement2.getAttribute('for')).toEqual(inputElement2.id);
  });

  it('should set the for on the label to match the id on the input if there is a for but no id', () => {
    expect(labelElement3.getAttribute('for')).toEqual(inputElement3.id);
  });

  it('should use the input id value for the "for" value if mismatching', () => {
    expect(inputElement4.getAttribute('id')).toBe('example-id');
    expect(labelElement4.getAttribute('for')).toBe('example-id');
  });

  it('should allow custom error container id for textarea', () => {
    expect(inputElement4.getAttribute('aria-describedby')).toBe(
      'example-error',
    );
    expect(errorElement4.getAttribute('id')).toBe('example-error');
  });
});
