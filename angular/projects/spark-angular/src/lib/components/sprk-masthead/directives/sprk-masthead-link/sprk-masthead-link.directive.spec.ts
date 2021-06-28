import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadLinkDirective } from './sprk-masthead-link.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <a href="#" sprkMastheadLink analyticsString="test-str" idString="test"
      >Test</a
    >
    <a href="#" sprkMastheadLink variant="navBar">Test</a>
  `,
})
class TestComponent {}

describe('SprkMastheadLinkDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;
  let el2: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkMastheadLinkDirective, TestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      el = fixture.nativeElement.querySelector('a');
      el2 = fixture.nativeElement.querySelectorAll('a')[1];
    }),
  );

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the link classes', () => {
    expect(el.classList.toString()).toBe(
      'sprk-c-Masthead__link sprk-b-Link sprk-b-Link--simple',
    );
  });

  it('should add the nav bar link class if variant is set to navBar', () => {
    expect(el2.classList.toString()).toBe(
      'sprk-c-Masthead__link--nav-bar sprk-c-Masthead__link sprk-b-Link sprk-b-Link--simple',
    );
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
