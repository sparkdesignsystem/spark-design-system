import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteInputContainerDirective } from './sprk-autocomplete-input-container.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div
      sprkAutocompleteInputContainer
      analyticsString="test"
      ariaLabelledby="test-label"
      idString="test-id"
    >
      <input
        id="autocomplete-input"
        name="autocomplete-input"
        type="text"
        class="sprk-b-TextInput--has-svg-icon sprk-u-Width-100"
        aria-describedby="autocomplete--error-container"
        aria-autocomplete="list"
        sprkInput
        idString="autocomplete-input1"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
      />
    </div>

    <div sprkAutocompleteInputContainer role="custom">
      <input
        id="autocomplete-input"
        name="autocomplete-input"
        type="text"
        class="sprk-b-TextInput--has-svg-icon sprk-u-Width-100"
        aria-describedby="autocomplete--error-container"
        aria-autocomplete="list"
        sprkInput
        idString="autocomplete-input1"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
      />
    </div>
  `,
})
class TestComponent {}

describe('Spark Autocomplete Input Container Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  let element2: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkAutocompleteInputContainerDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelectorAll('div')[0];
    element2 = fixture.nativeElement.querySelectorAll('div')[1];

    fixture.detectChanges();
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct base class', () => {
    expect(element.classList.toString()).toEqual(
      'sprk-b-TextInputIconContainer',
    );
  });

  it('should add a value for data-analytics if analyticsString has a value', () => {
    expect(element.getAttribute('data-analytics')).toEqual('test');
  });

  it('should add a value for data-id if idString has a value', () => {
    expect(element.getAttribute('data-id')).toEqual('test-id');
  });

  it('should not add a value for data-analytics if analyticsString has no value', () => {
    expect(element2.getAttribute('data-analytics')).toEqual(null);
  });

  it('should not add a value for data-id if idString has no value', () => {
    expect(element2.getAttribute('data-id')).toEqual(null);
  });

  it('should add role set to combobox', () => {
    expect(element.getAttribute('role')).toEqual('combobox');
  });

  it('should add role set to custom value if supplied', () => {
    expect(element2.getAttribute('role')).toEqual('custom');
  });

  it('should add aria-labelledby set to value from input', () => {
    expect(element.getAttribute('aria-labelledby')).toEqual('test-label');
  });

  it('should add aria-haspopup set to listbox', () => {
    expect(element.getAttribute('aria-haspopup')).toEqual('listbox');
  });
});
