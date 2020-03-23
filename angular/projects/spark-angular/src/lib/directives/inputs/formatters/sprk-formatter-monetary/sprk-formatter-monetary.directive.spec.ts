import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFormatterMonetaryDirective } from './sprk-formatter-monetary.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <input
      value="hi"
      type="text"
      placeholder="Enter some input."
      sprkFormatterMonetary
    />
    <input
      type="text"
      class="test2"
      pattern="^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$"
      sprkFormatterMonetary
      sprkInput
    />
  `
})
class TestComponent {}

describe('SprkFormatterMonetaryDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;
  let input2Element: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkFormatterMonetaryDirective, TestComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'));
    input2Element = fixture.debugElement.query(By.css('input.test2'));
  });

  it('should set 0.00 if there is no value', () => {
    inputElement.nativeElement.value = '';
    inputElement.nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('0.00');
  });

  it('should do nothing if the value is not a value that can be formatted', () => {
    inputElement.nativeElement.value = 'abc';
    inputElement.nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('abc');
  });

  it('should format into X,XXX.00 if the value can be formatted (just numbers)', () => {
    inputElement.nativeElement.value = '1124';
    inputElement.nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('1,124.00');
  });

  it('should format into X,XXX.00 if the value can be formatted (commas)', () => {
    inputElement.nativeElement.value = '123,123';
    inputElement.nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('123,123.00');
  });

  it('should format into X,XXX.00 if the value can be formatted (commas and decimals)', () => {
    inputElement.nativeElement.value = '123,123.216';
    inputElement.nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('123,123.22');
  });

  it('if input is invalid, it should not format', () => {
    const testValue = '123,123.21dd';
    input2Element.nativeElement.value = testValue;
    input2Element.nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(input2Element.nativeElement.value).toEqual(testValue);
  });
});
