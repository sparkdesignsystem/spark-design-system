import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkSpinnerDirective } from './sprk-spinner.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkSpinner></div>
    <div sprkSpinner variant="primary"></div>
    <div sprkSpinner variant="secondary"></div>
    <div sprkSpinner variant="dark"></div>
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
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('add the correct default classes', () => {
    expect(spinner1Element.classList.contains('sprk-c-Spinner--circle')).toBe(
      true,
    );
    expect(spinner1Element.classList.contains('sprk-c-Spinner')).toBe(true);
  });

  it('add the correct classes if primary variant', () => {
    expect(spinner2Element.classList.toString()).toContain(
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--primary',
    );
  });

  it('add the correct classes if secondary variant', () => {
    expect(spinner3Element.classList.toString()).toContain(
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--secondary',
    );
  });

  it('add the correct classes if dark variant', () => {
    expect(spinner4Element.classList.toString()).toContain(
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--dark',
    );
  });
});
