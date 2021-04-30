import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadNavItemsDirective } from './sprk-masthead-nav-items.directive';

@Component({
  selector: 'sprk-test',
  template: ` <nav sprkMastheadNavItems idString="test">Nav Content</nav> `,
})
class TestComponent {}

describe('SprkMastheadNavItemsDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkMastheadNavItemsDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('nav');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the nav link class', () => {
    expect(el.classList.contains('sprk-c-Masthead__little-nav')).toBe(true);
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });
});
