import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SparkIconInputContainerComponent } from './sprk-icon-input-container.component';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-icon-input-container iconContainerClasses="sprk-u-man">
        <label sprkLabel>Label!</label>
        <div sprk-input-icon>Icon</div>
        <input sprkInput>
        <p sprkHelperText>Helper Text!</p>
        <span sprkFieldError>
          <div class="sprk-b-ErrorText">Error</div>
        </span>
    </sprk-icon-input-container>
  `
})
class TestComponent {}

describe('SparkIconInputContainerComponent', () => {
  let testFixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  let inputContainerFixture: ComponentFixture<SparkIconInputContainerComponent>;
  let inputContainerComponent: SparkIconInputContainerComponent;
  let inputContainerElement: HTMLElement;
  let iconWrapperElement: HTMLElement;

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
        SparkIconInputContainerComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestComponent);
    component = testFixture.componentInstance;

    inputContainerFixture = TestBed.createComponent(
      SparkIconInputContainerComponent
    );
    inputContainerComponent = inputContainerFixture.componentInstance;

    inputContainerElement = inputContainerFixture.nativeElement.querySelector(
      'div'
    );
    iconWrapperElement = inputContainerElement.querySelector('div');

    labelElement = testFixture.debugElement.query(By.css('label'))
      .nativeElement;
    inputElement = testFixture.debugElement.query(By.css('input'))
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
      'sprk-b-InputContainer sprk-b-InputContainer--icon sprk-u-man'
    );
  });

  it('should set the for on the label to match the id on the input', () => {
    expect(labelElement.getAttribute('for')).toEqual(inputElement.id);
  });

  it('should set the aria-describedby attribute on the input to match the id on the error field', () => {
    expect(inputElement.getAttribute('aria-describedby')).toEqual(
      errorElement.id
    );
  });
});
