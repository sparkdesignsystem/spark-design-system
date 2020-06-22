import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkRadioInputDirective } from '../../../directives/inputs/sprk-radio-input/sprk-radio-input.directive';
import { SprkRadioLabelDirective } from '../../../directives/inputs/sprk-radio-label/sprk-radio-label.directive';
import { SprkRadioItemComponent } from './sprk-radio-item.component';

@Component({
  selector: 'sprk-test-1',
  template: `
    <sprk-radio-item>
      <input type="radio" sprkRadioInput />
      <label sprkRadioLabel>Item 1</label>
    </sprk-radio-item>
  `,
})
class TestComponent1 {}

@Component({
  selector: 'sprk-test-2',
  template: `
    <sprk-radio-item variant="huge">
      <input type="radio" sprkRadioInput variant="huge" />
      <label sprkRadioLabel variant="huge" for="item-1">Item 1</label>
    </sprk-radio-item>
  `,
})
class TestComponent2 {}

@Component({
  selector: 'sprk-test-3',
  template: `
    <sprk-radio-item>
      <input type="radio" sprkRadioInput id="item-1" />
      <label sprkRadioLabel for="item-test">
        Item 1
      </label>
    </sprk-radio-item>
  `,
})
class TestComponent3 {}

@Component({
  selector: 'sprk-test-4',
  template: `
    <sprk-radio-item>
      <input type="radio" sprkRadioInput id="item-1" />
      <label sprkRadioLabel for="item-1">
        Item 1
      </label>
    </sprk-radio-item>
  `,
})
class TestComponent4 {}

describe('SprkRadioItemComponent', () => {
  let component1: TestComponent1;
  let component2: TestComponent2;
  let component3: TestComponent3;
  let component4: TestComponent4;
  let radioItemComponent1: SprkRadioItemComponent;
  let radioItemComponent2: SprkRadioItemComponent;
  let radioItemComponent3: SprkRadioItemComponent;
  let radioItemComponent4: SprkRadioItemComponent;
  let fixture1: ComponentFixture<TestComponent1>;
  let fixture2: ComponentFixture<TestComponent2>;
  let fixture3: ComponentFixture<TestComponent3>;
  let fixture4: ComponentFixture<TestComponent4>;
  let radioItemFixture1: ComponentFixture<SprkRadioItemComponent>;
  let radioItemFixture2: ComponentFixture<SprkRadioItemComponent>;
  let radioItemFixture3: ComponentFixture<SprkRadioItemComponent>;
  let radioItemFixture4: ComponentFixture<SprkRadioItemComponent>;

  let radioItemElement1: HTMLElement;
  let radioItemElement2: HTMLElement;
  let radioItemElement3: HTMLElement;
  let radioItemElement4: HTMLElement;
  let radioLabelElement1: HTMLElement;
  let radioLabelElement2: HTMLElement;
  let radioLabelElement3: HTMLElement;
  let radioLabelElement4: HTMLElement;

  let radioInputElement1: HTMLElement;
  let radioInputElement2: HTMLElement;
  let radioInputElement3: HTMLElement;
  let radioInputElement4: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkRadioLabelDirective,
        SprkRadioInputDirective,
        SprkRadioItemComponent,
        TestComponent1,
        TestComponent2,
        TestComponent3,
        TestComponent4,
      ],
    }).compileComponents();
  }));

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

    radioItemFixture1 = TestBed.createComponent(SprkRadioItemComponent);
    radioItemFixture2 = TestBed.createComponent(SprkRadioItemComponent);
    radioItemFixture3 = TestBed.createComponent(SprkRadioItemComponent);
    radioItemFixture4 = TestBed.createComponent(SprkRadioItemComponent);

    radioItemComponent1 = radioItemFixture1.componentInstance;
    radioItemComponent2 = radioItemFixture2.componentInstance;
    radioItemComponent3 = radioItemFixture3.componentInstance;
    radioItemComponent4 = radioItemFixture4.componentInstance;

    radioItemComponent1.ngOnInit();
    radioItemComponent2.ngOnInit();
    radioItemComponent3.ngOnInit();
    radioItemComponent4.ngOnInit();

    fixture1.detectChanges();
    fixture2.detectChanges();
    fixture3.detectChanges();
    fixture4.detectChanges();

    radioItemElement1 = radioItemFixture1.nativeElement.querySelector('div');
    radioItemElement2 = radioItemFixture2.nativeElement.querySelector('div');
    radioItemElement3 = radioItemFixture3.nativeElement.querySelector('div');
    radioItemElement4 = radioItemFixture4.nativeElement.querySelector('div');
    radioInputElement1 = fixture1.debugElement.query(By.css('input'))
      .nativeElement;
    radioLabelElement1 = fixture1.debugElement.query(By.css('label'))
      .nativeElement;
    radioInputElement2 = fixture2.debugElement.query(By.css('input'))
      .nativeElement;
    radioLabelElement2 = fixture2.debugElement.query(By.css('label'))
      .nativeElement;
    radioInputElement3 = fixture3.debugElement.query(By.css('input'))
      .nativeElement;
    radioLabelElement3 = fixture3.debugElement.query(By.css('label'))
      .nativeElement;
    radioInputElement4 = fixture4.debugElement.query(By.css('input'))
      .nativeElement;
    radioLabelElement4 = fixture4.debugElement.query(By.css('label'))
      .nativeElement;
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should create itself', () => {
    expect(component1).toBeTruthy();
    expect(component2).toBeTruthy();
    expect(component3).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    radioItemComponent1.additionalClasses = 'sprk-u-man';
    radioItemFixture1.detectChanges();
    expect(radioItemElement1.classList.toString()).toEqual(
      'sprk-b-SelectionContainer sprk-b-Radio sprk-u-man',
    );
  });

  it('should not change id or for when they are supplied', () => {
    expect(radioLabelElement4.getAttribute('for')).toEqual('item-1');
    expect(radioInputElement4.id).toEqual('item-1');
  });

  it('should set the for attr of the label and the id of the input when they are not supplied', () => {
    expect(radioLabelElement1.getAttribute('for')).toEqual(
      radioInputElement1.id,
    );
  });

  it('should add the huge variant class if variant is huge', () => {
    radioItemComponent1.variant = 'huge';
    radioItemFixture1.detectChanges();
    expect(radioItemElement1.classList.contains('sprk-b-Radio--huge')).toBe(
      true,
    );
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
