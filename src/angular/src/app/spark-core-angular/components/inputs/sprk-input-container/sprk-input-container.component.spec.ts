import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkInputContainerComponent } from './sprk-input-container.component';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `
    <sprk-input-container>
        <label sprk-label>Label!</label>
        <input sprk-input>
        <div sprk-input-icon>Icon</div>
        <p sprk-helper-text>Helper Text!</p>
        <span sprk-field-error>Error Message!</span>
    </sprk-input-container>
  `
})
class TestComponent {}


describe('SparkInputContainerComponent', () => {
  let testFixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  let inputContainerFixture: ComponentFixture<SparkInputContainerComponent>;
  let inputContainerComponent: SparkInputContainerComponent;
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
        SparkInputContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestComponent);
    component = testFixture.componentInstance;

    inputContainerFixture = TestBed.createComponent(SparkInputContainerComponent);
    inputContainerComponent = inputContainerFixture.componentInstance;

    inputContainerElement = inputContainerFixture.nativeElement.querySelector('div');
    iconWrapperElement = inputContainerElement.querySelector('div');

    labelElement = testFixture.debugElement.query(By.css('label')).nativeElement;
    inputElement = testFixture.debugElement.query(By.css('input')).nativeElement;
    errorElement = testFixture.debugElement.query(By.css('span')).nativeElement;

    inputContainerComponent.ngOnInit();
    testFixture.detectChanges();
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    inputContainerComponent.additionalClasses = 'sprk-u-man';
    inputContainerFixture.detectChanges();
    expect(inputContainerElement.classList.toString()).toEqual('sprk-b-InputContainer sprk-u-man');
  })

  it('should add classes to the icon container when iconContainerClasses', () => {
    inputContainerComponent.iconContainerClasses = 'sprk-u-man';
    inputContainerFixture.detectChanges();
    expect(iconWrapperElement.classList.toString()).toEqual('sprk-u-man');
  })

  it('should set the for on the label to match the id on the input', () => {
    expect(labelElement.getAttribute('for')).toEqual(inputElement.id);
  });

  it('should set the aria-describedby attribute on the input to match the id on the error field', () => {
    expect(inputElement.getAttribute('aria-describedby')).toEqual(errorElement.id);
  });
});
