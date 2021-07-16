import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTabbedNavigationTabDirective } from './sprk-tabbed-navigation-tab.directive';

@Component({
  selector: 'sprk-test-component',
  template: `
    <button
      analyticsString="Tab 1"
      defaultActive="true"
      id="123"
      additionalClasses="sprk-u-man"
      sprkTabbedNavigationTab
    >
      Tab 1
    </button>
  `,
})
class TestComponent {}

describe('Spark Tabbed Navigation Tab Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkTabbedNavigationTabDirective, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element.classList.contains('sprk-u-man')).toEqual(true);
  });

  it('should add role=tab to the element', () => {
    expect(element.getAttribute('role')).toEqual('tab');
  });

  it('should add a value for data-analytics if analyticsString has a value', () => {
    expect(element.getAttribute('data-analytics')).toEqual('Tab 1');
  });
});
