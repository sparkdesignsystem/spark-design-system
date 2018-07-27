import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SprkDatepickerDirective } from './sprk-datepicker.directive';

@Component({
  selector: 'test',
  template: `
    <input
      type="text"
      placeholder="MM/DD/YYYY"
      sprk-datepicker>
    `
})
class TestComponent {}

describe('SprkDatePickerDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: 'TinyDatePicker',
        useValue: function() { return { on: function() {} }; }
      }],
      declarations: [SprkDatepickerDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputElement = fixture.nativeElement.querySelector('input');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should pop up on click')
});
