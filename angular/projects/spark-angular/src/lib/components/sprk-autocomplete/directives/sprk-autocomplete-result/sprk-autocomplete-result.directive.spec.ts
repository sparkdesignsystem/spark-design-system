import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
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

  beforeEach(
    waitForAsync(() => {
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
    }),
  );

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct base class', () => {
    expect(emptyElement.classList.toString()).toEqual(
      'sprk-c-Autocomplete__result',
    );
  });

  it('should add a value for data-analytics if analyticsString has a value', () => {
    expect(element.getAttribute('data-analytics')).toEqual('result1');
  });

  it('should add a value for data-id if idString has a value', () => {
    expect(element.getAttribute('data-id')).toEqual('resultId1');
  });

  it('should not add a value for data-analytics if analyticsString has no value', () => {
    expect(emptyElement.getAttribute('data-analytics')).toEqual(null);
  });

  it('should not add a value for data-id if idString has no value', () => {
    expect(emptyElement.getAttribute('data-id')).toEqual(null);
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

  it('should add the class and aria attribute if isSelected is true', () => {
    directiveElement.isSelected = true;
    fixture.detectChanges();

    expect(element.getAttribute('aria-selected')).toEqual('true');
    expect(element.classList.toString()).toEqual(
      'sprk-c-Autocomplete__result sprk-c-Autocomplete__result--active',
    );
  });

  it('should not add the class and aria attribute if isSelected is false', () => {
    directiveElement.isSelected = false;
    fixture.detectChanges();

    expect(element.getAttribute('aria-selected')).toEqual('false');
    expect(element.classList.toString()).toEqual('sprk-c-Autocomplete__result');
  });

  it('should scroll the parentNode when setting isSelected if necessary', () => {
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

    directiveElement.isSelected = true;
    fixture.detectChanges();

    // expect the child element to be scrolled into view
    expect(listItem2.parentNode.scrollTop).toEqual(listItem2.offsetTop);
  });
});
