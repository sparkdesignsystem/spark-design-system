import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkSelectionInputDirective } from './sprk-selection-input.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <input
      value="hi"
      type="text"
      placeholder="Enter some input."
      sprkSelectionInput
    />
  `
})
class TestComponent {}

describe('SprkSelectionInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkSelectionInputDirective, TestComponent]
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
      'sprk-b-SelectionInput'
    );
  });
});
