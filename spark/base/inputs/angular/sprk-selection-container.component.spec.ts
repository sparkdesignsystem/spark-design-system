import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFieldErrorDirective } from './sprk-field-error.directive';
import { SprkLabelDirective } from './sprk-label.directive';
import { SprkSelectionInputDirective } from './sprk-selection-input.directive';
import { SprkSelectionLabelDirective } from './sprk-selection-label.directive';
import { SprkSelectionItemContainerComponent } from './sprk-selection-item-container.component';
import { SprkSelectionContainerComponent } from './sprk-selection-container.component';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-selection-container>
      <label sprkLabel>Label!</label>
      <sprk-selection-item-container>
        <input type="checkbox" sprkSelectionInput />
        <label sprkSelectionLabel>Item 1</label>
      </sprk-selection-item-container>
      <p sprkHelperText>Helper Text!</p>
      <span sprkFieldError>Error Message!</span>
    </sprk-selection-container>
  `
})
class TestComponent {}

describe('SprkSelectionContainerComponent', () => {
  let component: TestComponent;
  let selectionContainerComponent: SprkSelectionContainerComponent;
  let fixture: ComponentFixture<TestComponent>;
  let selectionContainerFixture: ComponentFixture<
    SprkSelectionContainerComponent
  >;
  let selectionContainerElement: HTMLElement;
  let selectionItemContainerElements;
  let errorElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkSelectionItemContainerComponent,
        SprkSelectionInputDirective,
        SprkSelectionLabelDirective,
        SprkLabelDirective,
        SprkFieldErrorDirective,
        SprkSelectionContainerComponent,
        TestComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    selectionContainerFixture = TestBed.createComponent(
      SprkSelectionContainerComponent
    );
    selectionContainerComponent = selectionContainerFixture.componentInstance;
    selectionContainerComponent.ngAfterContentInit();
    fixture.detectChanges();

    selectionContainerElement = selectionContainerFixture.nativeElement.querySelector(
      'div'
    );
    selectionItemContainerElements = fixture.debugElement.queryAll(
      By.css('sprk-selection-item-container')
    );
    errorElement = fixture.debugElement.query(By.css('span')).nativeElement;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    selectionContainerComponent.additionalClasses = 'sprk-u-man';
    selectionContainerFixture.detectChanges();
    expect(selectionContainerElement.classList.toString()).toEqual(
      'sprk-b-InputContainer sprk-u-man'
    );
  });

  it('should map any inputs inside selection-item-containers to the field-error', () => {
    selectionItemContainerElements.forEach(item => {
      expect(
        item.nativeElement
          .querySelector('input')
          .getAttribute('aria-describedby')
      ).toEqual(errorElement.id);
    });
  });
});
