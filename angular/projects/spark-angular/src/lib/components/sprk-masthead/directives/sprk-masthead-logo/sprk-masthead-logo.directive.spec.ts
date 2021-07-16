import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadLogoDirective } from './sprk-masthead-logo.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkMastheadLogo analyticsString="test-string" idString="test">
      Test 1
    </div>
    <div sprkMastheadLogo>Test 2</div>
  `,
})
class TestComponent {}

describe('SprkMastheadLogoDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;
  let el2: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkMastheadLogoDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('div');
    el2 = fixture.nativeElement.querySelectorAll('div')[1];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the Logo class', () => {
    expect(el.classList.toString()).toBe('sprk-c-Masthead__logo');
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });

  it('should not add data-id if no value is supplied', () => {
    expect(el2.getAttribute('data-id')).toBe(null);
  });

  it('should not add data-analytics if no value is supplied', () => {
    expect(el2.getAttribute('data-analytics')).toBe(null);
  });

  it('should add data-analytics if value is supplied', () => {
    expect(el.getAttribute('data-analytics')).toBe('test-string');
  });
});
