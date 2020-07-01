import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
      <span sprkFieldError id="foo">Error Message!</span>
    </sprk-radio-group>
  `,
})
class TestComponent {}

describe('SprkRadioGroupComponent', () => {
  let component: TestComponent;
  let radioContainerComponent: SprkRadioGroupComponent;
  let fixture: ComponentFixture<TestComponent>;
  let radioContainerFixture: ComponentFixture<SprkRadioGroupComponent>;
  let radioContainerElement: HTMLElement;
  let radioItemContainerElements;
  let errorElement: HTMLElement;

  beforeEach(async(() => {
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
      ],
    }).compileComponents();
  }));

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

  it('should map any inputs inside radio-items to the field-error', () => {
    radioItemContainerElements.forEach((item) => {
      expect(
        item.nativeElement
          .querySelector('input')
          .getAttribute('aria-describedby'),
      ).toEqual(errorElement.id);
    });
  });
});
