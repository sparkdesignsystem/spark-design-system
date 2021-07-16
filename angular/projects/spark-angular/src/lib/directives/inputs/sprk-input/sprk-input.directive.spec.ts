import { Component, DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkInputDirective } from './sprk-input.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <input sprkInput id="with-value" value="Initial Value" />
    <input
      sprkInput
      id="huge-input-value"
      variant="huge"
      value="Initial Value"
    />
    <input sprkInput id="huge-input-no-value" variant="huge" />
    <input
      sprkInput
      id="no-value"
      idString="test-str"
      analyticsString="test-str"
      hasIcon="true"
    />
    <select sprkInput id="select"></select>
    <textarea sprkInput id="textarea"></textarea>
  `,
})
class TestComponent {}

describe('Spark Input Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElementWithValue: DebugElement;
  let hugeInputElementWithValue: DebugElement;
  let hugeInputElementNoValue: DebugElement;
  let inputElementNoValue: DebugElement;
  let selectElement: DebugElement;
  let textareaElement: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkInputDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    inputElementWithValue = fixture.debugElement.query(By.css('#with-value'));
    hugeInputElementWithValue = fixture.debugElement.query(
      By.css('#huge-input-value'),
    );
    hugeInputElementNoValue = fixture.debugElement.query(
      By.css('#huge-input-no-value'),
    );
    inputElementNoValue = fixture.debugElement.query(By.css('#no-value'));
    selectElement = fixture.debugElement.query(By.css('#select'));
    textareaElement = fixture.debugElement.query(By.css('#textarea'));
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the has-floating-label class on change if the input value is not empty', () => {
    hugeInputElementWithValue.nativeElement.value = 'Test Value!';
    hugeInputElementWithValue.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(
      hugeInputElementWithValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(true);
  });

  it('should not add the has-floating-label class on change if the input value is empty', () => {
    hugeInputElementWithValue.nativeElement.value = '';
    hugeInputElementWithValue.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(
      hugeInputElementWithValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
  });

  it('should add the has-floating-label class on load if the input value is not empty', () => {
    expect(
      hugeInputElementWithValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(true);
  });

  it('should not add the has-floating-label class on load if the input value is empty', () => {
    expect(
      hugeInputElementNoValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
  });

  it('should not add the has-floating-label class to inputs that are not huge', () => {
    expect(
      inputElementWithValue.nativeElement.classList.contains(
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

  it('should set the data-analytics attribute to the value of analyticsString', () => {
    expect(
      inputElementNoValue.nativeElement.getAttribute('data-analytics'),
    ).toEqual('test-str');
  });

  it('should set the data-id attribute to the value of idString', () => {
    expect(inputElementNoValue.nativeElement.getAttribute('data-id')).toEqual(
      'test-str',
    );
  });

  it("should not add the floating label class on change if the input value isn't empty and the variant is not huge", () => {
    expect(
      inputElementNoValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
    inputElementNoValue.nativeElement.value = 'now it has a value';
    inputElementNoValue.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(
      inputElementNoValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
  });
});
