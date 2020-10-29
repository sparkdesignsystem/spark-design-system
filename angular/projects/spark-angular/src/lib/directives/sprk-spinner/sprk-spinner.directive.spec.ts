import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkSpinnerDirective } from './sprk-spinner.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkSpinner analyticsString="spinner-1" idString="spinner-1"></div>
    <div
      sprkSpinner
      variant="primary"
      role="testrole"
      altText="testvaluetext"
    ></div>
    <div sprkSpinner variant="secondary"></div>
    <div sprkSpinner variant="dark"></div>
    <div sprkSpinner size="large"></div>
    <div sprkSpinner additionalClasses="class1"></div>
  `,
})
class TestComponent {}

describe('Spark Spinner Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let spinner1Element: HTMLElement;
  let spinner2Element: HTMLElement;
  let spinner3Element: HTMLElement;
  let spinner4Element: HTMLElement;
  let spinner5Element: HTMLElement;
  let spinner6Element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkSpinnerDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    spinner1Element = fixture.nativeElement.querySelectorAll('div')[0];
    spinner2Element = fixture.nativeElement.querySelectorAll('div')[1];
    spinner3Element = fixture.nativeElement.querySelectorAll('div')[2];
    spinner4Element = fixture.nativeElement.querySelectorAll('div')[3];
    spinner5Element = fixture.nativeElement.querySelectorAll('div')[4];
    spinner6Element = fixture.nativeElement.querySelectorAll('div')[5];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add additional classes', () => {
    expect(spinner6Element.classList.contains('class1')).toBe(true);
  });

  it('add the correct default classes', () => {
    expect(spinner1Element.classList.contains('sprk-c-Spinner--circle')).toBe(
      true,
    );
    expect(spinner1Element.classList.contains('sprk-c-Spinner')).toBe(true);
    expect(spinner1Element.classList.length).toBe(2);
  });

  it('add the id string', () => {
    expect(spinner1Element.getAttribute('data-id')).toBe('spinner-1');
  });

  it('add the analytics attribute', () => {
    expect(spinner1Element.getAttribute('data-analytics')).toBe('spinner-1');
  });

  it('add the correct classes if primary variant', () => {
    expect(spinner2Element.classList.toString()).toContain(
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--primary',
    );
    expect(spinner5Element.classList.length).toBe(3);
  });

  it('add the correct classes if secondary variant', () => {
    expect(spinner3Element.classList.toString()).toContain(
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--secondary',
    );
    expect(spinner5Element.classList.length).toBe(3);
  });

  it('add the correct classes if dark variant', () => {
    expect(spinner4Element.classList.toString()).toContain(
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--dark',
    );
    expect(spinner5Element.classList.length).toBe(3);
  });

  it('add the correct classes if size is large', () => {
    expect(spinner5Element.classList.toString()).toContain(
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--large',
    );
    expect(spinner5Element.classList.length).toBe(3);
  });

  it('apply a default role attribute', () => {
    expect(spinner1Element.getAttribute('role')).toBe('progressbar');
  });

  it('apply a custom role attribute', () => {
    expect(spinner2Element.getAttribute('role')).toBe('testrole');
  });

  it('apply a default aria-valueText attribute', () => {
    expect(spinner1Element.getAttribute('aria-valuetext')).toBe('Loading');
  });

  it('apply a custom aria-valueText attribute', () => {
    expect(spinner2Element.getAttribute('aria-valuetext')).toBe(
      'testvaluetext',
    );
  });
});
