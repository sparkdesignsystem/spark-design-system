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
    expect(
      emptyElement.classList.contains('sprk-c-Autocomplete__results'),
    ).toEqual(true);
    expect(emptyElement.classList.length).toEqual(1);
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element.classList.contains('testClass')).toEqual(true);
    expect(element.classList.length).toEqual(2);
  });

  it('should add a value for data-analytics if analyticsString has a value', () => {
    expect(element.getAttribute('data-analytics')).toEqual('results1');
  });

  it('should add a value for data-id if idString has a value', () => {
    expect(element.getAttribute('data-id')).toEqual('resultsId1');
  });
});
