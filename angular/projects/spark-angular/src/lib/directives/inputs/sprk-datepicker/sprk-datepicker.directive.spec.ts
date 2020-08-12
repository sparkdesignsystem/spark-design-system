import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkDatepickerDirective } from './sprk-datepicker.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <input type="text" placeholder="MM/DD/YYYY" sprkDatepicker />
    <input
      type="text"
      placeholder="MM/DD/YYYY"
      sprkDatepicker
      [isValid]="testVal"
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
  let inputElementInvalid: HTMLElement;

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
    inputElementInvalid = fixture.nativeElement.querySelectorAll('input')[1];
    expect(component).toBeTruthy();
  });

  it('should add correct classes to the element', () => {
    expect(inputElement.classList.contains('sprk-b-TextInput')).toEqual(true);
    expect(inputElement.classList.contains('sprk-b-TextInput')).toEqual(true);
    expect(
      inputElement.classList.contains('sprk-b-TextInput--has-svg-icon'),
    ).toEqual(true);
  });

  it('should set the data-analytics attribute to the value of idString', () => {
    expect(inputElement.getAttribute('data-analytics')).toEqual('test-str');
  });

  it('should add the error CSS class when isValid is false', () => {
    expect(inputElement.classList.contains('sprk-b-TextInput--error')).toEqual(
      true,
    );
  });

  it('should not add the error CSS class when isValid is true', () => {
    expect(
      inputElementInvalid.classList.contains('sprk-b-TextInput--error'),
    ).toEqual(false);
  });

  it('should add the error CSS class when isValid is dynamically set to true', () => {
    expect(inputElement.classList.contains('sprk-b-TextInput--error')).toEqual(
      true,
    );
    component.testVal = true;
    fixture.detectChanges();
    expect(
      inputElementInvalid.classList.contains('sprk-b-TextInput--error'),
    ).toEqual(false);
  });
});
