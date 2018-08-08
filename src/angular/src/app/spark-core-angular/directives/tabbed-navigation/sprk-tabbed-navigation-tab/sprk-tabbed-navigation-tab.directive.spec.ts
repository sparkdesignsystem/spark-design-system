import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTabbedNavigationTabDirective } from './sprk-tabbed-navigation-tab.directive';

@Component({
  selector: 'test-component',
  template: `
    <button 
    isActive=true
    controlsId="cntrls"
    id="123"
    additionalClasses="sprk-u-man"
    sprk-tabbed-navigation-tab>Tab 1</button>`
})
class TestComponent { }

describe('Spark Tabbed Navigation Tab Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkTabbedNavigationTabDirective, TestComponent]
    }).compileComponents();

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
  })

  it('should add the active class and add aria-selected if isActive is set', () => {
    expect(element.classList.contains('sprk-c-Tabs__button--active')).toEqual(true);
    expect(element.getAttribute('aria-selected')).toEqual('true');
  });

  it('should add role=tab to the element', () => {
    expect(element.getAttribute('role')).toEqual('tab');
  })

  it('should add aria-controls to the incoming id', () => {
    expect(element.getAttribute('aria-controls')).toEqual('cntrls');
  });

  it('should set its id to the incoming id', () => {
    expect(element.getAttribute('id')).toEqual('123');
  });
});
