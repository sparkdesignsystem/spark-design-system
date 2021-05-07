import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results/sprk-autocomplete-results.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';

@Component({
  selector: `sprk-test`,
  template: ` <sprk-autocomplete isOpen="true">
    <div>
      <input sprkInput />
    </div>
    <ul sprkAutocompleteResults></ul>
  </sprk-autocomplete>`,
})
class WrappedAutocompleteComponent {}
describe('SprkAutocompleteComponent', () => {
  let component: SprkAutocompleteComponent;
  let fixture: ComponentFixture<SprkAutocompleteComponent>;
  let resultsElement;
  let inputElement;
  let element: HTMLElement;

  let wrappedComponent: WrappedAutocompleteComponent;
  let wrappedFixture: ComponentFixture<WrappedAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkAutocompleteComponent,
        WrappedAutocompleteComponent,
        SprkAutocompleteResultsDirective,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkAutocompleteComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');

    fixture.detectChanges();

    wrappedFixture = TestBed.createComponent(WrappedAutocompleteComponent);
    wrappedComponent = wrappedFixture.componentInstance;

    // resultsElement = wrappedFixture.debugElement
    //   .query(By.directive(SprkAutocompleteResultsDirective))
    //   .injector.get(
    //     SprkAutocompleteResultsDirective,
    //   ) as SprkAutocompleteResultsDirective;

    // inputElement = wrappedFixture.debugElement
    //   .query(By.directive(SprkInputDirective))
    //   .injector.get(
    //     SprkInputDirective,
    //   ) as SprkInputDirective;

    wrappedFixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
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

  // TODO pressing Enter when the list is open and populated and an item is highlighted

  it('should call calculateResultsWidth on resize', () => {
    jest.spyOn(component, 'calculateResultsWidth').mockImplementation(() => {});

    fixture.detectChanges();

    expect(component.calculateResultsWidth).toBeCalledTimes(0);

    window.dispatchEvent(new Event('resize'));

    fixture.detectChanges();
    expect(component.calculateResultsWidth).toBeCalledTimes(1);
    // TODO expect maxWidth to have been set
  });

  // isOpen=true should set aria-expanded
  // isOpen=false should set aria-expanded and add class
  // arrow keys do activedescendant
  // hiding resets list items correctly
  // selectHighlightedListItem should get the correct id and emit it
  // init with isOpen=false should render with the right class
  // init with isOpen=true should render with the right class
  // setting itemSelectedEvent should correctly set the click event on the grandchildren
  // maxwidth is calculated correctly at different widths
  //

  // it('should not emit closedEvent when calling hideResults if results does not exist', (done) => {
  //   let called = false;
  //   fixture.detectChanges();
  //   component.closedEvent.subscribe((g) => {
  //     called = true;
  //     done();
  //   });
  //   component.hideResults();
  //   expect(called).toEqual(false);
  //   done();
  // });

  // it('should emit closedEvent when calling hideResults if results exists', (done) => {
  //   let called = false;

  //   const resultsElement = document.createElement('ul');
  //   // needs to be that Directive so it can be selected
  //   // can't figure out how to dynamically add child directives to the test component
  //   resultsElement.setAttribute('sprkAutocompleteResults', '');
  //   fixture.nativeElement.appendChild(resultsElement);

  //   fixture.detectChanges();

  //   console.log(fixture.debugElement.nativeElement.outerHTML);
  //   component.closedEvent.subscribe((g) => { // can't call closedEvent on wrappedComponent
  //     called = true;
  //     done();
  //   });
  //   component.hideResults(); // can't call hideResults on wrappedComponent
  //   expect(called).toEqual(true);
  //   done();
  // });
});
