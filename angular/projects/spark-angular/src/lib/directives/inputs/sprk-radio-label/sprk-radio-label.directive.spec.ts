import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkRadioLabelDirective } from './sprk-radio-label.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <label sprkRadioLabel idString="test-id-str">Label</label>
    <label sprkRadioLabel variant="huge">Label</label>
    <label sprkRadioLabel isDisabled="true" analyticsString="test-analytics-str"
      >Label</label
    >
  `,
})
class TestComponent {}

describe('Spark Helper Text Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let labelElement: HTMLElement;
  let itemElement: HTMLElement;
  let disabledElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkRadioLabelDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    labelElement = fixture.nativeElement.querySelector('label');
    itemElement = fixture.nativeElement.querySelectorAll('label')[1];
    disabledElement = fixture.nativeElement.querySelectorAll('label')[2];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes to the applied element when variant is huge', () => {
    expect(itemElement.classList.contains('sprk-b-Radio__label--huge')).toBe(
      true,
    );
  });

  it('should add the correct classes to the applied element when isDisabled is true', () => {
    expect(disabledElement.classList.contains('sprk-b-Label--disabled')).toBe(
      true,
    );
  });

  it('should add the value of idString to data-id on the element', () => {
    expect(labelElement.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should add the value of analyticsString to data-analytics on the element', () => {
    expect(disabledElement.getAttribute('data-analytics')).toBe(
      'test-analytics-str',
    );
  });
});
