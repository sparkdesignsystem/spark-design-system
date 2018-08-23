import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SprkSelectionInputDirective } from './sprk-selection-input.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `
  <input
  value="hi"
  type="text"
  additionalClasses="sprk-u-man"
  placeholder="Enter some input."
  sprk-selection-input>
  `
})
class TestComponent {};

describe('SprkSelectionInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkSelectionInputDirective,
        TestComponent
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(inputElement.nativeElement.classList.toString())
      .toEqual('sprk-u-man');
  });
});
