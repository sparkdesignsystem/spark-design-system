import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results.directive';

@Component({
  selector: 'sprk-test',
  template: ` <input sprkInput id="with-value" value="Initial Value" /> `,
})
class TestComponent {}

describe('Spark Autocomplete Results Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkAutocompleteResultsDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  // it should add the right class
  // additionalclasses?
  // analyticsstring?
  // idstring?
});
