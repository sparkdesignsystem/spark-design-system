import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkSelectionInputDirective } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkSelectionLabelDirective } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkSelectionItemContainerComponent } from './sprk-selection-item-container.component';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-selection-item-container>
      <input type="checkbox" sprkSelectionInput />
      <label sprkSelectionLabel>Item 1</label>
    </sprk-selection-item-container>
  `
})
class TestComponent {}

describe('SprkSelectionItemContainerComponent', () => {
  let component: TestComponent;
  let selectionItemContainerComponent: SprkSelectionItemContainerComponent;
  let fixture: ComponentFixture<TestComponent>;
  let selectionItemContainerFixture: ComponentFixture<
    SprkSelectionItemContainerComponent
  >;
  let selectionItemContainerElement: HTMLElement;
  let selectionLabelElement: HTMLElement;
  let selectionInputElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkSelectionLabelDirective,
        SprkSelectionInputDirective,
        SprkSelectionItemContainerComponent,
        TestComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    selectionItemContainerFixture = TestBed.createComponent(
      SprkSelectionItemContainerComponent
    );
    selectionItemContainerComponent =
      selectionItemContainerFixture.componentInstance;
    selectionItemContainerComponent.ngOnInit();
    fixture.detectChanges();

    selectionItemContainerElement = selectionItemContainerFixture.nativeElement.querySelector(
      'div'
    );
    selectionInputElement = fixture.debugElement.query(By.css('input'))
      .nativeElement;
    selectionLabelElement = fixture.debugElement.query(By.css('label'))
      .nativeElement;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    selectionItemContainerComponent.additionalClasses = 'sprk-u-man';
    selectionItemContainerFixture.detectChanges();
    expect(selectionItemContainerElement.classList.toString()).toEqual(
      'sprk-b-SelectionContainer sprk-u-man'
    );
  });

  it('should map the for attr of the selection label to the id of the selection input', () => {
    expect(selectionLabelElement.getAttribute('for')).toEqual(
      selectionInputElement.id
    );
  });
});
