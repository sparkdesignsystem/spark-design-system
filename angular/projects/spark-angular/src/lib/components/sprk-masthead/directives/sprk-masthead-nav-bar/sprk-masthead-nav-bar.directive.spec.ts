import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadNavBarDirective } from './sprk-masthead-nav-bar.directive';

@Component({
  selector: 'sprk-test',
  template: ` <nav sprkMastheadNavBar idString="test">Test</nav> `,
})
class TestComponent {}

describe('SprkMastheadNavBarDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkMastheadNavBarDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('nav');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the navigation class', () => {
    expect(el.classList.contains('sprk-c-Masthead__big-nav')).toBe(true);
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });
});
