import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteResultsModule } from './sprk-autocomplete-results.module';

@Component({
  selector: 'sprk-test',
  template: `
    <ul
      sprkAutocompleteResults
      analyticsString="results1"
      idString="resultsId1"
    >
      <li>test</li>
    </ul>
    <ul sprkAutocompleteResults>
      <li>test</li>
    </ul>
  `,
})
class TestComponent {}

describe('Spark Autocomplete Results Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  let emptyElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SprkAutocompleteResultsModule],
        declarations: [TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('ul');
    emptyElement = fixture.nativeElement.querySelectorAll('ul')[1];

    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct base class', () => {
    expect(emptyElement.classList.toString()).toEqual(
      'sprk-c-Autocomplete__results',
    );
  });

  it('should add a value for data-analytics if analyticsString has a value', () => {
    expect(element.getAttribute('data-analytics')).toEqual('results1');
  });

  it('should add a value for data-id if idString has a value', () => {
    expect(element.getAttribute('data-id')).toEqual('resultsId1');
  });

  it('should not add a value for data-analytics if analyticsString has no value', () => {
    expect(emptyElement.getAttribute('data-analytics')).toEqual(null);
  });

  it('should not add a value for data-id if idString has no value', () => {
    expect(emptyElement.getAttribute('data-id')).toEqual(null);
  });
});
