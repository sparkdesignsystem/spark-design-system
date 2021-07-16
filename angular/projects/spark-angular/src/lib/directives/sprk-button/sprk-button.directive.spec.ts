import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkButtonDirective } from './sprk-button.directive';
import { SprkSpinnerDirective } from '../sprk-spinner/sprk-spinner.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <button sprkButton>Test 1</button>
    <!-- TODO: Remove spinning functionality from button on next release #3561 -->
    <button sprkButton [isSpinning]="true">Test 2</button>
    <!-- TODO: Remove spinning functionality from button on next release #3561 -->
    <button
      sprkButton
      variant="secondary"
      analyticsString="test"
      idString="id-test"
      [isSpinning]="spinnerVal"
    >
      Test 3
    </button>
    <button class="sprk-c-Button--tertiary" sprkButton>Test 4</button>
    <button
      sprkButton
      variant="tertiary"
      spinningAriaLabel="custom"
      [isSpinning]="spinnerVal"
    >
      Test 5
    </button>
    <button sprkButton additionalClasses="testClass" [isSpinning]="true">
      <div sprkSpinner></div>
    </button>
  `,
})
class TestComponent {
  spinnerVal = false;
}

describe('Spark Button Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let button1Element: HTMLElement;
  let button2Element: HTMLElement;
  let button3Element: HTMLElement;
  let button4Element: HTMLElement;
  let button5Element: HTMLElement;
  // TODO: Remove this test is for checking if new spinner directive is being used #3561
  let button6Element: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          SprkButtonDirective,
          SprkSpinnerDirective,
          TestComponent,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    button1Element = fixture.nativeElement.querySelectorAll('button')[0];
    button2Element = fixture.nativeElement.querySelectorAll('button')[1];
    button3Element = fixture.nativeElement.querySelectorAll('button')[2];
    button4Element = fixture.nativeElement.querySelectorAll('button')[3];
    button5Element = fixture.nativeElement.querySelectorAll('button')[4];
    button6Element = fixture.nativeElement.querySelectorAll('button')[5];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Remove spinning functionality from button on next release #3561
  it('should contain a spinner if isSpinning is true', () => {
    expect(button2Element.querySelectorAll('.sprk-c-Spinner').length).toBe(1);
  });

  // TODO: Remove spinning functionality from button on next release #3561
  it('should add the primary spinner class when isSpinning is true on a secondary button', () => {
    const spinnerNotThere = button3Element.querySelector('.sprk-c-Spinner');
    expect(spinnerNotThere).toBeNull();
    component.spinnerVal = true;
    fixture.detectChanges();
    const spinner = button3Element.querySelector('.sprk-c-Spinner');
    expect(spinner.classList.contains('sprk-c-Spinner--primary')).toBe(true);
    expect(spinner.classList.contains('sprk-c-Spinner--secondary')).toBe(false);
    expect(spinner.classList.contains('sprk-c-Spinner--dark')).toBe(false);
  });

  // TODO: Remove spinning functionality from button on next release #3561
  it('should add the secondary spinner class when isSpinning is true on a tertiary button', () => {
    const spinnerNotThere = button5Element.querySelector('.sprk-c-Spinner');
    expect(spinnerNotThere).toBeNull();
    component.spinnerVal = true;
    fixture.detectChanges();
    const spinner = button5Element.querySelector('.sprk-c-Spinner');
    expect(spinner.classList.contains('sprk-c-Spinner--secondary')).toBe(true);
    expect(spinner.classList.contains('sprk-c-Spinner--dark')).toBe(false);
  });

  it('should add the default button class when variant is not set', () => {
    expect(button1Element.classList.contains('sprk-c-Button')).toBe(true);
    expect(button1Element.classList.length).toBe(1);
  });

  it('should add the secondary button class when variant is secondary', () => {
    expect(button3Element.classList.contains('sprk-c-Button--secondary')).toBe(
      true,
    );
    expect(button3Element.classList.length).toBe(2);
  });

  it('should add the tertiary button class when variant is tertiary', () => {
    expect(button5Element.classList.contains('sprk-c-Button--tertiary')).toBe(
      true,
    );
    expect(button5Element.classList.length).toBe(2);
  });

  it('should add the additionalClasses', () => {
    expect(button6Element.classList.contains('testClass')).toBe(true);
  });

  it('should add loading state classes and attributes', () => {
    expect(button6Element.getAttribute('disabled')).toBe('true');
    expect(
      button6Element.classList.contains('sprk-c-Button--has-spinner'),
    ).toBe(true);
  });

  it('should add the value of analyticsString to data-analytics', () => {
    expect(button3Element.getAttribute('data-analytics')).toBe('test');
  });

  it('should add the value of idString to data-id', () => {
    expect(button3Element.getAttribute('data-id')).toBe('id-test');
  });

  it('should add the value of spinningAriaLabel to aria-label when isSpinning=true', () => {
    const spinnerEl = button5Element.querySelector('.sprk-c-Spinner');
    expect(spinnerEl).toBeNull();
    component.spinnerVal = true;
    fixture.detectChanges();
    const spinner = button5Element.querySelector('.sprk-c-Spinner');
    expect(spinner).toBeTruthy();
    expect(button5Element.getAttribute('aria-label')).toBe('custom');
  });

  // TODO: Remove spinning functionality from button on next release #3561
  it('should add the value of "Loading" to aria-label when isSpinning=true', () => {
    expect(button2Element.getAttribute('aria-label')).toBe('Loading');
  });

  // TODO: Remove spinning functionality from button on next release #3561
  it('should not add the spinning aria-label when isSpinning=false', () => {
    expect(button1Element.hasAttribute('aria-label')).toBe(false);
  });

  // This test makes sure the new variant @Input isn't a breaking change
  it('should still add the correct button class if variant is not used', () => {
    expect(button4Element.classList.contains('sprk-c-Button')).toBe(true);
    expect(button4Element.classList.contains('sprk-c-Button--tertiary')).toBe(
      true,
    );
    expect(button4Element.classList.length).toBe(2);
  });

  // TODO: Remove spinning functionality from button on next release #3561
  it('should fire setSpinning if isSpinning input is changed after first load', () => {
    const spinnerEl = button5Element.querySelector('.sprk-c-Spinner');
    expect(spinnerEl).toBeNull();
    component.spinnerVal = true;
    fixture.detectChanges();
    const spinner = button5Element.querySelector('.sprk-c-Spinner');
    expect(spinner).toBeTruthy();
  });

  // TODO: Remove. This is for checking if user is using new spinner directive #3561
  it('should render new spinner if using sprk-spinner-directive', () => {
    const spinnerEl = button6Element.querySelector('.sprk-c-Spinner');
    expect(spinnerEl.getAttribute('role')).toBe('progressbar');
    expect(spinnerEl.getAttribute('aria-valuetext')).toBe('Loading');
  });
});
