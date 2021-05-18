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
      <li sprkAutocompleteResult></li>
    </ul>
  `,
})
class TestComponent {}

describe('Spark Autocomplete Result Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  let emptyElement: HTMLElement;
  let directiveElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkAutocompleteResultDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelectorAll('li')[0];
    emptyElement = fixture.nativeElement.querySelectorAll('li')[1];

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
    expect(
      emptyElement.classList.contains('sprk-c-Autocomplete__result'),
    ).toEqual(true);

    expect(emptyElement.classList.length).toEqual(1);
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element.classList.contains('testClass')).toEqual(true);
    expect(element.classList.length).toEqual(2);
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
    expect(element.classList.length).toEqual(3);
  });

  it('should not add the class and aria attribute if isHighlighted is false', () => {
    directiveElement.isHighlighted = false;
    fixture.detectChanges();

    expect(element.getAttribute('aria-selected')).toEqual('false');
    expect(
      element.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toEqual(false);
    expect(element.classList.length).toEqual(2);
  });

  it('should scroll the parentNode when setting isHighlighted if necessary', () => {
    const listItem2 = fixture.nativeElement.querySelectorAll(
      '.sprk-c-Autocomplete__result',
    )[1];

    // Set the top of the list
    listItem2.parentNode.getBoundingClientRect = () => {
      return { top: 25 };
    };

    // Set the top of the list item
    listItem2.getBoundingClientRect = () => {
      return { top: 24 };
    };

    directiveElement.isHighlighted = true;
    fixture.detectChanges();

    // expect the child element to be scrolled into view
    expect(listItem2.parentNode.scrollTop).toEqual(listItem2.offsetTop);
  });
});
