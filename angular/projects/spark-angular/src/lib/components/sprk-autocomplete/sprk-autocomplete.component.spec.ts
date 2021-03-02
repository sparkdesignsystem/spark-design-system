import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { Component } from '@angular/core';

@Component({
  selector: `sprk-test`,
  template: `<sprk-autocomplete></sprk-autocomplete>`,
})
class WrappedAutocompleteComponent {}
describe('SprkAutocompleteComponent', () => {
  let component: SprkAutocompleteComponent;
  let fixture: ComponentFixture<SprkAutocompleteComponent>;

  let wrappedComponent: WrappedAutocompleteComponent;
  let wrappedFixture: ComponentFixture<WrappedAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkAutocompleteComponent, WrappedAutocompleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    wrappedFixture = TestBed.createComponent(WrappedAutocompleteComponent);
    wrappedComponent = wrappedFixture.componentInstance;
    wrappedFixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
