import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAutocompleteInputContainerDirective } from './sprk-autocomplete-input-container.directive';

@Component({
  selector: 'sprk-test',
  template: ` <div sprkAutocompleteInputContainer></div> `,
})
class TestComponent {}

describe('Spark Autocomplete Input Container Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  let element2: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkAutocompleteInputContainerDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelectorAll('div')[0];
    element2 = fixture.nativeElement.querySelectorAll('div')[1];

    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct base class', () => {
    expect(element.classList.toString()).toEqual(
      'sprk-b-TextInputIconContainer',
    );
  });
});
