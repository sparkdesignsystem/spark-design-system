import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkInputDirective } from './sprk-input.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <input sprkInput id="with-value" value="Initial Value" />
    <input sprkInput id="no-value" idString="test-str" hasIcon="true" />
    <select sprkInput id="select"></select>
    <textarea sprkInput id="textarea"></textarea>
  `,
})
class TestComponent {}

describe('Spark Input Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElementWithValue: DebugElement;
  let inputElementNoValue: DebugElement;
  let selectElement: DebugElement;
  let textareaElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkInputDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    inputElementWithValue = fixture.debugElement.query(By.css('#with-value'));
    inputElementNoValue = fixture.debugElement.query(By.css('#no-value'));
    selectElement = fixture.debugElement.query(By.css('#select'));
    textareaElement = fixture.debugElement.query(By.css('#textarea'));
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the has-floating-label class on change if the input value is not empty', () => {
    inputElementWithValue.nativeElement.value = 'Test Value!';
    inputElementWithValue.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(
      inputElementWithValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(true);
  });

  it('should not add the has-floating-label class on change if the input value is empty', () => {
    inputElementWithValue.nativeElement.value = '';
    inputElementWithValue.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(
      inputElementWithValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
  });

  it('should add the has-floating-label class on load if the input value is not empty', () => {
    expect(
      inputElementWithValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(true);
  });

  it('should not add the has-floating-label class on load if the input value is empty', () => {
    expect(
      inputElementNoValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
  });

  it('should add the sprk-b-Select class on load if the input is a SELECT', () => {
    expect(
      selectElement.nativeElement.classList.contains('sprk-b-Select'),
    ).toEqual(true);
  });

  it('should add the sprk-b-TextInput class on load if the input is a TEXTAREA', () => {
    expect(
      textareaElement.nativeElement.classList.contains('sprk-b-TextInput'),
    ).toEqual(true);
  });

  it('should add the sprk-b-TextArea class on load if the input is a TEXTAREA', () => {
    expect(
      textareaElement.nativeElement.classList.contains('sprk-b-TextArea'),
    ).toEqual(true);
  });

  it('should set the data-analytics attribute to the value of idString', () => {
    expect(
      inputElementNoValue.nativeElement.getAttribute('data-analytics'),
    ).toEqual('test-str');
  });

  it('should add the error CSS class when isValid is false', () => {
    expect(
      inputElementNoValue.nativeElement.classList.contains(
        'sprk-b-TextInput--error',
      ),
    ).toEqual(true);
  });

  // it('should add the icon CSS class when hasIcon is true', () => {
  //   expect(inputElementNoValue.nativeElement.classList.contains('sprk-b-TextInput--has-svg-icon')).toEqual(true);
  // });
});
