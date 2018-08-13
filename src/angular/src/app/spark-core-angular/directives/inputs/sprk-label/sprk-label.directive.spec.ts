import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SprkSelectionLabelDirective } from '../sprk-selection-label/sprk-selection-label.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `
  <label
    additionalClasses="sprk-u-man"
    sprk-selection-label>Label!</label>`
})
class TestComponent {};

describe('SprkSelectionInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkSelectionLabelDirective,
        TestComponent
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('label'));
    fixture.detectChanges();
  });

  it('should add the correct label classes to the applied element', () => {
     expect(inputElement.nativeElement.classList.contains('sprk-b-Label'))
      .toEqual(true);
     expect(inputElement.nativeElement.classList.contains('sprk-b-Label--inline'))
      .toEqual(true);
     expect(inputElement.nativeElement.classList.contains('sprk-u-mls'))
      .toEqual(true);
  })

  it('should add classes if additionalClasses has a value', () => {
    expect(inputElement.nativeElement.classList.contains('sprk-u-man'))
      .toEqual(true);
  });
});
