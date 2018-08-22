import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTabbedNavigationPanelDirective } from './sprk-tabbed-navigation-panel.directive';

@Component({
  selector: 'test-component',
  template: `
    <div additionalClasses="sprk-u-man"
    sprk-tabbed-navigation-panel>Panel</div>`
})

class TestComponent {}

describe('Spark Tabbed Navigation Panel Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SprkTabbedNavigationPanelDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element.classList.contains('sprk-u-man')).toEqual(true);
  });

  it('should add the correct panel classes', () => {
    expect(element.classList.contains('sprk-c-Tabs__content')).toEqual(true);
  });

  it('should add the correct role', () => {
    expect(element.getAttribute('role')).toEqual('tabpanel');
  })

  it('should add the correct tabindex', () => {
    expect(element.getAttribute('tabindex')).toEqual('0');
  });

  it('should add the hide class by default', () => {
    expect(element.classList.contains('sprk-u-Display--none')).toEqual(true);
  });
});
