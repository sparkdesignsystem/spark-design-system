import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <ul
      sprkAutocompleteResults
      analyticsString="results1"
      idString="resultsId1"
      additionalClasses="testClass"
    ></ul>
    <ul sprkAutocompleteResults></ul>
  `,
})
class TestComponent {}

describe('Spark Autocomplete Results Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  let emptyElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkAutocompleteResultsDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelectorAll('ul')[0];
    emptyElement = fixture.nativeElement.querySelectorAll('ul')[1];

    fixture.detectChanges();
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct base class', () => {
    expect(emptyElement.classList.toString()).toEqual(
      'sprk-c-Autocomplete__results',
    );
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element.classList.toString()).toEqual(
      'sprk-c-Autocomplete__results testClass',
    );
  });

  it('should add a value for data-analytics if analyticsString has a value', () => {
    expect(element.getAttribute('data-analytics')).toEqual('results1');
  });

  it('should add a value for data-id if idString has a value', () => {
    expect(element.getAttribute('data-id')).toEqual('resultsId1');
  });
});
