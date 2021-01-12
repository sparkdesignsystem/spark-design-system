import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTabsButtonDirective } from './sprk-tabs-button.directive';

@Component({
  selector: 'sprk-test-component',
  template: `
    <button
      analyticsString="Tab 1"
      isActive="true"
      controlsId="cntrls"
      id="123"
      additionalClasses="sprk-u-man"
      sprkTabsButton
    >
      Tab 1
    </button>
  `,
})
class TestComponent {}

describe('Spark Tabs Tab Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkTabsButtonDirective, TestComponent],
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
  });

  it('should add role=tab to the element', () => {
    expect(element.getAttribute('role')).toEqual('tab');
  });

  it('should add a value for data-analytics if analyticsString has a value', () => {
    expect(element.getAttribute('data-analytics')).toEqual('Tab 1');
  });
});
