import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteResultDirective } from './sprk-autocomplete-result.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'sprk-test',
  template: `
    <ul>
      <li
        sprkAutocompleteResult
        analyticsString="result1"
        idString="resultId1"
        additionalClasses="testClass"
      ></li>
    </ul>
  `,
})
class TestComponent {}

describe('Spark Autocomplete Result Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  let directiveElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkAutocompleteResultDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('li');

    directiveElement = fixture.debugElement
      .query(By.directive(SprkAutocompleteResultDirective))
      .injector.get(
        SprkAutocompleteResultDirective,
      ) as SprkAutocompleteResultDirective;

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

  it('should emit click event', (done) => {
    let called = false;
    directiveElement.clickedEvent.subscribe((g) => {
      called = true;
      done();
    });
    element.click();
    expect(called).toEqual(true);
  });

  it('should add the class and aria attribute if isHighlighted is true', () => {
    directiveElement.isHighlighted = true;
    fixture.detectChanges();

    expect(element.getAttribute('aria-selected')).toEqual('true');
    expect(
      element.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toEqual(true);
  });

  it('should not add the class and aria attribute if isHighlighted is false', () => {
    directiveElement.isHighlighted = false;
    fixture.detectChanges();

    expect(element.getAttribute('aria-selected')).toEqual('false');
    expect(
      element.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toEqual(false);
  });

  // TODO
  it('should scroll the parentNode when setting isHighlighted if necessary', () => {
    // set the scroll position so the current item is out of view
    // element.getBoundingClientRect = () => {
    //   return { top: 250, bottom: 300 };
    // };
    // element.parentNode.getBoundingClientRect = () => {
    //   return { top: 0, bottom: 200 };
    // };
    // expect the child element to not be visible
    // directiveElement.isHighlighted = true;
    // fixture.detectChanges();
    // expect the child element to be visible
  });
});
