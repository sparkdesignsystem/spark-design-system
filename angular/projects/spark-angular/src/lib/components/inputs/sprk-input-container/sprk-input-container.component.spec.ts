import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SparkInputContainerComponent } from './sprk-input-container.component';

@Component({
  selector: 'sprk-test',
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
  selector: 'sprk-test',
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

describe('SparkInputContainerComponent', () => {
  let component: Test1Component;
  let component2: Test2Component;

  let testFixture: ComponentFixture<Test1Component>;
  let testFixture2: ComponentFixture<Test2Component>;

  let inputContainerComponent: SparkInputContainerComponent;
  let inputContainerComponent2: SparkInputContainerComponent;

  let inputContainerFixture: ComponentFixture<SparkInputContainerComponent>;
  let inputContainerFixture2: ComponentFixture<SparkInputContainerComponent>;

  let inputContainerElement: HTMLElement;
  let inputContainerElement2: HTMLElement;

  let labelElement: HTMLElement;
  let inputElement: HTMLElement;
  let errorElement: HTMLElement;

  let labelElement2: HTMLElement;
  let inputElement2: HTMLElement;
  let errorElement2: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkLabelDirective,
        SprkInputDirective,
        SprkFieldErrorDirective,
        Test1Component,
        Test2Component,
        SparkInputContainerComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    testFixture = TestBed.createComponent(Test1Component);
    testFixture2 = TestBed.createComponent(Test2Component);

    component = testFixture.componentInstance;
    component2 = testFixture2.componentInstance;

    inputContainerFixture = TestBed.createComponent(
      SparkInputContainerComponent,
    );

    inputContainerFixture2 = TestBed.createComponent(
      SparkInputContainerComponent,
    );

    inputContainerComponent = inputContainerFixture.componentInstance;
    inputContainerComponent2 = inputContainerFixture2.componentInstance;

    inputContainerComponent.ngOnInit();
    inputContainerComponent2.ngOnInit();

    testFixture.detectChanges();
    testFixture2.detectChanges();
    inputContainerFixture.detectChanges();
    inputContainerFixture2.detectChanges();

    inputContainerElement = inputContainerFixture.nativeElement.querySelector(
      'div',
    );
    inputContainerElement2 = inputContainerFixture2.nativeElement.querySelector(
      'div',
    );

    labelElement = testFixture.debugElement.query(By.css('label'))
      .nativeElement;
    labelElement2 = testFixture2.debugElement.query(By.css('label'))
      .nativeElement;

    inputElement = testFixture.debugElement.query(By.css('input'))
      .nativeElement;
    inputElement2 = testFixture2.debugElement.query(By.css('input'))
      .nativeElement;

    errorElement = testFixture.debugElement.query(By.css('span')).nativeElement;
    errorElement2 = testFixture2.debugElement.query(By.css('span'))
      .nativeElement;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
    expect(component2).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    inputContainerComponent.additionalClasses = 'sprk-u-man';
    inputContainerFixture.detectChanges();
    expect(inputContainerElement.classList.toString()).toEqual(
      'sprk-b-InputContainer sprk-u-man',
    );
  });

  it('should set the for on the label to match the id on the input', () => {
    expect(labelElement.getAttribute('for')).toEqual(inputElement.id);
  });

  it('should set the aria-describedby attribute on the input to match the id on the error field', () => {
    expect(inputElement.getAttribute('aria-describedby')).toEqual(
      errorElement.id,
    );
  });

  it('should add the value of idString to data-id on the element', () => {
    inputContainerComponent.idString = 'test-id-str';
    inputContainerFixture.detectChanges();
    expect(inputContainerElement.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should add the huge input class to the container if the variant is huge', () => {
    inputContainerComponent.variant = 'huge';
    inputContainerFixture.detectChanges();
    expect(
      inputContainerElement.classList.contains('sprk-b-InputContainer--huge'),
    ).toEqual(true);
  });

  it('should not change the id if one is existing', () => {
    inputElement.setAttribute('id', 'test-id');
    inputContainerFixture.detectChanges();
    expect(inputElement.getAttribute('id')).toBe('test-id');
  });

  it('should use the id value for the "for" value if mismatching', () => {
    expect(inputElement2.getAttribute('id')).toBe('example-id');
    expect(labelElement2.getAttribute('for')).toBe('example-id');
  });

  it('should allow custom error container id', () => {
    expect(inputElement2.getAttribute('aria-describedby')).toBe(
      'example-error',
    );
    expect(errorElement2.getAttribute('id')).toBe('example-error');
  });
});
