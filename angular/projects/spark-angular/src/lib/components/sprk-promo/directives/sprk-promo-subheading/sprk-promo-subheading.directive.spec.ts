import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkPromoSubheadingDirective } from './sprk-promo-subheading.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <p sprkPromoSubheading idString="test"></p>
    <p sprkPromoSubheading></p>
  `,
})
class TestComponent {}

describe('Spark Promo Subheading Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element0: HTMLElement;
  let element1: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkPromoSubheadingDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    element0 = fixture.nativeElement.querySelector('p');
    element1 = fixture.nativeElement.querySelectorAll('p')[1];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base class', () => {
    expect(element0.classList.contains('sprk-c-Promo__subtitle')).toBe(true);
    expect(element1.classList.contains('sprk-c-Promo__subtitle')).toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(element0.getAttribute('data-id') === 'test').toBe(true);
  });

  it('should not apply data-id when idString is not set', () => {
    expect(element1.getAttribute('data-id')).toBe(null);
  });
});
