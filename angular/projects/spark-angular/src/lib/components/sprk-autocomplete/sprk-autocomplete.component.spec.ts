import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results/sprk-autocomplete-results.directive';
import { SprkAutocompleteResultDirective } from './sprk-autocomplete-result/sprk-autocomplete-result.directive';
import { Component } from '@angular/core';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import {
  ViewChild,
  ViewChildren,
  ContentChild,
  ContentChildren,
} from '@angular/core';

@Component({
  selector: `sprk-test`,
  template: ` <sprk-autocomplete>
    <div>
      <input sprkInput />
    </div>
    <ul sprkAutocompleteResults>
      <li sprkAutocompleteResult id="item1"></li>
      <li sprkAutocompleteResult id="item2"></li>
      <li sprkAutocompleteResult id="item3"></li>
      <li sprkAutocompleteResult id="item4"></li>
    </ul>
  </sprk-autocomplete>`,
})
class WrappedAutocompleteComponent {
  // isOpen: boolean = false;
  // @ViewChild(SprkAutocompleteComponent) innerAutocomplete: SprkAutocompleteComponent;
}
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

  beforeEach(() => {
    fixture = TestBed.createComponent(WrappedAutocompleteComponent);
    fixture.detectChanges();

    // component = fixture.componentInstance.innerAutocomplete;
    component = fixture.debugElement.children[0].componentInstance;

    resultsElement = fixture.nativeElement.querySelector('ul');
    inputElement = fixture.nativeElement.querySelector('input');

    fixture.detectChanges();
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
    // console.log(fixture.nativeElement.innerHTML);
    // console.log(component.results.nativeElement.outerHTML);
    expect(
      resultsElement.classList.contains('sprk-c-Autocomplete__results--hidden'),
    ).toEqual(false);
    expect(inputElement.parentNode.getAttribute('aria-expanded')).toEqual(
      'true',
    );

    component.hideResults();
    fixture.detectChanges();
    // console.log(fixture.debugElement.nativeElement.innerHTML);
    expect(
      resultsElement.classList.contains('sprk-c-Autocomplete__results--hidden'),
    ).toEqual(true);
    expect(inputElement.parentNode.getAttribute('aria-expanded')).toEqual(
      'false',
    );
    // todo expect removeAllHighlights to have been called
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

  it('should call retreatHighlightedItem when Up is pressed', () => {
    jest
      .spyOn(component, 'retreatHighlightedItem')
      .mockImplementation(() => {});

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

  // TODO test retreatHighlightedItem with actual items

  it('should call advanceHighlightedItem when Down is pressed', () => {
    jest
      .spyOn(component, 'advanceHighlightedItem')
      .mockImplementation(() => {});

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

  // TODO test advanceHighlightedItem with actual items

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
    // TODO expect maxWidth to have been set
  });

  // arrow keys do activedescendant
  // hiding resets list items correctly
  // selectHighlightedListItem should get the correct id and emit it
  // init with isOpen=false should render with the right class
  // init with isOpen=true should render with the right class
  // setting itemSelectedEvent should correctly set the click event on the grandchildren
  // maxwidth is calculated correctly at different widths
});
