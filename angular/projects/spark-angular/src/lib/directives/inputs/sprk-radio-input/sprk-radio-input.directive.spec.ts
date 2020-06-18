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

    <input
      value="test"
      type="radio"
      id="test"
      placeholder="Enter some text."
      sprkRadioInput
      variant="huge"
    />
  `,
})
class TestComponent {}

describe('SprkRadioInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;
  let itemElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkRadioInputDirective, TestComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'));
    itemElement = fixture.nativeElement.querySelectorAll('input')[1];
    fixture.detectChanges();
  });

  it('should add the correct classes to the applied element', () => {
    expect(inputElement.nativeElement.classList.toString()).toEqual(
      'sprk-b-SelectionInput sprk-b-Radio__input',
    );
  });

  it('should add the correct classes to the applied element when variant is huge', () => {
    expect(itemElement.classList.contains('sprk-b-Radio__input--huge')).toBe(
      true,
    );
  });
});
