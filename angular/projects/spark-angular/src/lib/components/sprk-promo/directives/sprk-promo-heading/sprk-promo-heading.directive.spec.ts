import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkPromoHeadingDirective } from './sprk-promo-heading.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <h3 sprkPromoHeading idString="test"></h3>
    <h3 sprkPromoHeading></h3>
  `,
})
class TestComponent {}

describe('Spark Promo Heading Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let contentElement0: HTMLElement;
  let contentElement1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkPromoHeadingDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    contentElement0 = fixture.nativeElement.querySelector('h3');
    contentElement1 = fixture.nativeElement.querySelectorAll('h3')[1];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base class', () => {
    expect(contentElement0.classList.contains('sprk-c-Promo__title')).toBe(
      true,
    );
    expect(contentElement1.classList.contains('sprk-c-Promo__title')).toBe(
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