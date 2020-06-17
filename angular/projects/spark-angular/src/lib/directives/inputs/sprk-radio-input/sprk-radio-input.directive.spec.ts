import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkRadioInputDirective } from './sprk-radio-input.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <input
      value="test"
      type="radio"
      placeholder="Enter some text."
      sprkRadioInput
    />
  `
})
class TestComponent {}

describe('SprkRadioInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkRadioInputDirective, TestComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should add the correct classes to the applied element', () => {
    expect(inputElement.nativeElement.classList.toString()).toEqual(
      'ssprk-b-SelectionInput sprk-b-Radio__input'
    );
  });

  it('should add the correct classes to the applied element when variant is huge', () => {
    component.variant = 'huge';
    fixture.detectChanges();
    expect(inputElement.nativeElement.classList.toString()).toEqual(
      'ssprk-b-SelectionInput sprk-b-Radio__input'
    );
  });
});
