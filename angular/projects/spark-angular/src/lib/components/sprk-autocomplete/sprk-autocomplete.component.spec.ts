import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results/sprk-autocomplete-results.directive';
import { SprkAutocompleteResultDirective } from './sprk-autocomplete-result/sprk-autocomplete-result.directive';
import { Component } from '@angular/core';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';

@Component({
  selector: `sprk-test`,
  template: `
    <sprk-autocomplete>
      <div>
        <input sprkInput />
      </div>
      <ul sprkAutocompleteResults>
        <li sprkAutocompleteResult id="item1"></li>
        <li sprkAutocompleteResult id="item2"></li>
        <li sprkAutocompleteResult id="item3"></li>
        <li sprkAutocompleteResult id="item4"></li>
      </ul>
    </sprk-autocomplete>
  `,
})
class WrappedAutocompleteComponent {}

describe('SprkAutocompleteComponent', () => {
  let component: SprkAutocompleteComponent;
  let fixture: ComponentFixture<WrappedAutocompleteComponent>;
  let resultsElement;
  let inputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkAutocompleteComponent,
        WrappedAutocompleteComponent,
        SprkAutocompleteResultsDirective,
        SprkAutocompleteResultDirective,
        SprkInputDirective,
      ],
    }).compileComponents();
  }));

  let spy;
  beforeEach(() => {
    spy = jest.spyOn(console, 'warn').mockImplementationOnce(() => {});

    fixture = TestBed.createComponent(WrappedAutocompleteComponent);
    fixture.detectChanges();

    component = fixture.debugElement.children[0].componentInstance;

    resultsElement = fixture.nativeElement.querySelector('ul');
    inputElement = fixture.nativeElement.querySelector('input');

    fixture.detectChanges();
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct attributes in showResults', () => {
    component.hideResults();
    fixture.detectChanges();
    expect(
      resultsElement.classList.contains('sprk-c-Autocomplete__results--hidden'),
    ).toEqual(true);
    expect(inputElement.parentNode.getAttribute('aria-expanded')).toEqual(
      'false',
    );

    component.showResults();
    fixture.detectChanges();
    expect(
      resultsElement.classList.contains('sprk-c-Autocomplete__results--hidden'),
    ).toEqual(false);
    expect(inputElement.parentNode.getAttribute('aria-expanded')).toEqual(
      'true',
    );
  });

  it('should emit openedEvent when calling showResults if results exists', (done) => {
    let called = false;

    component.hideResults();
    fixture.detectChanges();

    component.openedEvent.subscribe((g) => {
      called = true;
      done();
    });
    component.showResults();
    expect(called).toEqual(true);
    done();
  });

  it('should not emit openedEvent when calling showResults if results does not exist', (done) => {
    let called = false;
    component.results = undefined;
    fixture.detectChanges();
    component.openedEvent.subscribe((g) => {
      called = true;
      done();
    });
    component.showResults();
    expect(called).toEqual(false);
    done();
  });

  it('should add the correct attributes in hideResults', () => {
    component.showResults();
    fixture.detectChanges();
    expect(
      resultsElement.classList.contains('sprk-c-Autocomplete__results--hidden'),
    ).toEqual(false);
    expect(inputElement.parentNode.getAttribute('aria-expanded')).toEqual(
      'true',
    );

    component.hideResults();
    fixture.detectChanges();
    expect(
      resultsElement.classList.contains('sprk-c-Autocomplete__results--hidden'),
    ).toEqual(true);
    expect(inputElement.parentNode.getAttribute('aria-expanded')).toEqual(
      'false',
    );
  });

  it('should emit closedEvent when calling hideResults if results exists', (done) => {
    let called = false;

    component.showResults();
    fixture.detectChanges();

    component.closedEvent.subscribe((g) => {
      called = true;
      done();
    });
    component.hideResults();
    expect(called).toEqual(true);
    done();
  });

  it('should not emit closedEvent when calling hideResults if results does not exist', (done) => {
    let called = false;
    component.results = undefined;
    fixture.detectChanges();
    component.closedEvent.subscribe((g) => {
      called = true;
      done();
    });
    component.hideResults();
    expect(called).toEqual(false);
    done();
  });

  it('should not set input attributes when calling hideResults() with no input', () => {
    component.showResults();
    component.input = undefined;
    fixture.detectChanges();

    component.hideResults();

    fixture.detectChanges();

    expect(component.input).toEqual(undefined);
  });

  it('should not set input attributes when calling showResults() with no input', () => {
    component.input = undefined;
    fixture.detectChanges();

    component.showResults();

    fixture.detectChanges();

    expect(component.input).toEqual(undefined);
  });

  it('should call hideResults when pressing Escape if the results are open', () => {
    component.isOpen = true;
    jest.spyOn(component, 'hideResults').mockImplementation(() => {});

    fixture.detectChanges();

    expect(component.hideResults).toBeCalledTimes(0);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
      }),
    );

    fixture.detectChanges();
    expect(component.hideResults).toBeCalledTimes(1);
  });

  it('should not call hideResults when pressing Escape if the results are not open', () => {
    component.isOpen = false;
    jest.spyOn(component, 'hideResults').mockImplementation(() => {});

    fixture.detectChanges();

    expect(component.hideResults).toBeCalledTimes(0);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
      }),
    );

    fixture.detectChanges();
    expect(component.hideResults).toBeCalledTimes(0);
  });

  it('should call hideResults when clicking the document if the results are open', () => {
    component.isOpen = true;
    jest.spyOn(component, 'hideResults').mockImplementation(() => {});

    fixture.detectChanges();

    expect(component.hideResults).toBeCalledTimes(0);

    document.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.hideResults).toBeCalledTimes(1);
  });

  it('should not call hideResults when clicking the document if the results are not open', () => {
    component.isOpen = false;
    jest.spyOn(component, 'hideResults').mockImplementation(() => {});

    fixture.detectChanges();

    expect(component.hideResults).toBeCalledTimes(0);

    document.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.hideResults).toBeCalledTimes(0);
  });

  it('should remove highlights when calling hideResults()', () => {
    component.showResults();
    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
      }),
    );

    fixture.detectChanges();

    expect(component.resultItems.toArray()[3].isHighlighted).toEqual(true);

    component.hideResults();

    fixture.detectChanges();

    expect(component.resultItems.toArray()[3].isHighlighted).toEqual(false);
  });

  it('should call retreatHighlightedItem when Up is pressed and isOpen', () => {
    jest
      .spyOn(component, 'retreatHighlightedItem')
      .mockImplementation(() => {});

    component.showResults();
    fixture.detectChanges();

    expect(component.retreatHighlightedItem).toBeCalledTimes(0);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
      }),
    );

    fixture.detectChanges();
    expect(component.retreatHighlightedItem).toBeCalledTimes(1);
  });

  it('should not call retreatHighlightedItem when Up is pressed and not open', () => {
    jest
      .spyOn(component, 'retreatHighlightedItem')
      .mockImplementation(() => {});

    component.hideResults();
    fixture.detectChanges();

    expect(component.retreatHighlightedItem).toBeCalledTimes(0);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
      }),
    );

    fixture.detectChanges();
    expect(component.retreatHighlightedItem).toBeCalledTimes(0);
  });

  it('should highlight the last item when retreatHighlightedItem is called and isOpen', () => {
    component.showResults();

    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
      }),
    );

    fixture.detectChanges();
    expect(component.resultItems.toArray()[3].isHighlighted).toEqual(true);
  });

  it('should highlight the third item when retreatHighlightedItem is called and isOpen and fourth item is highlighted', () => {
    component.showResults();

    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
      }),
    );

    fixture.detectChanges();
    expect(component.resultItems.toArray()[3].isHighlighted).toEqual(true);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
      }),
    );

    fixture.detectChanges();
    expect(component.resultItems.toArray()[2].isHighlighted).toEqual(true);
  });

  it('should call advanceHighlightedItem when Down is pressed and isOpen', () => {
    jest
      .spyOn(component, 'advanceHighlightedItem')
      .mockImplementation(() => {});

    component.showResults();
    fixture.detectChanges();

    expect(component.advanceHighlightedItem).toBeCalledTimes(0);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
      }),
    );

    fixture.detectChanges();
    expect(component.advanceHighlightedItem).toBeCalledTimes(1);
  });

  it('should not call advanceHighlightedItem when Down is pressed and not open', () => {
    jest
      .spyOn(component, 'advanceHighlightedItem')
      .mockImplementation(() => {});

    component.hideResults();
    fixture.detectChanges();

    expect(component.advanceHighlightedItem).toBeCalledTimes(0);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
      }),
    );

    fixture.detectChanges();
    expect(component.advanceHighlightedItem).toBeCalledTimes(0);
  });

  it('should highlight the first item when Down is pressed and isOpen', () => {
    component.showResults();

    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
      }),
    );

    fixture.detectChanges();
    expect(component.resultItems.toArray()[0].isHighlighted).toEqual(true);
  });

  it('should highlight the second item when Down is pressed and isOpen and first item is selected', () => {
    component.showResults();

    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
      }),
    );

    fixture.detectChanges();
    expect(component.resultItems.toArray()[0].isHighlighted).toEqual(true);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
      }),
    );

    fixture.detectChanges();
    expect(component.resultItems.toArray()[1].isHighlighted).toEqual(true);
  });

  it('should highlight the first item when Down is pressed and isOpen and last item is highlighted', () => {
    component.showResults();

    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
      }),
    );

    fixture.detectChanges();
    expect(component.resultItems.toArray()[3].isHighlighted).toEqual(true);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
      }),
    );

    fixture.detectChanges();
    expect(component.resultItems.toArray()[0].isHighlighted).toEqual(true);
  });

  it('should not set aria-activedescendant when calling highlightListItem with no listItemElement', () => {
    component.highlightListItem(undefined);
    fixture.detectChanges();
    expect(
      component.input.ref.nativeElement.getAttribute('aria-activedescendant'),
    ).toEqual(null);
  });

  it('should not set aria-activedescendant when calling highlightListItem with no input', () => {
    component.input = undefined;
    fixture.detectChanges();

    let testItem = component.resultItems.toArray()[1];
    component.highlightListItem(testItem);

    fixture.detectChanges();

    expect(component.input).toEqual(undefined);
  });

  it('should emit itemSelectedEvent when pressing Enter and an item is highlighted', (done) => {
    let called = false;
    let value = -1;
    component.showResults();

    // select the first item in the list
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
      }),
    );

    component.itemSelectedEvent.subscribe((itemId) => {
      called = true;
      value = itemId;
      done();
    });

    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
      }),
    );

    expect(called).toEqual(true);
    expect(value).toEqual('item1');
    done();
  });

  it('should not emit itemSelectedEvent when pressing Enter if no item is highlighted', (done) => {
    let called = false;
    component.showResults();

    component.itemSelectedEvent.subscribe((g) => {
      called = true;
      done();
    });

    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
      }),
    );

    expect(called).toEqual(false);
    done();
  });

  it('should call calculateResultsWidth on resize', () => {
    jest.spyOn(component, 'calculateResultsWidth').mockImplementation(() => {});

    fixture.detectChanges();

    expect(component.calculateResultsWidth).toBeCalledTimes(0);

    window.dispatchEvent(new Event('resize'));

    fixture.detectChanges();
    expect(component.calculateResultsWidth).toBeCalledTimes(1);
  });

  it('should set aria-activedescendant on the input when highlighting an item', () => {
    component.showResults();
    expect(
      component.input.ref.nativeElement.getAttribute('aria-activedescendant'),
    ).toEqual(null);

    fixture.detectChanges();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
      }),
    );

    fixture.detectChanges();
    expect(component.resultItems.toArray()[0].isHighlighted).toEqual(true);
    expect(
      component.input.ref.nativeElement.getAttribute('aria-activedescendant'),
    ).toEqual('item1');
  });

  it('should generate aria-controls and id if needed', () => {
    component.results.nativeElement.removeAttribute('id');
    component.input.ref.nativeElement.removeAttribute('aria-controls');
    fixture.detectChanges();

    component.ngAfterContentInit();
    fixture.detectChanges();

    const actualId = component.results.nativeElement.getAttribute('id');
    const actualAriaControls = component.input.ref.nativeElement.getAttribute(
      'aria-controls',
    );

    expect(actualId).toBeTruthy();
    expect(actualAriaControls).toBeTruthy();
    expect(actualAriaControls).toEqual(actualId);
  });

  it('should generate aria-controls for existing id if needed', () => {
    const providedId = 'test_id';

    component.results.nativeElement.setAttribute('id', providedId);
    component.input.ref.nativeElement.removeAttribute('aria-controls');
    fixture.detectChanges();

    component.ngAfterContentInit();
    fixture.detectChanges();

    const actualId = component.results.nativeElement.getAttribute('id');
    const actualAriaControls = component.input.ref.nativeElement.getAttribute(
      'aria-controls',
    );

    expect(actualId).toBeTruthy();
    expect(actualAriaControls).toBeTruthy();
    expect(actualId).toEqual(providedId);
    expect(actualAriaControls).toEqual(actualId);
  });

  it('should not generate aria-controls and id if not needed', () => {
    const providedId = 'test_id';

    component.results.nativeElement.setAttribute('id', providedId);
    component.input.ref.nativeElement.setAttribute('aria-controls', providedId);
    fixture.detectChanges();

    component.ngAfterContentInit();
    fixture.detectChanges();

    const actualId = component.results.nativeElement.getAttribute('id');
    const actualAriaControls = component.input.ref.nativeElement.getAttribute(
      'aria-controls',
    );

    expect(actualId).toBeTruthy();
    expect(actualAriaControls).toBeTruthy();
    expect(actualId).toEqual(providedId);
    expect(actualAriaControls).toEqual(actualId);
  });

  it('should console.warn if aria-controls and id exist and do not match', () => {
    const providedId = 'test_id';
    const providedAriaControls = 'test_controls';

    component.results.nativeElement.setAttribute('id', providedId);
    component.input.ref.nativeElement.setAttribute(
      'aria-controls',
      providedAriaControls,
    );

    // add aria-owns so it doesn't generate its own console.warn
    component.input.ref.nativeElement.parentNode.setAttribute(
      'aria-owns',
      providedId,
    );

    jest.spyOn(console, 'warn').mockImplementation(() => {});

    fixture.detectChanges();

    expect(console.warn).toBeCalledTimes(0);

    component.ngAfterContentInit();

    fixture.detectChanges();
    expect(console.warn).toBeCalledTimes(1);
  });

  it('should console.warn if aria-controls exists and id does not', () => {
    const providedAriaControls = 'test_controls';

    component.results.nativeElement.removeAttribute('id');
    component.input.ref.nativeElement.setAttribute(
      'aria-controls',
      providedAriaControls,
    );

    jest.spyOn(console, 'warn').mockImplementation(() => {});

    fixture.detectChanges();

    expect(console.warn).toBeCalledTimes(0);

    component.ngAfterContentInit();

    fixture.detectChanges();
    // the second call is from aria-owns warning for the same reason
    expect(console.warn).toBeCalledTimes(2);
  });

  it('should generate aria-owns and id if needed', () => {
    component.results.nativeElement.removeAttribute('id');
    component.input.ref.nativeElement.parentNode.removeAttribute('aria-owns');
    fixture.detectChanges();

    component.ngAfterContentInit();
    fixture.detectChanges();

    const actualId = component.results.nativeElement.getAttribute('id');
    const actualAriaOwns = component.input.ref.nativeElement.parentNode.getAttribute(
      'aria-owns',
    );

    expect(actualId).toBeTruthy();
    expect(actualAriaOwns).toBeTruthy();
    expect(actualAriaOwns).toEqual(actualId);
  });

  it('should generate aria-owns for existing id if needed', () => {
    const providedId = 'test_id';

    component.results.nativeElement.setAttribute('id', providedId);
    component.input.ref.nativeElement.parentNode.removeAttribute('aria-owns');
    fixture.detectChanges();

    component.ngAfterContentInit();
    fixture.detectChanges();

    const actualId = component.results.nativeElement.getAttribute('id');
    const actualAriaOwns = component.input.ref.nativeElement.parentNode.getAttribute(
      'aria-owns',
    );

    expect(actualId).toBeTruthy();
    expect(actualAriaOwns).toBeTruthy();
    expect(actualId).toEqual(providedId);
    expect(actualAriaOwns).toEqual(actualId);
  });

  it('should not generate aria-owns and id if not needed', () => {
    const providedId = 'test_id';

    component.results.nativeElement.setAttribute('id', providedId);
    component.input.ref.nativeElement.parentNode.setAttribute(
      'aria-owns',
      providedId,
    );
    fixture.detectChanges();

    component.ngAfterContentInit();
    fixture.detectChanges();

    const actualId = component.results.nativeElement.getAttribute('id');
    const actualAriaOwns = component.input.ref.nativeElement.parentNode.getAttribute(
      'aria-owns',
    );

    expect(actualId).toBeTruthy();
    expect(actualAriaOwns).toBeTruthy();
    expect(actualId).toEqual(providedId);
    expect(actualAriaOwns).toEqual(actualId);
  });

  it('should not generate aria-owns and id if input does not exist', () => {
    component.input = undefined;
    fixture.detectChanges();

    component.ngAfterContentInit();
    fixture.detectChanges();

    expect(component.input).toEqual(undefined);
  });

  it('should console.warn if aria-owns and id exist and do not match', () => {
    const providedId = 'test_id';
    const providedAriaControls = 'test_controls';

    component.results.nativeElement.setAttribute('id', providedId);
    component.input.ref.nativeElement.parentNode.setAttribute(
      'aria-controls',
      providedAriaControls,
    );

    // add aria-controls so it doesn't generate its own console.warn
    component.input.ref.nativeElement.setAttribute('aria-controls', providedId);

    jest.spyOn(console, 'warn').mockImplementation(() => {});

    fixture.detectChanges();

    expect(console.warn).toBeCalledTimes(0);

    component.ngAfterContentInit();

    fixture.detectChanges();
    expect(console.warn).toBeCalledTimes(1);
  });

  it('should console.warn if aria-owns exists and id does not', () => {
    const providedAriaOwns = 'test_owns';

    component.results.nativeElement.removeAttribute('id');
    component.input.ref.nativeElement.parentNode.setAttribute(
      'aria-controls',
      providedAriaOwns,
    );

    jest.spyOn(console, 'warn').mockImplementation(() => {});

    fixture.detectChanges();

    expect(console.warn).toBeCalledTimes(0);

    component.ngAfterContentInit();

    fixture.detectChanges();
    // the second call is from aria-controls warning for the same reason
    expect(console.warn).toBeCalledTimes(2);
  });

  it('should call showResults when initializing with isOpen=true', () => {
    component.isOpen = true;
    jest.spyOn(component, 'showResults').mockImplementation(() => {});

    fixture.detectChanges();

    expect(component.showResults).toBeCalledTimes(0);

    component.ngAfterContentInit();

    fixture.detectChanges();
    expect(component.showResults).toBeCalledTimes(1);
  });

  it('should call hideResults when initializing with isOpen=false', () => {
    component.isOpen = false;
    jest.spyOn(component, 'hideResults').mockImplementation(() => {});

    fixture.detectChanges();

    expect(component.hideResults).toBeCalledTimes(0);

    component.ngAfterContentInit();

    fixture.detectChanges();
    expect(component.hideResults).toBeCalledTimes(1);
  });

  it('should not show or hide results when initializing with no results', () => {
    component.isOpen = false;
    component.results = undefined;
    jest.spyOn(component, 'hideResults').mockImplementation(() => {});
    jest.spyOn(component, 'showResults').mockImplementation(() => {});

    fixture.detectChanges();

    expect(component.hideResults).toBeCalledTimes(0);
    expect(component.showResults).toBeCalledTimes(0);

    component.ngAfterContentInit();

    fixture.detectChanges();
    expect(component.hideResults).toBeCalledTimes(0);
    expect(component.showResults).toBeCalledTimes(0);
  });

  it('should set the click event on the list items if itemSelectedEvent is set', (done) => {
    let called = false;
    let value = -1;

    component.isOpen = true;
    component.itemSelectedEvent.subscribe((itemId) => {
      called = true;
      value = itemId;
      done();
    });

    fixture.detectChanges();

    component.resultItems
      .toArray()[0]
      .ref.nativeElement.dispatchEvent(new Event('click'));

    expect(called).toEqual(true);
    expect(value).toEqual('item1');
    done();
  });

  it('should not set the click event on the list items if itemSelectedEvent is not set', (done) => {
    let called = false;

    component.itemSelectedEvent = undefined;
    component.isOpen = true;
    fixture.detectChanges();

    component.ngAfterContentInit();

    fixture.detectChanges();

    component.resultItems
      .toArray()[0]
      .ref.nativeElement.dispatchEvent(new Event('click'));

    expect(called).toEqual(false);
    done();
  });

  it('should set the correct max width', () => {
    Object.defineProperty(component.input.ref.nativeElement, 'offsetWidth', {
      value: 123,
    });

    fixture.detectChanges();

    component.ngAfterViewInit();

    fixture.detectChanges();

    expect(component.results.nativeElement.getAttribute('style')).toEqual(
      'max-width:123px',
    );
  });

  it('should not set the max width when calling ngAfterViewInit if input is undefined', () => {
    component.input = undefined;

    fixture.detectChanges();

    component.ngAfterViewInit();

    fixture.detectChanges();

    expect(component.input).toEqual(undefined);
  });

  it('should not set the max width when calling calculateResultsWidth if input is undefined', () => {
    component.input = undefined;

    fixture.detectChanges();

    component.calculateResultsWidth();

    fixture.detectChanges();

    expect(component.input).toEqual(undefined);
  });

  it('should not set the max width when calling calculateResultsWidth if results is undefined', () => {
    component.results = undefined;

    fixture.detectChanges();

    component.calculateResultsWidth();

    fixture.detectChanges();

    expect(component.input.ref.nativeElement.getAttribute('style')).toEqual(
      null,
    );
  });
});
