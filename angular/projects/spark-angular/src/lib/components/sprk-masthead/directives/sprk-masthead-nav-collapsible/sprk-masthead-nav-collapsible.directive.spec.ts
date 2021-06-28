import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadNavCollapsibleDirective } from './sprk-masthead-nav-collapsible.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <nav
      sprkMastheadNavCollapsible
      idString="test"
      id="custom-id"
      analyticsString="test-1"
    >
      Test 1
    </nav>
    <nav sprkMastheadNavCollapsible [isCollapsed]="false">Test 2</nav>
  `,
})
class TestComponent {}

describe('SprkMastheadNavCollapsibleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;
  let el2: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkMastheadNavCollapsibleDirective, TestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      el = fixture.nativeElement.querySelectorAll('nav')[0];
      el2 = fixture.nativeElement.querySelectorAll('nav')[1];
    }),
  );

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the collapsible nav class and collapsed class by default', () => {
    expect(el.classList.toString()).toBe(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
  });

  it('should not add the collapsed class if isCollapsed is false', () => {
    expect(el2.classList.toString()).toBe('sprk-c-Masthead__nav-collapsible');
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });

  it('should not add data-id if no value is supplied', () => {
    expect(el2.getAttribute('data-id')).toBe(null);
  });

  it('should add custom id if value is supplied', () => {
    expect(el.getAttribute('id')).toBe('custom-id');
  });

  it('should generate an id that contains sprk_masthead_nav_collapsible if no id is supplied', () => {
    expect(
      el2.getAttribute('id').includes('sprk_masthead_nav_collapsible'),
    ).toBe(true);
  });

  it('should add data-analytics if value is supplied', () => {
    expect(el.getAttribute('data-analytics')).toBe('test-1');
  });

  it('should not add data-analytics if no value is supplied', () => {
    expect(el2.getAttribute('data-analytics')).toBe(null);
  });
});
