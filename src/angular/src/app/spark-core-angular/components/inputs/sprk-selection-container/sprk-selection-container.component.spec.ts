import { Component, QueryList } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkSelectionContainerComponent } from './sprk-selection-container.component';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SparkSelectionItemContainerComponent } from '../sprk-selection-item-container/sprk-selection-item-container.component';
import { SprkSelectionInputDirective } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkSelectionLabelDirective } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `
    <sprk-selection-container>
        <label sprk-label>Label!</label>
        <sprk-selection-item-container>
          <input
            type="checkbox"
            sprk-selection-input>
          <label sprk-selection-label>Item 1</label>
        </sprk-selection-item-container>
        <p sprk-helper-text>Helper Text!</p>
        <span sprk-field-error>Error Message!</span>
    </sprk-selection-container>
  `
})
class TestComponent {}

describe('SparkSelectionContainerComponent', () => {
  let component: TestComponent;
  let selectionContainerComponent: SparkSelectionContainerComponent;
  let fixture: ComponentFixture<TestComponent>;
  let selectionContainerFixture: ComponentFixture<SparkSelectionContainerComponent>;
  let selectionContainerElement: HTMLElement;
  let selectionItemContainerElements;
  let errorElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkSelectionItemContainerComponent,
        SprkSelectionInputDirective,
        SprkSelectionLabelDirective,
        SprkLabelDirective,
        SprkFieldErrorDirective,
        SparkSelectionContainerComponent,
        TestComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    selectionContainerFixture = TestBed.createComponent(SparkSelectionContainerComponent);
    selectionContainerComponent = selectionContainerFixture.componentInstance;
    selectionContainerComponent.ngAfterContentInit();
    fixture.detectChanges();

    selectionContainerElement = selectionContainerFixture.nativeElement.querySelector('div');
    selectionItemContainerElements = fixture.debugElement.queryAll(By.css('sprk-selection-item-container'));
    errorElement = fixture.debugElement.query(By.css('span')).nativeElement;

  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    selectionContainerComponent.additionalClasses = 'sprk-u-man';
    selectionContainerFixture.detectChanges();
    expect(selectionContainerElement.classList.toString()).toEqual('sprk-b-InputContainer sprk-u-man');
  })

  it('should map any inputs inside selection-item-containers to the field-error', () => {
    selectionItemContainerElements.forEach((item) => {
      expect(item.nativeElement.querySelector('input').getAttribute('aria-describedby'))
        .toEqual(errorElement.id);
    });
  });
});
