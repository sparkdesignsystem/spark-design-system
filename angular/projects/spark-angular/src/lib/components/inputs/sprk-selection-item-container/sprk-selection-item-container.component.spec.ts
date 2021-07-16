/* global document describe it */
import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkSelectionInputDirective } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkSelectionLabelDirective } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkSelectionItemContainerComponent } from './sprk-selection-item-container.component';

@Component({
  selector: 'sprk-test-1',
  template: `
    <sprk-selection-item-container>
      <input type="checkbox" sprkSelectionInput />
      <label sprkSelectionLabel>Item 1</label>
    </sprk-selection-item-container>
  `,
})
class TestComponent1 {}

@Component({
  selector: 'sprk-test-2',
  template: `
    <sprk-selection-item-container>
      <input type="radio" sprkSelectionInput />
      <label sprkSelectionLabel for="item-1">Item 1</label>
    </sprk-selection-item-container>
  `,
})
class TestComponent2 {}

@Component({
  selector: 'sprk-test-3',
  template: `
    <sprk-selection-item-container>
      <input id="item-1" type="checkbox" sprkSelectionInput />
      <label for="item-test" sprkSelectionLabel>Item 1</label>
    </sprk-selection-item-container>
  `,
})
class TestComponent3 {}

@Component({
  selector: 'sprk-test-4',
  template: `
    <sprk-selection-item-container>
      <input id="item-1" type="checkbox" sprkSelectionInput />
      <label for="item-1" sprkSelectionLabel>Item 1</label>
    </sprk-selection-item-container>
  `,
})
class TestComponent4 {}

describe('SprkSelectionItemContainerComponent', () => {
  let component1: TestComponent1;
  let component2: TestComponent2;
  let component3: TestComponent3;
  let component4: TestComponent4;

  let selectionItemContainerComponent1: SprkSelectionItemContainerComponent;
  let selectionItemContainerComponent2: SprkSelectionItemContainerComponent;
  let selectionItemContainerComponent3: SprkSelectionItemContainerComponent;
  let selectionItemContainerComponent4: SprkSelectionItemContainerComponent;

  let fixture1: ComponentFixture<TestComponent1>;
  let fixture2: ComponentFixture<TestComponent2>;
  let fixture3: ComponentFixture<TestComponent3>;
  let fixture4: ComponentFixture<TestComponent4>;

  let selectionItemContainerFixture1: ComponentFixture<SprkSelectionItemContainerComponent>;
  let selectionItemContainerFixture2: ComponentFixture<SprkSelectionItemContainerComponent>;
  let selectionItemContainerFixture3: ComponentFixture<SprkSelectionItemContainerComponent>;
  let selectionItemContainerFixture4: ComponentFixture<SprkSelectionItemContainerComponent>;

  let selectionItemContainerElement1: HTMLElement;
  let selectionItemContainerElement2: HTMLElement;
  let selectionItemContainerElement3: HTMLElement;
  let selectionItemContainerElement4: HTMLElement;

  let selectionLabelElement1: HTMLElement;
  let selectionLabelElement2: HTMLElement;
  let selectionLabelElement3: HTMLElement;
  let selectionLabelElement4: HTMLElement;

  let selectionInputElement1: HTMLElement;
  let selectionInputElement2: HTMLElement;
  let selectionInputElement3: HTMLElement;
  let selectionInputElement4: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          SprkSelectionLabelDirective,
          SprkSelectionInputDirective,
          SprkSelectionItemContainerComponent,
          TestComponent1,
          TestComponent2,
          TestComponent3,
          TestComponent4,
        ],
      }).compileComponents();
    }),
  );

  let spy;
  beforeEach(() => {
    spy = jest.spyOn(console, 'warn').mockImplementationOnce(() => {});

    fixture1 = TestBed.createComponent(TestComponent1);
    fixture2 = TestBed.createComponent(TestComponent2);
    fixture3 = TestBed.createComponent(TestComponent3);
    fixture4 = TestBed.createComponent(TestComponent4);

    component1 = fixture1.componentInstance;
    component2 = fixture2.componentInstance;
    component3 = fixture3.componentInstance;
    component4 = fixture4.componentInstance;

    selectionItemContainerFixture1 = TestBed.createComponent(
      SprkSelectionItemContainerComponent,
    );
    selectionItemContainerFixture2 = TestBed.createComponent(
      SprkSelectionItemContainerComponent,
    );
    selectionItemContainerFixture3 = TestBed.createComponent(
      SprkSelectionItemContainerComponent,
    );
    selectionItemContainerFixture4 = TestBed.createComponent(
      SprkSelectionItemContainerComponent,
    );

    selectionItemContainerComponent1 =
      selectionItemContainerFixture1.componentInstance;
    selectionItemContainerComponent2 =
      selectionItemContainerFixture2.componentInstance;
    selectionItemContainerComponent3 =
      selectionItemContainerFixture3.componentInstance;
    selectionItemContainerComponent4 =
      selectionItemContainerFixture4.componentInstance;

    selectionItemContainerComponent1.ngOnInit();
    selectionItemContainerComponent2.ngOnInit();
    selectionItemContainerComponent3.ngOnInit();
    selectionItemContainerComponent4.ngOnInit();

    fixture1.detectChanges();
    fixture2.detectChanges();
    fixture3.detectChanges();
    fixture4.detectChanges();

    selectionItemContainerElement1 = selectionItemContainerFixture1.nativeElement.querySelector(
      'div',
    );
    selectionItemContainerElement2 = selectionItemContainerFixture2.nativeElement.querySelector(
      'div',
    );
    selectionItemContainerElement3 = selectionItemContainerFixture3.nativeElement.querySelector(
      'div',
    );
    selectionItemContainerElement4 = selectionItemContainerFixture4.nativeElement.querySelector(
      'div',
    );

    selectionInputElement1 = fixture1.debugElement.query(By.css('input'))
      .nativeElement;
    selectionLabelElement1 = fixture1.debugElement.query(By.css('label'))
      .nativeElement;
    selectionInputElement2 = fixture2.debugElement.query(By.css('input'))
      .nativeElement;
    selectionLabelElement2 = fixture2.debugElement.query(By.css('label'))
      .nativeElement;
    selectionInputElement3 = fixture3.debugElement.query(By.css('input'))
      .nativeElement;
    selectionLabelElement3 = fixture3.debugElement.query(By.css('label'))
      .nativeElement;
    selectionInputElement4 = fixture4.debugElement.query(By.css('input'))
      .nativeElement;
    selectionLabelElement4 = fixture4.debugElement.query(By.css('label'))
      .nativeElement;
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should create itself', () => {
    expect(component1).toBeTruthy();
    expect(component2).toBeTruthy();
    expect(component3).toBeTruthy();
    expect(component4).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    selectionItemContainerComponent1.additionalClasses = 'sprk-u-man';
    selectionItemContainerFixture1.detectChanges();
    expect(selectionItemContainerElement1.classList.toString()).toEqual(
      'sprk-b-SelectionContainer sprk-u-man',
    );
  });

  it('should not change id or for when they are supplied', () => {
    expect(selectionLabelElement4.getAttribute('for')).toEqual('item-1');
    expect(selectionInputElement4.id).toEqual('item-1');
  });

  it('should set the for attr of the label and the id of the input when they are not supplied', () => {
    expect(selectionLabelElement1.getAttribute('for')).toEqual(
      selectionInputElement1.id,
    );
  });

  it('should add the checkbox classes to the input and the label if the type is checkbox', () => {
    expect(
      selectionInputElement1.classList.contains('sprk-b-Checkbox__input'),
    ).toBe(true);
    expect(
      selectionLabelElement1.classList.contains('sprk-b-Checkbox__label'),
    ).toBe(true);
  });

  it('should add the radio classes to the input and the label if the type is radio', () => {
    expect(
      selectionInputElement2.classList.contains('sprk-b-Radio__input'),
    ).toBe(true);
    expect(
      selectionLabelElement2.classList.contains('sprk-b-Radio__label'),
    ).toBe(true);
  });

  it("should console.warn if for and id both exist but don't match", () => {
    expect(console.warn).toHaveBeenNthCalledWith(
      2,
      `Spark Design System Warning - The value of 'for' (item-test) on the label should match the 'id' on the input (item-1).`,
    );
  });

  it('should console.warn if for exists but the id does not', () => {
    expect(console.warn).toHaveBeenNthCalledWith(
      1,
      "Spark Design System Warning - The value of 'for' (item-1) on the label expects a matching 'id' on the input.",
    );
  });
});
