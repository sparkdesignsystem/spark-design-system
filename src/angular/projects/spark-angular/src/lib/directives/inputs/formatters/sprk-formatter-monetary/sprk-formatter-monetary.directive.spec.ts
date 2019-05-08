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
  `
})
class TestComponent {}

describe('SprkFormatterMonetaryDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkFormatterMonetaryDirective, TestComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'));
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
});
