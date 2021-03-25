import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkPromoMediaDirective } from './sprk-promo-media.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <img sprkPromoMedia idString="test" />
    <img sprkPromoMedia isFlag="true" />
  `,
})
class TestComponent {}

describe('Spark Promo Media Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element0: HTMLElement;
  let element1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkPromoMediaDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    element0 = fixture.nativeElement.querySelector('img');
    element1 = fixture.nativeElement.querySelectorAll('img')[1];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base class', () => {
    expect(element0.classList.contains('sprk-c-Promo__image')).toBe(true);
    expect(element1.classList.contains('sprk-c-Promo__image')).toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(element0.getAttribute('data-id') === 'test').toBe(true);
  });

  it('should apply correct class if isFlag is true', () => {
    expect(element1.classList.contains('sprk-c-Promo__image--flag')).toBe(true);
  });

  it('should not apply flag media class if isFlag is false', () => {
    expect(element0.classList.contains('sprk-c-Promo__image--flag')).toBe(
      false,
    );
  });

  it('should not apply data-id when idString is not set', () => {
    expect(element1.getAttribute('data-id')).toBe(null);
  });
});
