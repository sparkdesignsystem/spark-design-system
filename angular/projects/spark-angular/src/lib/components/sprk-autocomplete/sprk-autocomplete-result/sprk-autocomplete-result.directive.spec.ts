import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteResultDirective } from './sprk-autocomplete-result.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <ul
      sprkAutocompleteResult
      analyticsString="result1"
      idString="resultId1"
      additionalClasses="testClass"
    ></ul>
  `,
})
class TestComponent {}

describe('Spark Autocomplete Result Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkAutocompleteResultDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('ul');

    fixture.detectChanges();
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct base class', () => {
    expect(element.classList.contains('sprk-c-Autocomplete__result')).toEqual(
      true,
    );
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element.classList.contains('testClass')).toEqual(true);
  });

  it('should add a value for data-analytics if analyticsString has a value', () => {
    expect(element.getAttribute('data-analytics')).toEqual('result1');
  });

  it('should add a value for data-id if idString has a value', () => {
    expect(element.getAttribute('data-id')).toEqual('resultId1');
  });
});
