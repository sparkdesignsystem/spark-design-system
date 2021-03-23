import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkInputDirective } from './sprk-input.directive';

/**
 * TODO: Remove this file in favor of the new
 * sprkSelect directive and its test file.
 */
@Component({
  selector: 'sprk-test-select',
  template: ` <select sprkInput></select> `,
})
class TestSelectComponent {}

describe('Spark Input Directive', () => {
  let component: TestSelectComponent;
  let selectComponent: TestSelectComponent;
  let selectFixture: ComponentFixture<TestSelectComponent>;
  let selectElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkInputDirective, TestSelectComponent],
    }).compileComponents();

    selectFixture = TestBed.createComponent(TestSelectComponent);
    component = selectFixture.componentInstance;

    selectFixture = TestBed.createComponent(TestSelectComponent);
    selectComponent = selectFixture.componentInstance;

    selectFixture.detectChanges();
    selectElement = selectFixture.nativeElement.querySelector('select');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct class if a select element is used', () => {
    selectFixture.detectChanges();
    expect(selectElement.classList.toString()).toEqual(
      'sprk-b-Select sprk-u-Width-100',
    );
  });
});
