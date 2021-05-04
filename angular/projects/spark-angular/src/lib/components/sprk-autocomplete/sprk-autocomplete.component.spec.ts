import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results/sprk-autocomplete-results.directive';
import { Component } from '@angular/core';

@Component({
  selector: `sprk-test`,
  template: ` <sprk-autocomplete isOpen="true">
    <ul sprkAutocompleteResults></ul>
  </sprk-autocomplete>`,
})
class WrappedAutocompleteComponent {}
describe('SprkAutocompleteComponent', () => {
  let component: SprkAutocompleteComponent;
  let fixture: ComponentFixture<SprkAutocompleteComponent>;
  // let resultsElement: HTMLElement;

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
    fixture.detectChanges();

    const input = document.createElement('input');
    input.setAttribute('sprkInput', '');

    const resultsElement = document.createElement('ul');
    // needs to be that Directive so it can be selected
    resultsElement.setAttribute('sprkAutocompleteResults', '');

    fixture.nativeElement.appendChild(input);
    fixture.nativeElement.appendChild(resultsElement);

    fixture.detectChanges();

    console.log(fixture.debugElement.nativeElement.outerHTML);

    wrappedFixture = TestBed.createComponent(WrappedAutocompleteComponent);
    wrappedComponent = wrappedFixture.componentInstance;
    wrappedFixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should not emit closedEvent when calling hideResults if results does not exist', (done) => {
    let called = false;
    fixture.detectChanges();
    component.closedEvent.subscribe((g) => {
      called = true;
      done();
    });
    component.hideResults();
    expect(called).toEqual(false);
    done();
  });

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

  // isOpen=true should set aria-expanded
  // isOpen=false should set aria-expanded and add class
  // document click should hide
  // escape should hide
});
