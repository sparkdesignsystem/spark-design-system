import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadNavItemDirective } from './sprk-masthead-nav-item.directive';

@Component({
  selector: 'sprk-test',
  template: ` <div sprkMastheadNavItem idString="test">Test</div> `,
})
class TestComponent {}

describe('SprkMastheadNavItemDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkMastheadNavItemDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('div');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the NavItem class', () => {
    expect(el.classList.contains('sprk-c-Masthead__nav-item')).toBe(true);
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });
});
