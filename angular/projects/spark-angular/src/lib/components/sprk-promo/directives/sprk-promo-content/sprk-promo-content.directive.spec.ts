import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkPromoContentDirective } from './sprk-promo-content.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkPromoContent idString="test"></div>
    <div sprkPromoContent></div>
  `,
})
class TestComponent {}

describe('Spark Promo Content Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let contentElement0: HTMLElement;
  let contentElement1: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkPromoContentDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    contentElement0 = fixture.nativeElement.querySelector('div');
    contentElement1 = fixture.nativeElement.querySelectorAll('div')[1];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base class', () => {
    expect(contentElement0.classList.contains('sprk-c-Promo__content')).toBe(
      true,
    );
    expect(contentElement1.classList.contains('sprk-c-Promo__content')).toBe(
      true,
    );
  });

  it('should apply correct idString value to data-id', () => {
    expect(contentElement0.getAttribute('data-id') === 'test').toBe(true);
  });

  it('should not apply data-id when idString is not set', () => {
    expect(contentElement1.getAttribute('data-id')).toBe(null);
  });
});
