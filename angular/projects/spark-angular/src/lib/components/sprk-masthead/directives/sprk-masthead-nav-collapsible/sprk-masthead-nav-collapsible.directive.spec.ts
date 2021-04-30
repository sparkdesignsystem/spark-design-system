import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadNavCollapsibleDirective } from './sprk-masthead-nav-collapsible.directive';

@Component({
  selector: 'sprk-test',
  template: ` <nav sprkMastheadNavCollapsible idString="test">Test</nav> `,
})
class TestComponent {}

describe('SprkMastheadNavCollapsibleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkMastheadNavCollapsibleDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('nav');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the collapsible nav class', () => {
    expect(el.classList.contains('sprk-c-Masthead__narrow-nav')).toBe(true);
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });
});
