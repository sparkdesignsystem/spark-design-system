import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkCheckboxInputDirective } from './sprk-checkbox-input.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <input
      value="test"
      type="checkbox"
      placeholder="Enter some text."
      sprkCheckboxInput
    />

    <input
      value="test"
      type="checkbox"
      id="test"
      placeholder="Enter some text."
      sprkCheckboxInput
      variant="huge"
      idString="test-id-str"
      analyticsString="test-analytics-str"
    />
  `,
})
class TestComponent {}

describe('SprkCheckboxInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;
  let itemElement: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkCheckboxInputDirective, TestComponent],
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
      'sprk-b-SelectionInput sprk-b-Checkbox__input',
    );
  });

  it('should add the correct classes to the applied element when variant is huge', () => {
    expect(itemElement.classList.contains('sprk-b-Checkbox__input--huge')).toBe(
      true,
    );
  });

  it('should add the value of idString to data-id on the element', () => {
    expect(itemElement.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should add the value of analyticsString to data-analytics on the element', () => {
    expect(itemElement.getAttribute('data-analytics')).toBe(
      'test-analytics-str',
    );
  });
});
