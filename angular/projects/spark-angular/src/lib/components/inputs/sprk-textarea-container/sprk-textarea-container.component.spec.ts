import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkTextareaContainerComponent } from './sprk-textarea-container.component';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-textarea-container>
      <label sprkLabel>Label!</label>
      <textarea sprkInput></textarea>
      <p sprkHelperText>Helper Text!</p>
      <span sprkFieldError>Error Message!</span>
    </sprk-textarea-container>
  `,
})
class TestComponent {}

describe('SprkTextareaContainerComponent', () => {
  let testFixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  let inputContainerFixture: ComponentFixture<SprkTextareaContainerComponent>;
  let inputContainerComponent: SprkTextareaContainerComponent;
  let inputContainerElement: HTMLElement;

  let labelElement: HTMLElement;
  let inputElement: HTMLElement;
  let errorElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkLabelDirective,
        SprkInputDirective,
        SprkFieldErrorDirective,
        TestComponent,
        SprkTextareaContainerComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestComponent);
    component = testFixture.componentInstance;

    inputContainerFixture = TestBed.createComponent(
      SprkTextareaContainerComponent,
    );
    inputContainerComponent = inputContainerFixture.componentInstance;

    inputContainerElement = inputContainerFixture.nativeElement.querySelector(
      'div',
    );

    labelElement = testFixture.debugElement.query(By.css('label'))
      .nativeElement;
    inputElement = testFixture.debugElement.query(By.css('textarea'))
      .nativeElement;
    errorElement = testFixture.debugElement.query(By.css('span')).nativeElement;

    inputContainerComponent.ngOnInit();
    testFixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    inputContainerComponent.additionalClasses = 'sprk-u-man';
    inputContainerFixture.detectChanges();
    expect(inputContainerElement.classList.toString()).toEqual(
      'sprk-b-InputContainer sprk-b-InputContainer--textarea sprk-u-man',
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

  it('should add the value of idString to the data-id on the textarea', () => {
    inputContainerComponent.idString = 'test-id-str';
    inputContainerFixture.detectChanges();
    expect(inputContainerElement.getAttribute('data-id')).toBe('test-id-str');
  });
});
