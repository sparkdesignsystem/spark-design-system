import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkDatepickerDirective } from './sprk-datepicker.directive';

@Component({
  selector: 'sprk-test',
  template: ` <input type="text" placeholder="MM/DD/YYYY" sprkDatepicker /> `,
})
class TestComponent {}

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
    expect(inputElement.classList.contains('sprk-u-Width-100')).toEqual(true);
  });
});
