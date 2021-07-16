import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadNavItemsDirective } from './sprk-masthead-nav-items.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <nav sprkMastheadNavItems analyticsString="test-str" idString="test">
      Nav Content
    </nav>
    <nav sprkMastheadNavItems>Nav Content</nav>
  `,
})
class TestComponent {}

describe('SprkMastheadNavItemsDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;
  let el2: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkMastheadNavItemsDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('nav');
    el2 = fixture.nativeElement.querySelectorAll('nav')[1];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the nav link class', () => {
    expect(el.classList.toString()).toBe('sprk-c-Masthead__nav-items');
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });

  it('should add data-analytics if value is supplied', () => {
    expect(el.getAttribute('data-analytics')).toBe('test-str');
  });

  it('should not add data-analytics if no value is supplied', () => {
    expect(el2.getAttribute('data-analytics')).toBe(null);
  });

  it('should not add data-id if no value is supplied', () => {
    expect(el2.getAttribute('data-id')).toBe(null);
  });
});
