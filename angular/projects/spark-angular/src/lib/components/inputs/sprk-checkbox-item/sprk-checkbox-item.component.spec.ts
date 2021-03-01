import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkCheckboxInputDirective } from '../../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.directive';
import { SprkCheckboxLabelDirective } from '../../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.directive';
import { SprkCheckboxItemComponent } from './sprk-checkbox-item.component';

@Component({
  selector: 'sprk-test-1',
  template: `
    <sprk-checkbox-item>
      <input type="checkbox" sprkCheckboxInput />
      <label sprkCheckboxLabel>Item 1</label>
    </sprk-checkbox-item>
  `,
})
class Test1Component {}

@Component({
  selector: 'sprk-test-2',
  template: `
    <sprk-checkbox-item variant="huge">
      <input type="checkbox" sprkCheckboxInput variant="huge" />
      <label sprkCheckboxLabel variant="huge" for="item-1">Item 1</label>
    </sprk-checkbox-item>
  `,
})
class Test2Component {}

@Component({
  selector: 'sprk-test-3',
  template: `
    <sprk-checkbox-item>
      <input type="checkbox" sprkCheckboxInput id="item-1" />
      <label sprkCheckboxLabel for="item-test">
        Item 1
      </label>
    </sprk-checkbox-item>
  `,
})
class Test3Component {}

@Component({
  selector: 'sprk-test-4',
  template: `
    <sprk-checkbox-item>
      <input type="checkbox" sprkCheckboxInput id="item-1" />
      <label sprkCheckboxLabel for="item-1">
        Item 1
      </label>
    </sprk-checkbox-item>
  `,
})
class Test4Component {}

describe('SprkCheckboxItemComponent', () => {
  let component1: Test1Component;
  let component2: Test2Component;
  let component3: Test3Component;
  let component4: Test4Component;
  let checkboxItemComponent1: SprkCheckboxItemComponent;
  let checkboxItemComponent2: SprkCheckboxItemComponent;
  let checkboxItemComponent3: SprkCheckboxItemComponent;
  let checkboxItemComponent4: SprkCheckboxItemComponent;
  let fixture1: ComponentFixture<Test1Component>;
  let fixture2: ComponentFixture<Test2Component>;
  let fixture3: ComponentFixture<Test3Component>;
  let fixture4: ComponentFixture<Test4Component>;
  let checkboxItemFixture1: ComponentFixture<SprkCheckboxItemComponent>;
  let checkboxItemFixture2: ComponentFixture<SprkCheckboxItemComponent>;
  let checkboxItemFixture3: ComponentFixture<SprkCheckboxItemComponent>;
  let checkboxItemFixture4: ComponentFixture<SprkCheckboxItemComponent>;

  let checkboxItemElement1: HTMLElement;
  let checkboxItemElement2: HTMLElement;
  let checkboxItemElement3: HTMLElement;
  let checkboxItemElement4: HTMLElement;
  let checkboxLabelElement1: HTMLElement;
  let checkboxLabelElement2: HTMLElement;
  let checkboxLabelElement3: HTMLElement;
  let checkboxLabelElement4: HTMLElement;

  let checkboxInputElement1: HTMLElement;
  let checkboxInputElement2: HTMLElement;
  let checkboxInputElement3: HTMLElement;
  let checkboxInputElement4: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkCheckboxLabelDirective,
        SprkCheckboxInputDirective,
        SprkCheckboxItemComponent,
        Test1Component,
        Test2Component,
        Test3Component,
        Test4Component,
      ],
    }).compileComponents();
  }));

  let spy;
  beforeEach(() => {
    spy = jest.spyOn(console, 'warn').mockImplementationOnce(() => {});

    fixture1 = TestBed.createComponent(Test1Component);
    fixture2 = TestBed.createComponent(Test2Component);
    fixture3 = TestBed.createComponent(Test3Component);
    fixture4 = TestBed.createComponent(Test4Component);

    component1 = fixture1.componentInstance;
    component2 = fixture2.componentInstance;
    component3 = fixture3.componentInstance;
    component4 = fixture4.componentInstance;

    checkboxItemFixture1 = TestBed.createComponent(SprkCheckboxItemComponent);
    checkboxItemFixture2 = TestBed.createComponent(SprkCheckboxItemComponent);
    checkboxItemFixture3 = TestBed.createComponent(SprkCheckboxItemComponent);
    checkboxItemFixture4 = TestBed.createComponent(SprkCheckboxItemComponent);

    checkboxItemComponent1 = checkboxItemFixture1.componentInstance;
    checkboxItemComponent2 = checkboxItemFixture2.componentInstance;
    checkboxItemComponent3 = checkboxItemFixture3.componentInstance;
    checkboxItemComponent4 = checkboxItemFixture4.componentInstance;

    checkboxItemComponent1.ngOnInit();
    checkboxItemComponent2.ngOnInit();
    checkboxItemComponent3.ngOnInit();
    checkboxItemComponent4.ngOnInit();

    fixture1.detectChanges();
    fixture2.detectChanges();
    fixture3.detectChanges();
    fixture4.detectChanges();

    checkboxItemElement1 = checkboxItemFixture1.nativeElement.querySelector(
      'div',
    );
    checkboxItemElement2 = checkboxItemFixture2.nativeElement.querySelector(
      'div',
    );
    checkboxItemElement3 = checkboxItemFixture3.nativeElement.querySelector(
      'div',
    );
    checkboxItemElement4 = checkboxItemFixture4.nativeElement.querySelector(
      'div',
    );
    checkboxInputElement1 = fixture1.debugElement.query(By.css('input'))
      .nativeElement;
    checkboxLabelElement1 = fixture1.debugElement.query(By.css('label'))
      .nativeElement;
    checkboxInputElement2 = fixture2.debugElement.query(By.css('input'))
      .nativeElement;
    checkboxLabelElement2 = fixture2.debugElement.query(By.css('label'))
      .nativeElement;
    checkboxInputElement3 = fixture3.debugElement.query(By.css('input'))
      .nativeElement;
    checkboxLabelElement3 = fixture3.debugElement.query(By.css('label'))
      .nativeElement;
    checkboxInputElement4 = fixture4.debugElement.query(By.css('input'))
      .nativeElement;
    checkboxLabelElement4 = fixture4.debugElement.query(By.css('label'))
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
    checkboxItemComponent1.additionalClasses = 'sprk-u-man';
    checkboxItemFixture1.detectChanges();
    expect(checkboxItemElement1.classList.toString()).toEqual(
      'sprk-b-SelectionContainer sprk-b-Checkbox sprk-u-man',
    );
  });

  it('should add correct class when isVisibilityToggle is true', () => {
    checkboxItemComponent4.isVisibilityToggle = true;
    checkboxItemFixture4.detectChanges();
    expect(checkboxItemElement4.classList.toString()).toEqual(
      'sprk-b-SelectionContainer sprk-b-Checkbox sprk-b-InputContainer__visibility-toggle',
    );
  });

  it('should not change id or for when they are supplied', () => {
    expect(checkboxLabelElement4.getAttribute('for')).toEqual('item-1');
    expect(checkboxInputElement4.id).toEqual('item-1');
  });

  it('should set the for attr of the label and the id of the input when they are not supplied', () => {
    expect(checkboxLabelElement1.getAttribute('for')).toEqual(
      checkboxInputElement1.id,
    );
  });

  it('should add the huge variant class if variant is huge', () => {
    checkboxItemComponent1.variant = 'huge';
    checkboxItemFixture1.detectChanges();
    expect(
      checkboxItemElement1.classList.contains('sprk-b-Checkbox--huge'),
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
