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

  it('should stand up, even if TinyDatePicker is not defined', () => {
    TestBed.configureTestingModule({
      providers: [{
        provide: 'TinyDatePicker',
        useValue: null
      }],
      declarations: [SprkDatepickerDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputElement = fixture.nativeElement.querySelector('input');
    expect(component).toBeTruthy();
  })

  it('should create itself and trigger when focused', (done) => {
    TestBed.configureTestingModule({
      providers: [{
        provide: 'TinyDatePicker',
        useValue: window.TinyDatePicker // loaded in karma.conf.js
      },],
      declarations: [SprkDatepickerDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputElement = fixture.nativeElement.querySelector('input');
    expect(component).toBeTruthy();
    inputElement.dispatchEvent(new Event('focus'));
    fixture.detectChanges();

    setTimeout(() => {
      document.querySelector('.dp-day').dispatchEvent(new Event('click'));
      done();
    }, 1000);
  });
});
