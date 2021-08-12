import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkCheckboxInputDirective } from '../../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.directive';
import { SprkCheckboxLabelDirective } from '../../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.directive';
import { SprkCheckboxItemComponent } from '../sprk-checkbox-item/sprk-checkbox-item.component';
import { SprkCheckboxGroupComponent } from './sprk-checkbox-group.component';
import { SprkLegendDirective } from '../../../directives/inputs/sprk-legend/sprk-legend.directive';
import { SprkFieldsetDirective } from '../../../directives/inputs/sprk-fieldset/sprk-fieldset.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-checkbox-group>
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item>
          <input type="checkbox" sprkCheckboxInput />
          <label sprkCheckboxLabel>Item 1</label>
        </sprk-checkbox-item>
        <div sprkHelperText>
          Optional helper text, used to clarify the field's intent.
        </div>
      </fieldset>
      <span sprkFieldError>Error Message!</span>
    </sprk-checkbox-group>
  `,
})
class TestComponent {}

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-checkbox-group>
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item>
          <input type="checkbox" sprkCheckboxInput />
          <label sprkCheckboxLabel>Item 1</label>
        </sprk-checkbox-item>
        <div sprkHelperText>
          Optional helper text, used to clarify the field's intent.
        </div>
      </fieldset>
      <span sprkFieldError id="foo">Error Message!</span>
    </sprk-checkbox-group>
  `,
})
class Test2Component {}

describe('SprkCheckboxGroupComponent', () => {
  let component: TestComponent;
  let checkboxContainerComponent: SprkCheckboxGroupComponent;
  let fixture: ComponentFixture<TestComponent>;
  let checkboxContainerFixture: ComponentFixture<SprkCheckboxGroupComponent>;
  let checkboxContainerElement: HTMLElement;
  let checkboxItemContainerElements;
  let errorElement: HTMLElement;

  let component2: TestComponent;
  let checkboxContainerComponent2: SprkCheckboxGroupComponent;
  let fixture2: ComponentFixture<TestComponent>;
  let checkboxContainerFixture2: ComponentFixture<SprkCheckboxGroupComponent>;
  let checkboxContainerElement2: HTMLElement;
  let checkboxItemContainerElements2;
  let errorElement2: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkCheckboxItemComponent,
        SprkCheckboxInputDirective,
        SprkCheckboxLabelDirective,
        SprkLegendDirective,
        SprkFieldsetDirective,
        SprkFieldErrorDirective,
        SprkCheckboxGroupComponent,
        TestComponent,
        Test2Component,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    checkboxContainerFixture = TestBed.createComponent(
      SprkCheckboxGroupComponent,
    );
    checkboxContainerComponent = checkboxContainerFixture.componentInstance;
    checkboxContainerComponent.ngAfterContentInit();
    fixture.detectChanges();

    checkboxContainerElement = checkboxContainerFixture.nativeElement.querySelector(
      'div',
    );
    checkboxItemContainerElements = fixture.debugElement.queryAll(
      By.css('sprk-checkbox-item'),
    );
    errorElement = fixture.debugElement.query(By.css('span')).nativeElement;

    fixture2 = TestBed.createComponent(Test2Component);
    component2 = fixture2.componentInstance;

    checkboxContainerFixture2 = TestBed.createComponent(
      SprkCheckboxGroupComponent,
    );
    checkboxContainerComponent2 = checkboxContainerFixture2.componentInstance;
    checkboxContainerComponent2.ngAfterContentInit();
    fixture2.detectChanges();

    checkboxContainerElement2 = checkboxContainerFixture2.nativeElement.querySelector(
      'div',
    );
    checkboxItemContainerElements2 = fixture2.debugElement.queryAll(
      By.css('sprk-checkbox-item'),
    );
    errorElement2 = fixture2.debugElement.query(By.css('span')).nativeElement;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    checkboxContainerComponent.additionalClasses = 'sprk-u-man';
    checkboxContainerFixture.detectChanges();
    expect(checkboxContainerElement.classList.toString()).toContain(
      'sprk-u-man',
    );
  });

  it('should add huge variant class when variant is huge', () => {
    checkboxContainerComponent.variant = 'huge';
    checkboxContainerFixture.detectChanges();
    expect(checkboxContainerElement.classList.toString()).toContain(
      'sprk-b-InputContainer--huge',
    );
  });

  it('should not add huge variant class when variant is not huge', () => {
    checkboxContainerComponent.variant = undefined;
    checkboxContainerFixture.detectChanges();
    expect(
      checkboxContainerElement.classList.contains(
        'sprk-b-InputContainer--huge',
      ),
    ).toBe(false);
  });

  it('should add the value of idString to data-id on the element', () => {
    checkboxContainerComponent.idString = 'test-id-str';
    checkboxContainerFixture.detectChanges();
    expect(checkboxContainerElement.getAttribute('data-id')).toBe(
      'test-id-str',
    );
  });

  it('should generate an error id if needed', () => {
    expect(errorElement.id).not.toBe('foo');

    checkboxItemContainerElements.forEach((item) => {
      expect(
        item.nativeElement
          .querySelector('input')
          .getAttribute('aria-describedby'),
      ).toEqual(errorElement.id);
    });
  });

  it('should not generate an error id if one is provided', () => {
    expect(errorElement2.id).toEqual('foo');

    checkboxItemContainerElements2.forEach((item) => {
      expect(
        item.nativeElement
          .querySelector('input')
          .getAttribute('aria-describedby'),
      ).toEqual('foo');
    });
  });
});
