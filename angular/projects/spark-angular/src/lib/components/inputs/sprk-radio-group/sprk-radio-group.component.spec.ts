import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkRadioInputDirective } from '../../../directives/inputs/sprk-radio-input/sprk-radio-input.directive';
import { SprkRadioLabelDirective } from '../../../directives/inputs/sprk-radio-label/sprk-radio-label.directive';
import { SprkRadioItemComponent } from '../sprk-radio-item/sprk-radio-item.component';
import { SprkRadioGroupComponent } from './sprk-radio-group.component';
import { SprkLegendDirective } from '../../../directives/inputs/sprk-legend/sprk-legend.directive';
import { SprkFieldsetDirective } from '../../../directives/inputs/sprk-fieldset/sprk-fieldset.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-radio-group>
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Radio Group Label
        </legend>
        <sprk-radio-item>
          <input type="radio" sprkRadioInput />
          <label sprkRadioLabel>Item 1</label>
        </sprk-radio-item>
        <p sprkHelperText>Helper Text!</p>
      </fieldset>
      <span sprkFieldError>Error Message!</span>
    </sprk-radio-group>
  `,
})
class TestComponent {}

@Component({
  selector: 'sprk-test-2',
  template: `
    <sprk-radio-group>
      <sprk-radio-item>
        <input type="radio" sprkRadioInput />
        <label sprkRadioLabel>Item 1</label>
      </sprk-radio-item>
      <p sprkHelperText>Helper Text!</p>
      <span sprkFieldError id="foo">Error Message!</span>
    </sprk-radio-group>
  `,
})
class Test2Component {}

describe('SprkRadioGroupComponent', () => {
  let component: TestComponent;
  let radioContainerComponent: SprkRadioGroupComponent;
  let fixture: ComponentFixture<TestComponent>;
  let radioContainerFixture: ComponentFixture<SprkRadioGroupComponent>;
  let radioContainerElement: HTMLElement;
  let radioItemContainerElements;
  let errorElement: HTMLElement;

  let component2: TestComponent;
  let radioContainerComponent2: SprkRadioGroupComponent;
  let fixture2: ComponentFixture<TestComponent>;
  let radioContainerFixture2: ComponentFixture<SprkRadioGroupComponent>;
  let radioContainerElement2: HTMLElement;
  let radioItemContainerElements2;
  let errorElement2: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          SprkRadioItemComponent,
          SprkRadioInputDirective,
          SprkRadioLabelDirective,
          SprkLegendDirective,
          SprkFieldsetDirective,
          SprkFieldErrorDirective,
          SprkRadioGroupComponent,
          TestComponent,
          Test2Component,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    radioContainerFixture = TestBed.createComponent(SprkRadioGroupComponent);
    radioContainerComponent = radioContainerFixture.componentInstance;
    radioContainerComponent.ngAfterContentInit();
    fixture.detectChanges();

    radioContainerElement = radioContainerFixture.nativeElement.querySelector(
      'div',
    );
    radioItemContainerElements = fixture.debugElement.queryAll(
      By.css('sprk-radio-item'),
    );
    errorElement = fixture.debugElement.query(By.css('span')).nativeElement;

    fixture2 = TestBed.createComponent(Test2Component);
    component2 = fixture2.componentInstance;

    radioContainerFixture2 = TestBed.createComponent(SprkRadioGroupComponent);
    radioContainerComponent2 = radioContainerFixture2.componentInstance;
    radioContainerComponent2.ngAfterContentInit();
    fixture2.detectChanges();

    radioContainerElement2 = radioContainerFixture2.nativeElement.querySelector(
      'div',
    );
    radioItemContainerElements2 = fixture2.debugElement.queryAll(
      By.css('sprk-radio-item'),
    );
    errorElement2 = fixture2.debugElement.query(By.css('span')).nativeElement;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    radioContainerComponent.additionalClasses = 'sprk-u-man';
    radioContainerFixture.detectChanges();
    expect(radioContainerElement.classList.toString()).toContain('sprk-u-man');
  });

  it('should add huge variant class when variant is huge', () => {
    radioContainerComponent.variant = 'huge';
    radioContainerFixture.detectChanges();
    expect(radioContainerElement.classList.toString()).toContain(
      'sprk-b-InputContainer--huge',
    );
  });

  it('should not add huge variant class when variant is not huge', () => {
    radioContainerComponent.variant = undefined;
    radioContainerFixture.detectChanges();
    expect(
      radioContainerElement.classList.contains('sprk-b-InputContainer--huge'),
    ).toBe(false);
  });

  it('should add the value of idString to data-id on the element', () => {
    radioContainerComponent.idString = 'test-id-str';
    radioContainerFixture.detectChanges();
    expect(radioContainerElement.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should generate an error id if needed', () => {
    expect(errorElement.id).not.toBe('foo');

    radioItemContainerElements.forEach((item) => {
      expect(
        item.nativeElement
          .querySelector('input')
          .getAttribute('aria-describedby'),
      ).toEqual(errorElement.id);
    });
  });

  it('should not generate an error id if one is provided', () => {
    expect(errorElement2.id).toEqual('foo');

    radioItemContainerElements2.forEach((item) => {
      expect(
        item.nativeElement
          .querySelector('input')
          .getAttribute('aria-describedby'),
      ).toEqual('foo');
    });
  });
});
