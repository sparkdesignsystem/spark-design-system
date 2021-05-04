import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadNavCollapsibleButtonComponent } from './sprk-masthead-nav-collapsible-button.component';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-masthead-nav-collapsible-button idString="test"
      >Test</sprk-masthead-nav-collapsible-button
    >
  `,
})
class TestComponent {}

describe('SprkMastheadNavCollapsibleButtonComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkMastheadNavCollapsibleButtonComponent, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('button');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the collapsible nav button class', () => {
    expect(el.classList.contains('sprk-c-Menu')).toBe(true);
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });
});
