import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkDatepickerDirective } from './sprk-datepicker.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <input
      type="text"
      placeholder="MM/DD/YYYY"
      sprkDatepicker
      idString="test-str"
      analyticsString="test"
    />
  `,
})
class TestComponent {
  testVal = false;
}

describe('SprkDatePickerDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: HTMLElement;

  it('should stand up, even if TinyDatePicker is not defined', () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'TinyDatePicker',
          useValue: null,
        },
      ],
      declarations: [SprkDatepickerDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputElement = fixture.nativeElement.querySelector('input');
    expect(component).toBeTruthy();
  });

  it('should add correct classes to the element', () => {
    expect(inputElement.classList.contains('sprk-b-TextInput')).toEqual(true);
    expect(inputElement.classList.contains('sprk-b-TextInput')).toEqual(true);
    expect(
      inputElement.classList.contains('sprk-b-TextInput--has-svg-icon'),
    ).toEqual(true);
  });

  it('should set the data-id attribute to the value of idString', () => {
    expect(inputElement.getAttribute('data-id')).toEqual('test-str');
  });

  it('should set the data-analytics attribute to the value of analyticsString', () => {
    expect(inputElement.getAttribute('data-analytics')).toEqual('test');
  });
});
