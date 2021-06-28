import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTextDirective } from './sprk-text.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <p sprkText variant="bodyOne" idString="foo">Text One</p>
    <h1 sprkText variant="bodyTwo">Text Two</h1>
    <cite sprkText variant="bodyThree">Text Three</cite>
    <small sprkText variant="bodyFour">Text Four</small>
  `,
})
class TestComponent {}

describe('Spark Text Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el1: HTMLElement;
  let el2: HTMLElement;
  let el3: HTMLElement;
  let el4: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkTextDirective, TestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      el1 = fixture.nativeElement.querySelector('p');
      el2 = fixture.nativeElement.querySelector('h1');
      el3 = fixture.nativeElement.querySelector('cite');
      el4 = fixture.nativeElement.querySelector('small');
    }),
  );

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the display one class if variant is bodyOne', () => {
    expect(el1.classList.contains('sprk-b-TypeBodyOne')).toBe(true);
  });

  it('should add the display two class if variant is bodyTwo', () => {
    expect(el2.classList.contains('sprk-b-TypeBodyTwo')).toBe(true);
  });

  it('should add the display three class if variant is bodyThree', () => {
    expect(el3.classList.contains('sprk-b-TypeBodyThree')).toBe(true);
  });

  it('should add the display four class if variant is bodyFour', () => {
    expect(el4.classList.contains('sprk-b-TypeBodyFour')).toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(el1.getAttribute('data-id')).toBe('foo');
  });
});
